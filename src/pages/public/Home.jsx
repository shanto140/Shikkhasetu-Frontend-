import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <nav className="bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Shikkha Setu</h1>

          <div className="flex gap-4">
            <Link
              to="/login"
              className="px-4 py-2 rounded-lg border border-white hover:bg-white hover:text-slate-900 transition inline-block"
            >
              Login
            </Link>

            <Link
              to="/register"
              className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 transition text-white inline-block"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </nav>

      <section className="bg-slate-100 py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold text-slate-800 mb-6">
            Welcome to Shikkha Setu
          </h1>

          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Connecting students with volunteers to create better learning
            opportunities and make education more accessible for everyone.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6 text-slate-800">
            About Our Platform
          </h2>

          <p className="text-slate-600 leading-8 mb-4">
            Shikkha Setu is a volunteer-based educational platform where
            students can seek academic assistance and volunteers can share their
            knowledge.
          </p>

          <p className="text-slate-600 leading-8">
            Our mission is to build a supportive learning community that helps
            students grow and achieve their educational goals.
          </p>
        </div>
      </section>

      <footer className="mt-auto bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>

          <div className="grid md:grid-cols-2 gap-6 text-slate-300">
            <div>
              <p>Email: support@shikkhasetu.com</p>
              <p>Phone: +8801XXXXXXXXX</p>
            </div>

            <div>
              <p>Facebook: facebook.com/shikkhasetu</p>
              <p>LinkedIn: linkedin.com/company/shikkhasetu</p>
              <p>GitHub: github.com/shikkhasetu</p>
              <p>Website: www.shikkhasetu.com</p>
            </div>
          </div>

          <div className="border-t border-slate-700 mt-8 pt-6 text-center text-slate-400">
            © 2026 Shikkha Setu. All Rights Reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
