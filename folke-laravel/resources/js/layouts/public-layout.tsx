import { login, register } from '@/wayfinder/routes';
import { usePage } from '@inertiajs/react';
import React from 'react';

const navLinks = [
    { href: '/', label: 'Home', key: 'home' },
    { href: '/about', label: 'About Us', key: 'about' },
    { href: '/product', label: 'Products', key: 'product' },
];

const cartLink = { href: '/cart', label: 'Cart', key: 'cart' };

export default function PublicLayout({
    children,
    activePage,
}: {
    children: React.ReactNode;
    activePage?: string;
}) {
    const { auth } = usePage().props;
    const isAuthenticated = auth.user !== null;

    return (
        <>
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
                        <a
                            href={cartLink.href}
                            className={`btn btn-cart${activePage === cartLink.key ? 'active' : ''}`}
                        >
                            {cartLink.label}
                            <span className="notification-dot"></span>
                        </a>
                    ) : (
                        <>
                            <a href={login().url} className="btn btn-outline">
                                Sign in
                            </a>
                            <a href={register().url} className="btn btn-dark">
                                Register
                            </a>
                        </>
                    )}
                </div>
            </header>
            <main className="min-h-[calc(100dvh-2rem)]">{children}</main>
            <footer className="footer">
                <div className="footer-content">
                    <div className="footer-brand">
                        <img
                            src="/folke-logo.svg"
                            alt="Folke."
                            className="footer-logo"
                        />
                        <div className="social-links">
                            <a href="#" className="social-link" aria-label="X">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <line x1="18" y1="6" x2="6" y2="18"></line>
                                    <line x1="6" y1="6" x2="18" y2="18"></line>
                                </svg>
                            </a>
                            <a
                                href="#"
                                className="social-link"
                                aria-label="Instagram"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <rect
                                        x="2"
                                        y="2"
                                        width="20"
                                        height="20"
                                        rx="5"
                                        ry="5"
                                    ></rect>
                                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                    <line
                                        x1="17.5"
                                        y1="6.5"
                                        x2="17.51"
                                        y2="6.5"
                                    ></line>
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div className="footer-links">
                        <h4 className="footer-title">Resources</h4>
                        <ul>
                            <li>
                                <a href="#">Blog</a>
                            </li>
                            <li>
                                <a href="#">Best practices</a>
                            </li>
                            <li>
                                <a href="#">Colors</a>
                            </li>
                            <li>
                                <a href="#">Color wheel</a>
                            </li>
                            <li>
                                <a href="#">Support</a>
                            </li>
                            <li>
                                <a href="#">Developers</a>
                            </li>
                            <li>
                                <a href="#">Resource library</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </footer>
        </>
    );
}
