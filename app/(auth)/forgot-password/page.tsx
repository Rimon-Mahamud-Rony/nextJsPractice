import AuthTemplate from "../AuthTemplate";

export default function ForgotPassword() {
    return (
      <AuthTemplate
        heading="Forgot Password"
        subject="Reset your account password"
        body="Enter your email address below and we'll send you a password reset link."
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

            {/* Info Box */}
            <div className="rounded-xl border border-cyan-100 bg-cyan-50 px-4 py-3">
              <p className="text-sm text-cyan-700">
                We’ll send a secure password reset link to your email address.
              </p>
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full rounded-xl bg-cyan-500 py-3 font-semibold text-white transition hover:bg-cyan-600 cursor-pointer"
            >
              Send Reset Link
            </button>
          </form>
        </div>
      </AuthTemplate>
    );

} 