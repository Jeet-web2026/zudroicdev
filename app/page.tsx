import { ThemeToggle } from "@/components/ui/themetoggle";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <ThemeToggle />
      <Link href="/login">login</Link>
    </>
  );
}
