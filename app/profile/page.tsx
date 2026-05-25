export default function Profile() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="w-full max-w-6xl bg-white rounded-3xl shadow-2xl overflow-hidden grid grid-cols-1 md:grid-cols-3">
        {/* Left Side */}
        <div className="bg-linear-to-br from-slate-600 via-cyan-400 to-slate-600 text-white p-10 flex flex-col items-center justify-center">
          {/* Profile Image */}
          <div className="w-36 h-36 rounded-full border-4 border-white overflow-hidden shadow-lg">
            <img
              src="https://avatars.githubusercontent.com/u/49331778?v=4"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>

          {/* User Info */}
          <h1 className="text-3xl font-bold mt-6">Rimon Rony</h1>
          <p className="text-cyan-100 mt-2 text-center">
            Software Engineer & Problem Solver
          </p>

          {/* Small Stats */}
          <div className="flex gap-6 mt-8 text-center">
            <div>
              <h2 className="text-2xl font-bold">15+</h2>
              <p className="text-sm text-cyan-100">Projects</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold">2+</h2>
              <p className="text-sm text-cyan-100">Years Exp</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold">20+</h2>
              <p className="text-sm text-cyan-100">Clients</p>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="md:col-span-2 p-10 flex flex-col justify-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-800">
              Welcome Back 👋
            </h2>

            <p className="text-gray-500 mt-3 leading-relaxed">
              This is a professional profile dashboard built with Next.js and
              Tailwind CSS. You can add user information, social links,
              achievements, recent activities, and more.
            </p>
          </div>

          {/* Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
            <div className="bg-gray-50 p-6 rounded-2xl shadow-sm border">
              <h3 className="text-lg font-semibold text-gray-800">Email</h3>
              <p className="text-gray-500 mt-2">rimon@example.com</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-2xl shadow-sm border">
              <h3 className="text-lg font-semibold text-gray-800">Location</h3>
              <p className="text-gray-500 mt-2">Dhaka, Bangladesh</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-2xl shadow-sm border">
              <h3 className="text-lg font-semibold text-gray-800">Skills</h3>
              <p className="text-gray-500 mt-2">
                Next.js, React, TypeScript, C++
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-2xl shadow-sm border">
              <h3 className="text-lg font-semibold text-gray-800">
                Availability
              </h3>
              <p className="text-green-600 font-medium mt-2">
                Available for Work
              </p>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-4 mt-10">
            <button className="px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-white rounded-xl font-semibold transition">
              Edit Profile
            </button>

            <button className="px-6 py-3 border border-gray-300 hover:bg-gray-100 rounded-xl font-semibold transition">
              View Portfolio
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
