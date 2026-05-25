
import AuthTemplate from "../AuthTemplate";


export default function Login() {
    return (
      <AuthTemplate
        heading="Welcome Back"
        subject="Login to your account"
        body="Enter your credentials below to access your account."
      >
        <div className="w-full rounded-2xl bg-white px-8 py-2 text-black">
          <form className="space-y-5">
            {/* Email */}
            <div className="space-y-2">
              <label
                htmlFor="email"
                className="text-sm font-semibold text-gray-700"
              >
                Email Address
              </label>

              <input
                type="email"
                id="email"
                placeholder="you@example.com"
                className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200"
              />
            </div>

            {/* Password */}
            <div className="space-y-2">
              <label
                htmlFor="password"
                className="text-sm font-semibold text-gray-700"
              >
                Password
              </label>

              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200"
              />
            </div>

            {/* Forgot + Register Links */}
            <div className="flex items-center justify-between text-sm">
              <a
                href="/forgot-password"
                className="text-cyan-600 hover:underline"
              >
                Forgot password?
              </a>

              <a href="/register" className="text-cyan-600 hover:underline">
                Create account
              </a>
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full rounded-xl bg-cyan-500 py-3 font-semibold text-white transition hover:bg-cyan-600"
            >
              Login
            </button>
          </form>
        </div>
      </AuthTemplate>
    );

} 