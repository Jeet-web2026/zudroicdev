import { ReactNode } from "react";

export default function AuthLayout({ children }: { children: ReactNode }) {
    return (
        <main className="flex justify-center items-center flex-col min-h-svh">
            <section className="flex w-full max-w-sm flex-col gap-6">
                {children}
            </section>
        </main>
    );
}