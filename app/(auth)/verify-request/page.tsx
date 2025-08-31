"use client"
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card";
import * as React from "react"

import {
    InputOTP,
    InputOTPGroup,
    InputOTPSlot,
} from "@/components/ui/input-otp"

export default function ExportEmailRequest() {
    const [value, setValue] = React.useState("")
    return (
        <Card>
            <CardContent className="text-center">
                <CardTitle className="text-xl mb-2">
                    Please check your email
                </CardTitle>
                <CardDescription>
                    We have sent verification email code to your email address. Please open the email and paste the code below.
                </CardDescription>
                <CardContent className="flex justify-center mt-5">
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
                                <>Enter your one-time password.</>
                            ) : (
                                <>You entered: {value}</>
                            )}
                        </div>
                    </div>
                </CardContent>
            </CardContent>
        </Card>
    )
}
