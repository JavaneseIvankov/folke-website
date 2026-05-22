import { Form, Head, Link } from '@inertiajs/react';
import { Eye, EyeOff } from 'lucide-react';
import { useState } from 'react';
import { register } from '@/wayfinder/routes';
import { store } from '@/wayfinder/routes/login';
import { request } from '@/wayfinder/routes/password';

type Props = {
    status?: string;
    canResetPassword: boolean;
};

export default function Login({ status, canResetPassword }: Props) {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <>
            <Head title="Log in" />

            {status && (
                <p className="mb-4 text-center text-sm font-medium text-green-700">
                    {status}
                </p>
            )}

            <Form
                {...store.form()}
                resetOnSuccess={['password']}
                className="flex flex-col gap-5"
            >
                {({ processing, errors }) => (
                    <>
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
                                autoFocus
                                tabIndex={1}
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
                            <div className="flex items-center justify-between">
                                <label
                                    htmlFor="password"
                                    className="text-sm font-medium text-[var(--text-dark)]"
                                >
                                    Password
                                </label>
                                {canResetPassword && (
                                    <Link
                                        href={request()}
                                        className="text-sm text-[var(--text-muted)] underline underline-offset-4 hover:text-[var(--text-dark)]"
                                        tabIndex={5}
                                    >
                                        Forgot password?
                                    </Link>
                                )}
                            </div>
                            <div className="relative">
                                <input
                                    id="password"
                                    type={showPassword ? 'text' : 'password'}
                                    name="password"
                                    required
                                    tabIndex={2}
                                    autoComplete="current-password"
                                    placeholder="Password"
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

                        <div className="flex items-center gap-2">
                            <input
                                id="remember"
                                type="checkbox"
                                name="remember"
                                tabIndex={3}
                                className="size-4 bg-primary"
                            />
                            <label
                                htmlFor="remember"
                                className="text-sm text-[var(--text-dark)]"
                            >
                                Remember me
                            </label>
                        </div>

                        <button
                            type="submit"
                            disabled={processing}
                            tabIndex={4}
                            data-test="login-button"
                            className="mt-2 w-full bg-[var(--primary-color)] px-4 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-90 disabled:opacity-50"
                        >
                            {processing ? 'Logging in...' : 'Log in'}
                        </button>

                        <p className="text-center text-sm text-[var(--text-muted)]">
                            Don't have an account?{' '}
                            <Link
                                href={register()}
                                tabIndex={5}
                                className="text-[var(--text-dark)] underline underline-offset-4 hover:text-[var(--primary-color)]"
                            >
                                Sign up
                            </Link>
                        </p>
                    </>
                )}
            </Form>
        </>
    );
}

Login.layout = {
    title: 'Log in to your account',
    description: 'Enter your email and password below to log in',
};
