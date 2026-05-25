import AuthTemplate from "@/app/(auth)/AuthTemplate";

export default function RegisterPage() {
  return (
    <AuthTemplate
      heading="Create Account"
      subject="Register to get started with your account"
      body="Please fill in the information below to create your account."
    >
      <div className="w-full rounded-2xl bg-white px-8 py-2 text-black">
        <form className="space-y-5">
          {/* Header */}

          {/* Name */}
          <div className="space-y-2">
            <label
              htmlFor="name"
              className="text-sm font-semibold text-gray-700"
            >
              Full Name
            </label>

            <input
              type="text"
              id="name"
              placeholder="John Doe"
              className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200"
            />
          </div>

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
              placeholder="Create a password"
              className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200"
            />
          </div>

          {/* Password */}
          <div className="space-y-2">
            <label
              htmlFor="password"
              className="text-sm font-semibold text-gray-700"
            >
              Confirm Password
            </label>

            <input
              type="password"
              id="confirmPassword"
              placeholder="Confirm your password"
              className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200"
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full rounded-xl bg-cyan-500 py-3 font-semibold text-white transition hover:bg-cyan-600"
          >
            Create Account
          </button>
        </form>
      </div>
    </AuthTemplate>
  );
}
