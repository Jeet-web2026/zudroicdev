import { ThemeToggle } from "@/components/ui/themetoggle";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import Link from "next/link";

export default async function Home() {
  const session = await auth.api.getSession({
    headers: await headers()
  })
  return (
    <>
      <ThemeToggle />
      {session ?
        <p>{session.user.name}</p> : <Link href="/login">login</Link>
      }
    </>
  );
}
