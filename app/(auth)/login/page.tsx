import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function LoginPage() {
    return (
        <Card>
            <CardHeader>
                <CardTitle className="text-xl">Welcome back!</CardTitle>
                <CardDescription>Login with you Github Email Account</CardDescription>
            </CardHeader>
            <CardContent>
                <Button>Sign in with Github</Button>
            </CardContent>
        </Card>
    );
}
