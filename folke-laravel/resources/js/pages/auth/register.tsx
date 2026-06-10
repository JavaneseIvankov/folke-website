import { Form, Head, Link } from '@inertiajs/react';
import { Eye, EyeOff } from 'lucide-react';
import { useState } from 'react';
import { store } from '@/wayfinder/routes/register';

type Props = {
    passwordRules: string;
};

export default function Register({ passwordRules }: Props) {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirm, setShowConfirm] = useState(false);

    return (
        <>
            <Head title="Register" />

            <Form
                {...store.form()}
                resetOnSuccess={['password', 'password_confirmation']}
                disableWhileProcessing
                className="flex flex-col gap-5"
            >
                {({ processing, errors }) => (
                    <>
                        <div className="flex flex-col gap-1.5">
                            <label
                                htmlFor="name"
                                className="text-sm font-medium text-[var(--text-dark)]"
                            >
                                Name
                            </label>
                            <input
                                id="name"
                                type="text"
                                name="name"
                                required
                                autoFocus
                                tabIndex={1}
                                autoComplete="name"
                                placeholder="Full name"
                                className="w-full border border-[#e0e0e0] bg-transparent px-3 py-2 text-sm transition-colors outline-none focus:border-[var(--primary-color)]"
                            />
                            {errors.name && (
                                <p className="text-sm text-red-600">
                                    {errors.name}
                                </p>
                            )}
                        </div>

                        <div className="flex flex-col gap-1.5">
                            <label
                                htmlFor="email"
                                className="text-sm font-medium text-[var(--text-dark)]"
                            >
                                Email address
                            </label>
                            <input
                                id="email"
                                type="email"
                                name="email"
                                required
                                tabIndex={2}
                                autoComplete="email"
                                placeholder="email@example.com"
                                className="w-full border border-[#e0e0e0] bg-transparent px-3 py-2 text-sm transition-colors outline-none focus:border-[var(--primary-color)]"
                            />
                            {errors.email && (
                                <p className="text-sm text-red-600">
                                    {errors.email}
                                </p>
                            )}
                        </div>

                        <div className="flex flex-col gap-1.5">
                            <label
                                htmlFor="password"
                                className="text-sm font-medium text-[var(--text-dark)]"
                            >
                                Password
                            </label>
                            <div className="relative">
                                <input
                                    id="password"
                                    type={showPassword ? 'text' : 'password'}
                                    name="password"
                                    required
                                    tabIndex={3}
                                    autoComplete="new-password"
                                    placeholder="Password"
                                    passwordrules={passwordRules}
                                    className="w-full border border-[#e0e0e0] bg-transparent px-3 py-2 pr-10 text-sm transition-colors outline-none focus:border-[var(--primary-color)]"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword((v) => !v)}
                                    className="absolute inset-y-0 right-0 flex items-center px-3 text-[var(--text-muted)] hover:text-[var(--text-dark)]"
                                    aria-label={
                                        showPassword
                                            ? 'Hide password'
                                            : 'Show password'
                                    }
                                    tabIndex={-1}
                                >
                                    {showPassword ? (
                                        <EyeOff className="size-4" />
                                    ) : (
                                        <Eye className="size-4" />
                                    )}
                                </button>
                            </div>
                            {errors.password && (
                                <p className="text-sm text-red-600">
                                    {errors.password}
                                </p>
                            )}
                        </div>

                        <div className="flex flex-col gap-1.5">
                            <label
                                htmlFor="password_confirmation"
                                className="text-sm font-medium text-[var(--text-dark)]"
                            >
                                Confirm password
                            </label>
                            <div className="relative">
                                <input
                                    id="password_confirmation"
                                    type={showConfirm ? 'text' : 'password'}
                                    name="password_confirmation"
                                    required
                                    tabIndex={4}
                                    autoComplete="new-password"
                                    placeholder="Confirm password"
                                    passwordrules={passwordRules}
                                    className="w-full border border-[#e0e0e0] bg-transparent px-3 py-2 pr-10 text-sm transition-colors outline-none focus:border-[var(--primary-color)]"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowConfirm((v) => !v)}
                                    className="absolute inset-y-0 right-0 flex items-center px-3 text-[var(--text-muted)] hover:text-[var(--text-dark)]"
                                    aria-label={
                                        showConfirm
                                            ? 'Hide password'
                                            : 'Show password'
                                    }
                                    tabIndex={-1}
                                >
                                    {showConfirm ? (
                                        <EyeOff className="size-4" />
                                    ) : (
                                        <Eye className="size-4" />
                                    )}
                                </button>
                            </div>
                            {errors.password_confirmation && (
                                <p className="text-sm text-red-600">
                                    {errors.password_confirmation}
                                </p>
                            )}
                        </div>

                        <button
                            type="submit"
                            tabIndex={5}
                            data-test="register-user-button"
                            disabled={processing}
                            className="mt-2 w-full bg-[var(--primary-color)] px-4 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-90 disabled:opacity-50"
                        >
                            {processing
                                ? 'Creating account...'
                                : 'Create account'}
                        </button>

                        <p className="text-center text-sm text-[var(--text-muted)]">
                            Already have an account?{' '}
                            <Link
                                href={'/login'}
                                tabIndex={6}
                                className="text-[var(--text-dark)] underline underline-offset-4 hover:text-[var(--primary-color)]"
                            >
                                Log in
                            </Link>
                        </p>
                    </>
                )}
            </Form>
        </>
    );
}

Register.layout = {
    title: 'Create an account',
    description: 'Enter your details below to create your account',
};
