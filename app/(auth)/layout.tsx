import { buttonVariants } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import Logo from "@/public/assets/images/z-logo.png"

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
                        <Image src={Logo} height={100} width={100} alt="Logo" />
                    </Link>
                    {children}
                    <div className="text-balance text-center text-sm text-muted-foreground">
                        By clicking continue, you agree to our <span className="hover:text-primary hover:underline">Terms of service</span> and <span className="hover:text-primary hover:underline">Privacy Policy</span>
                    </div>
                </div>
            </section>
        </main>
    );
}