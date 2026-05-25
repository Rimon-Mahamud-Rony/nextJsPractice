import Link from "next/link";
import CommonPageDesign from "../components/CommonPageDesign";
export default function AuthLayout({
    children,
}: Readonly<{
  children: React.ReactNode;

}>) {
  return (
    <CommonPageDesign>
        <div className="w-full flex justify-center gap-4 py-6 mt-10">
        <Link href="/login" className="px-5 py-2  transition">
          Login
        </Link>

        <Link href="/register" className="px-5 py-2  transition">
          Register
        </Link>

        <Link href="/forgot-password" className="px-5 py-2  transition">
          Forgot Password
        </Link>
        </div>
        {children}
    </CommonPageDesign>
  );
}
