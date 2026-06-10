import { Link, usePage } from '@inertiajs/react';
import React from 'react';

const navLinks = [
    { href: '/', label: 'Home', key: 'home' },
    { href: '/about', label: 'About Us', key: 'about' },
];

const cartLink = { href: '/cart', label: 'Cart', key: 'cart' };
const orderHistoryLink = {
    href: '/orders',
    label: 'Order History',
    key: 'orders',
};

export default function Header({ activePage }: { activePage?: string }) {
    const { auth } = usePage().props as any;
    const isAuthenticated = auth?.user !== null;
    const isAdmin = auth?.user?.role === 'admin';

    return (
        <header className="header sticky top-0 z-10 bg-white">
            <a href="/">
                <img src="/folke-logo.svg" alt="Folke." className="logo" />
            </a>
            <nav className="nav-center">
                {navLinks.map((link) => (
                    <a
                        key={link.key}
                        href={link.href}
                        className={`nav-link ${activePage === link.key ? 'active' : ''}`}
                    >
                        {link.label}
                    </a>
                ))}
            </nav>
            <div className="nav-actions">
                {isAuthenticated ? (
                    <>
                        {auth.user?.email === 'admin@example.com' ? (
                            <a
                                href="/admin/dashboard"
                                className="btn btn-brown"
                            >
                                Admin
                            </a>
                        ) : null}

                        <Link
                            href={'/logout'}
                            method={'post'}
                            className="btn btn-outline"
                        >
                            Log out
                        </Link>

                        {!isAdmin && (
                            <>
                                <a
                                    href={cartLink.href}
                                    className={`btn btn-cart ${activePage === cartLink.key ? 'active' : ''}`}
                                >
                                    {cartLink.label}
                                    <span className="notification-dot"></span>
                                </a>
                                <a
                                    href={orderHistoryLink.href}
                                    className={`btn btn-cart ${activePage === orderHistoryLink.key ? 'active' : ''}`}
                                >
                                    {orderHistoryLink.label}
                                </a>
                            </>
                        )}
                    </>
                ) : (
                    <>
                        <a href={'/login'} className="btn btn-outline">
                            Sign in
                        </a>
                        <a href={'/register'} className="btn btn-dark">
                            Register
                        </a>
                    </>
                )}
            </div>
        </header>
    );
}
