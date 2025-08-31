"use client"
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card";
import * as React from "react"

import {
    InputOTP,
    InputOTPGroup,
    InputOTPSlot,
} from "@/components/ui/input-otp"
import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";
import { useRouter, useSearchParams } from "next/navigation";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";

export default function ExportEmailRequest() {
    const router = useRouter()
    const [value, setValue] = React.useState("")
    const [emailPending, startTransition] = React.useTransition()
    const params = useSearchParams()
    const email = params.get('email')
    const isotpNotcompleted = value.length === 6;

    function verifyotp() {
        startTransition(async () => {
            await authClient.signIn.emailOtp({
                email: email as string,
                otp: value,
                fetchOptions: {
                    onSuccess: () => {
                        toast.success('Email verified')
                        router.push('/')
                    },
                    onError: () => {
                        toast.error('Error verifing Email/OTP')
                    }
                }
            })
        })
    }
    return (
        <Card>
            <CardContent className="text-center">
                <CardTitle className="text-xl mb-2">
                    Please check your email
                </CardTitle>
                <CardDescription>
                    We have sent verification email code to your email address. Please open the email and paste the code below.
                </CardDescription>
                <CardContent className="flex justify-center mt-5 flex-col items-center gap-4">
                    <div className="space-y-2">
                        <InputOTP
                            maxLength={6}
                            value={value}
                            onChange={(value) => setValue(value)}
                        >
                            <InputOTPGroup>
                                <InputOTPSlot index={0} />
                                <InputOTPSlot index={1} />
                                <InputOTPSlot index={2} />
                                <InputOTPSlot index={3} />
                                <InputOTPSlot index={4} />
                                <InputOTPSlot index={5} />
                            </InputOTPGroup>
                        </InputOTP>
                        <div className="text-center text-sm">
                            {value === "" ? (
                                <>Enter your 6-digit password</>
                            ) : (
                                <>You entered: {value}</>
                            )}
                        </div>
                    </div>
                    <Button onClick={verifyotp} disabled={emailPending || !isotpNotcompleted} className="w-full">
                        {emailPending ? (
                            <>
                                <Loader2 className="size-4 animate-spin" />
                                <span>Loading...</span>
                            </>
                        ) : (
                            <>
                                <span>Verify account</span>
                            </>
                        )}
                    </Button>
                </CardContent>
            </CardContent>
        </Card>
    )
}
