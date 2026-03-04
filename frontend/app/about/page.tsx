export default function AboutPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      {/* Hero Section */}
      <section className="mb-24 text-center">
        <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl text-[#6366F1]">
          Why Vivida exists
        </h1>
        <p className="mx-auto max-w-3xl text-lg text-gray-600">
          Most of us don't struggle with self-improvement because we don't know
          what to do. We struggle because our existing mental wiring often works
          against the actions required to change.
        </p>
      </section>

      {/* Section 1: The Problem */}
      <section className="mb-24 grid gap-12 md:grid-cols-2 md:items-center">
        <div>
          <h2 className="mb-4 text-2xl font-semibold text-[#6366F1]">
            Knowing isn't the same as changing
          </h2>
          <p className="mb-4 text-gray-600">
            Vivida started from a very personal place.
          </p>
          <p className="mb-4 text-gray-600">
            For months, I was binging self-improvement content every day —
            podcasts, youtube videos, tiktoks. On paper, I knew what I{" "}
            <span className="italic text-[#6366F1]">should</span> be doing. The
            information was never the issue.
          </p>
          <p className="text-gray-600">
            But my behaviour wasn't changing. I still struggled with
            procrastination, inconsistency, and starting strong only to fall
            back into old patterns.
          </p>
        </div>

        {/* Placeholder Image */}
        <div className="flex h-64 items-center justify-center rounded-xl border border-dashed border-gray-300 text-sm text-gray-400">
          Placeholder diagram / illustration
        </div>
      </section>

      {/* Section 2: The Insight */}
      <section className="mb-24 grid gap-12 md:grid-cols-2 md:items-center">
        {/* Placeholder Image */}
        <div className="order-2 flex h-64 items-center justify-center rounded-xl border border-dashed border-gray-300 text-sm text-gray-400 md:order-1">
          Placeholder: belief → action loop
        </div>

        <div className="order-1 md:order-2">
          <h2 className="mb-4 text-2xl font-semibold text-[#6366F1]">
            When effort isn't the issue, belief usually is
          </h2>
          <p className="mb-4 text-gray-600">
            At some point, it became clear that the issue wasn't my physical
            ability to act — it was something mental.
          </p>
          <p className="mb-4 text-gray-600">
            We don't experience the world as it is. We experience it as we are.
          </p>
          <p className="text-gray-600">
            Two people can face the same task and interpret it completely
            differently, based on how their minds are wired. Those
            interpretations quietly influence behaviour, which then reinforces
            belief.
          </p>
        </div>
      </section>

      {/* Section 3: Subconscious Reprogramming */}
      <section className="mb-24">
        <h2 className="mb-6 text-2xl font-semibold text-[#6366F1]">
          Reprogramming the subconscious — intentionally
        </h2>

        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div>
            <p className="mb-4 text-gray-600">
              Through research and experimentation, I became deeply interested
              in subconscious-mind reprogramming techniques — particularly
              emotionally charged affirmations and visualisation.
            </p>
            <p className="mb-4 text-gray-600">
              Emotion matters because it strengthens memory, gives meaning, and
              turns repetition into belief.
            </p>
            <p className="text-gray-600">
              When thoughts are reinforced consistently, with emotional
              engagement and aligned with small real-world actions, they can
              begin to feel true — not forced.
            </p>
          </div>

          {/* Placeholder Image */}
          <div className="flex h-64 items-center justify-center rounded-xl border border-dashed border-gray-300 text-sm text-gray-400">
            Placeholder: emotion + repetition diagram
          </div>
        </div>
      </section>

      {/* Section 4: Self-Efficacy */}
      <section className="mb-24 grid gap-12 md:grid-cols-2 md:items-center">
        <div>
          <h2 className="mb-4 text-2xl font-semibold text-[#6366F1]">
            The role of self-efficacy
          </h2>
          <p className="mb-4 text-gray-600">
            Self-efficacy is your belief in your ability to influence outcomes
            through your own actions.
          </p>
          <p className="mb-4 text-gray-600">
            If you believe you can change, you're more likely to act. If you act
            and see evidence, that belief strengthens.
          </p>
          <p className="text-gray-600">
            Once that loop starts, progress compounds. Soon enough you'll be surprised of just what you could accomplish.
          </p>
        </div>

        {/* Placeholder Image */}
        <div className="flex h-64 items-center justify-center rounded-xl border border-dashed border-gray-300 text-sm text-gray-400">
          Placeholder: self-efficacy feedback loop
        </div>
      </section>

      {/* Section 5: What Vivida Does */}
      <section className="mb-24">
        <h2 className="mb-6 text-2xl font-semibold text-[#6366F1]">
          What Vivida is exploring
        </h2>
        <p className="mb-4 max-w-3xl text-gray-600">
          Vivida is a research-driven digital intervention built as part of a
          university dissertation exploring how subconscious-mind reprogramming
          techniques may improve self-efficacy.
        </p>
        <p className="mb-4 max-w-3xl text-gray-600">
          Using AI, Vivida personalises mental exercises based on user input,
          focuses on specific traits rather than vague motivation, and
          prioritises consistency over intensity.
        </p>
        <p className="max-w-3xl text-gray-600">
          This isn't about quick fixes. It's about gradual internal change that
          makes external change feel possible.
        </p>
      </section>

      {/* Closing */}
      <section className="text-center">
        <p className="mx-auto max-w-2xl text-lg text-gray-600">
          Vivida is still evolving. Test users, feedback, and reflection will
          help answer a simple but important question:
        </p>
        <p className="mt-4 text-xl font-medium">
          Can changing how we think about ourselves change what we believe we're
          capable of?
        </p>
      </section>
    </main>
  );
}
