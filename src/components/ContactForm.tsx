'use client';

import { useState } from 'react';
import { Button } from './ui/Button';
import { CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

interface FormData {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    interest: string;
    message: string;
}

interface FieldErrors {
    firstName?: string;
    lastName?: string;
    email?: string;
    message?: string;
}

interface FormStatus {
    type: 'idle' | 'loading' | 'success' | 'error';
    message: string;
}

export function ContactForm() {
    const [formData, setFormData] = useState<FormData>({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        interest: '',
        message: '',
    });

    const [errors, setErrors] = useState<FieldErrors>({});
    const [touched, setTouched] = useState<Record<string, boolean>>({});

    const [status, setStatus] = useState<FormStatus>({
        type: 'idle',
        message: '',
    });

    // Validate a single field
    const validateField = (name: string, value: string): string | undefined => {
        switch (name) {
            case 'firstName':
                if (!value.trim()) return 'First name is required';
                if (value.trim().length < 2) return 'First name must be at least 2 characters';
                break;
            case 'lastName':
                if (!value.trim()) return 'Last name is required';
                if (value.trim().length < 2) return 'Last name must be at least 2 characters';
                break;
            case 'email':
                if (!value.trim()) return 'Email is required';
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(value)) return 'Please enter a valid email address';
                break;
            case 'message':
                if (!value.trim()) return 'Message is required';
                if (value.trim().length < 10) return 'Message must be at least 10 characters';
                break;
        }
        return undefined;
    };

    // Validate all fields
    const validateForm = (): boolean => {
        const newErrors: FieldErrors = {};

        const firstNameError = validateField('firstName', formData.firstName);
        if (firstNameError) newErrors.firstName = firstNameError;

        const lastNameError = validateField('lastName', formData.lastName);
        if (lastNameError) newErrors.lastName = lastNameError;

        const emailError = validateField('email', formData.email);
        if (emailError) newErrors.email = emailError;

        const messageError = validateField('message', formData.message);
        if (messageError) newErrors.message = messageError;

        setErrors(newErrors);
        setTouched({ firstName: true, lastName: true, email: true, message: true });

        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));

        // Clear error when user starts typing
        if (errors[name as keyof FieldErrors]) {
            setErrors((prev) => ({
                ...prev,
                [name]: undefined,
            }));
        }

        // Clear global error status
        if (status.type === 'error') {
            setStatus({ type: 'idle', message: '' });
        }
    };

    const handleBlur = (
        e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;
        setTouched((prev) => ({ ...prev, [name]: true }));

        const error = validateField(name, value);
        setErrors((prev) => ({
            ...prev,
            [name]: error,
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Validate all fields before submission
        if (!validateForm()) {
            return;
        }

        setStatus({ type: 'loading', message: '' });

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok) {
                setStatus({
                    type: 'success',
                    message: data.message || 'Your message has been sent successfully!',
                });
                // Reset form
                setFormData({
                    firstName: '',
                    lastName: '',
                    email: '',
                    phone: '',
                    interest: '',
                    message: '',
                });
                setErrors({});
                setTouched({});
            } else {
                setStatus({
                    type: 'error',
                    message: data.error || 'Something went wrong. Please try again.',
                });
            }
        } catch {
            setStatus({
                type: 'error',
                message: 'Failed to send message. Please try again later.',
            });
        }
    };

    const getInputClassName = (fieldName: keyof FieldErrors) => {
        const baseClass = "block w-full rounded-lg border-0 px-4 py-3 text-green-900 shadow-sm ring-1 ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 bg-white disabled:opacity-50 disabled:cursor-not-allowed";
        const hasError = touched[fieldName] && errors[fieldName];

        if (hasError) {
            return `${baseClass} ring-red-300 focus:ring-red-500`;
        }
        return `${baseClass} ring-green-200 focus:ring-green-600`;
    };

    return (
        <div className="bg-green-50 p-8 rounded-2xl border border-green-100">
            <h3 className="text-2xl font-bold text-green-900 mb-2">Send Us a Message</h3>
            <p className="text-gray-600 text-sm mb-6">
                Fill out the form below and we&apos;ll get back to you shortly.
            </p>

            {/* Success Message */}
            {status.type === 'success' && (
                <div className="mb-6 p-4 bg-green-100 border border-green-300 rounded-xl flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                    <div>
                        <p className="text-green-800 font-medium">Message Sent!</p>
                        <p className="text-green-700 text-sm">{status.message}</p>
                    </div>
                </div>
            )}

            {/* Global Error Message */}
            {status.type === 'error' && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl flex items-start gap-3">
                    <AlertCircle className="h-5 w-5 text-red-500 shrink-0 mt-0.5" />
                    <div>
                        <p className="text-red-800 font-medium">Error</p>
                        <p className="text-red-600 text-sm">{status.message}</p>
                    </div>
                </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                        <label
                            htmlFor="firstName"
                            className="block text-sm font-semibold leading-6 text-green-900"
                        >
                            First name <span className="text-red-500">*</span>
                        </label>
                        <div className="mt-2">
                            <input
                                type="text"
                                name="firstName"
                                id="firstName"
                                autoComplete="given-name"
                                placeholder="Enter your first name"
                                value={formData.firstName}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                disabled={status.type === 'loading'}
                                className={getInputClassName('firstName')}
                            />
                            {touched.firstName && errors.firstName && (
                                <p className="mt-1 text-sm text-red-600">{errors.firstName}</p>
                            )}
                        </div>
                    </div>
                    <div>
                        <label
                            htmlFor="lastName"
                            className="block text-sm font-semibold leading-6 text-green-900"
                        >
                            Last name <span className="text-red-500">*</span>
                        </label>
                        <div className="mt-2">
                            <input
                                type="text"
                                name="lastName"
                                id="lastName"
                                autoComplete="family-name"
                                placeholder="Enter your last name"
                                value={formData.lastName}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                disabled={status.type === 'loading'}
                                className={getInputClassName('lastName')}
                            />
                            {touched.lastName && errors.lastName && (
                                <p className="mt-1 text-sm text-red-600">{errors.lastName}</p>
                            )}
                        </div>
                    </div>
                </div>
                <div>
                    <label
                        htmlFor="email"
                        className="block text-sm font-semibold leading-6 text-green-900"
                    >
                        Email <span className="text-red-500">*</span>
                    </label>
                    <div className="mt-2">
                        <input
                            type="email"
                            name="email"
                            id="email"
                            autoComplete="email"
                            placeholder="your.email@example.com"
                            value={formData.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            disabled={status.type === 'loading'}
                            className={getInputClassName('email')}
                        />
                        {touched.email && errors.email && (
                            <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                        )}
                    </div>
                </div>
                <div>
                    <label
                        htmlFor="phone"
                        className="block text-sm font-semibold leading-6 text-green-900"
                    >
                        Phone number
                    </label>
                    <div className="mt-2">
                        <input
                            type="tel"
                            name="phone"
                            id="phone"
                            autoComplete="tel"
                            placeholder="+880 1XXX-XXXXXX"
                            value={formData.phone}
                            onChange={handleChange}
                            disabled={status.type === 'loading'}
                            className="block w-full rounded-lg border-0 px-4 py-3 text-green-900 shadow-sm ring-1 ring-inset ring-green-200 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6 bg-white disabled:opacity-50 disabled:cursor-not-allowed"
                        />
                    </div>
                </div>
                <div>
                    <label
                        htmlFor="interest"
                        className="block text-sm font-semibold leading-6 text-green-900"
                    >
                        I am interested in
                    </label>
                    <div className="mt-2">
                        <select
                            name="interest"
                            id="interest"
                            value={formData.interest}
                            onChange={handleChange}
                            disabled={status.type === 'loading'}
                            className="block w-full rounded-lg border-0 px-4 py-3 text-green-900 shadow-sm ring-1 ring-inset ring-green-200 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6 bg-white disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            <option value="">Select an option</option>
                            <option value="residential">Residential Property</option>
                            <option value="commercial">Commercial Property</option>
                            <option value="investment">Real Estate Investment</option>
                            <option value="joint-venture">Joint Venture Partnership</option>
                            <option value="consultancy">Development Consultancy</option>
                            <option value="other">Other</option>
                        </select>
                    </div>
                </div>
                <div>
                    <label
                        htmlFor="message"
                        className="block text-sm font-semibold leading-6 text-green-900"
                    >
                        Message <span className="text-red-500">*</span>
                    </label>
                    <div className="mt-2">
                        <textarea
                            name="message"
                            id="message"
                            rows={4}
                            placeholder="Tell us about your requirements..."
                            value={formData.message}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            disabled={status.type === 'loading'}
                            className={getInputClassName('message')}
                        />
                        {touched.message && errors.message && (
                            <p className="mt-1 text-sm text-red-600">{errors.message}</p>
                        )}
                    </div>
                </div>
                <div>
                    <Button
                        type="submit"
                        variant="primary"
                        className="w-full"
                        disabled={status.type === 'loading'}
                    >
                        {status.type === 'loading' ? (
                            <>
                                <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                                Sending...
                            </>
                        ) : (
                            'Send Message'
                        )}
                    </Button>
                </div>
            </form>
        </div>
    );
}
