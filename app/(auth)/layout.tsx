import { buttonVariants } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

export default function AuthLayout({ children }: { children: ReactNode }) {
    return (
        <main className="flex justify-center items-center flex-col min-h-svh">
            <section className="flex w-full max-w-sm flex-col gap-6">
                <div role="navigate">
                    <Link href="/" className={buttonVariants({
                        variant: 'outline',
                        className: 'absolute top-4 left-4'
                    })}>
                        <ArrowLeft />
                        Back
                    </Link>
                </div>
                <div className="flex flex-col gap-5">
                    <Link href="/" className="mx-auto">
                        <Image src="/assets/images/z-logo.png" height={100} width={100} alt="Logo" />
                    </Link>
                    {children}
                </div>
            </section>
        </main>
    );
}