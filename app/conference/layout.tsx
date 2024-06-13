import React, { ReactNode } from 'react';

interface ConferenceLayoutProps {
    children: ReactNode;
}

export default function ConferenceLayout({ children }: ConferenceLayoutProps) {
    return (
        <>
            <section>{children}</section>
        </>
    );
}