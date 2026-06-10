import React from 'react';
import Header from '@/components/Header';



export default function DashboardLayout({
    children,
    activePage,
}: {
    children: React.ReactNode;
    activePage?: string;
}) {


    return (
        <>
            <Header activePage={activePage} />
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
                    <div className="footer-links min-h-[15rem]"></div>
                </div>
            </footer>
        </>
    );
}
