"use client";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { GithubIcon, Loader, Loader2, Send } from "lucide-react";
import { authClient } from "@/lib/auth-client";
import { useState, useTransition } from "react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export default function LoginForm() {
    const router = useRouter();
    const [githubPending, githubTransition] = useTransition();
    const [emailPending, emailTransition] = useTransition();
    const [email, setEmail] = useState("");
    async function signInwithEmail() {
        emailTransition(async () => {
            await authClient.emailOtp.sendVerificationOtp({
                email: email,
                type: "sign-in",
                fetchOptions: {
                    onSuccess: () => {
                        toast.success("Email sent");
                        router.push(`/verify-request?email=${email}`);
                    },
                    onError: () => {
                        toast.success("Error sending error");
                    },
                },
            });
        });
    }
    async function signInwithGithub() {
        githubTransition(async () => {
            await authClient.signIn.social({
                provider: "github",
                callbackURL: "/",
                fetchOptions: {
                    onSuccess: () => {
                        toast.success("Signed in with Github, you will be redirected....");
                    },
                    onError: (error) => {
                        toast.error("Internal server error!");
                    },
                },
            });
        });
    }
    return (
        <Card>
            <CardHeader>
                <CardTitle className="text-xl">Welcome back!</CardTitle>
                <CardDescription>
                    Login with you Github or Email Account
                </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-3">
                <Button
                    disabled={githubPending}
                    variant="outline"
                    className="w-full cursor-pointer"
                    onClick={signInwithGithub}
                >
                    {githubPending ? (
                        <>
                            <Loader className="size-4 animate-spin" />
                            <span>Loading...</span>
                        </>
                    ) : (
                        <>
                            <GithubIcon className="size-4" />
                            Sign in with Github
                        </>
                    )}
                </Button>
                <div className="relative text-center text-sm  after:absolute after:inset-0 after:top-1/2 after:flex after:items-center after:border-t after:border-border">
                    <span className="relative z-10 bg-card px-2 text-muted-foreground">
                        Or continue with
                    </span>
                </div>
                <div className="grid gap-4">
                    <div className="grid gap-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            type="email"
                            placeholder="e.g. example@gmail.com"
                        />
                    </div>
                    <Button onClick={signInwithEmail} disabled={emailPending}>
                        {emailPending ? (
                            <>
                                <Loader2 className="size-4 animate-spin" />
                                <span>Loading...</span>
                            </>
                        ) : (
                            <>
                                <Send className="size-4" />
                                <span>Continue with Email</span>
                            </>
                        )}
                    </Button>
                </div>
            </CardContent>
        </Card>
    );
}
