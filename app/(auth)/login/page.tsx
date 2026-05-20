import TestPageDesign from "@/app/components/TestPageDesign";

export default function Login() {
    return (
        <TestPageDesign
            heading="Login Page"
            subject="Please enter your credentials to log in"
            body="This is a practice login page for the Next.js project. You can customize this page with your own design and functionality."
        >
            <div className="mt-5">
                <form className="space-y-4">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                        <input type="email" id="email" className="text-black  mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-cyan-500 focus:ring-cyan-500 text-2xl p-5" placeholder='you@example.com' />
                    </div>
                </form>
            </div>
        </TestPageDesign>
    )

} 