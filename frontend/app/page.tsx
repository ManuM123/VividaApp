import Navbar from "@/components/Navbar";
import FeaturesSection from "@/components/FeaturesSection";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <header>
        <Navbar />
      </header>

      <main className="w-full">
        <section className="bg-white text-gray-900">
          <div className="max-w-6xl mx-auto px-6 py-32 flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="flex-1 flex flex-col gap-6">
              <h1 className="text-5xl font-bold leading-tight tracking-tight">
                Train Your Brain And Have Fun Along The Way
              </h1>
              <p className="text-lg text-gray-600 opacity-90 max-w-lg">
                Helping you get your brain on your side
              </p>

              <Link href="/signup">
                <Button className="px-8 py-4 rounded-full bg-[#6366F1] text-white font-semibold shadow-lg hover:bg-[#5558E3] transition w-max hover:cursor-pointer">
                  Get Started Now
                </Button>
              </Link>
            </div>

            <div className="flex-1 flex justify-center">
              <Image
                src="/temporary_brain_hero_img.avif" // change this later
                alt="Brain Image"
                width={400}
                height={400}
              />
            </div>
          </div>
        </section>

        <FeaturesSection />

        <section className="bg-white py-28">
          <div className="max-w-6xl mx-auto px-6">
            {/* Header */}
            <div className="text-center mb-20">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                How Vivida Fits Into Your Life
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Small moments, repeated consistently — designed to work with
                your mind, not against it.
              </p>
            </div>

            {/* Steps */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
              {/* Step 1 */}
              <div className="flex flex-col items-center text-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-[#6366F1]/10 flex items-center justify-center text-[#6366F1] text-xl font-semibold">
                  1
                </div>
                <h3 className="text-xl font-semibold text-gray-900">
                  Check In
                </h3>
                <p className="text-gray-600">
                  Short, guided prompts help you notice patterns in your
                  thoughts, emotions, and reactions.
                </p>
              </div>

              {/* Step 2 */}
              <div className="flex flex-col items-center text-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-[#6366F1]/10 flex items-center justify-center text-[#6366F1] text-xl font-semibold">
                  2
                </div>
                <h3 className="text-xl font-semibold text-gray-900">
                  Practice
                </h3>
                <p className="text-gray-600">
                  Simple exercises designed to gently challenge old habits and
                  mental shortcuts.
                </p>
              </div>

              {/* Step 3 */}
              <div className="flex flex-col items-center text-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-[#6366F1]/10 flex items-center justify-center text-[#6366F1] text-xl font-semibold">
                  3
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Reflect</h3>
                <p className="text-gray-600">
                  Notice what shifts over time — without pressure to be perfect
                  or “fixed”.
                </p>
              </div>

              {/* Step 4 */}
              <div className="flex flex-col items-center text-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-[#6366F1]/10 flex items-center justify-center text-[#6366F1] text-xl font-semibold">
                  4
                </div>
                <h3 className="text-xl font-semibold text-gray-900">
                  Build Momentum
                </h3>
                <p className="text-gray-600">
                  Track progress, build streaks, and turn small wins into
                  lasting change.
                </p>
              </div>
            </div>
          </div>
        </section>

        <Footer/>


      </main>
    </>
  );
}
