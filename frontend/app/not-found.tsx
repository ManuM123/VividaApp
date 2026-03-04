import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen w-full bg-linear-to-br from-[#6366F1]/10 via-white to-[#6366F1]/5 flex items-center justify-center px-6">
      <div className="max-w-3xl text-center">
        <div className="text-[120px] font-bold text-[#6366F1]/20 leading-none mb-6">
          404
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Your brain took a wrong turn
        </h1>

        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-10">
          This page doesn't exist — but that's okay. Sometimes your mind wanders
          into places that aren't real. Let's gently bring it back.
        </p>

        <div className="flex items-center justify-center gap-4">
          <Link
            href="/"
            className="
              px-8 py-4 rounded-full
              bg-[#6366F1] text-white
              font-semibold
              shadow-lg
              hover:bg-[#585AE3]
              transition
            "
          >
            Go Home
          </Link>

        </div>
      </div>
    </main>
  );
}
