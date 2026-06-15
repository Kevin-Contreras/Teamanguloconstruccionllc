export default function Home() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center bg-zinc-950 px-6">
      <main className="flex max-w-lg flex-col items-center text-center">
        <div className="mb-8 flex h-20 w-20 items-center justify-center rounded-full border-2 border-amber-500/30 bg-amber-500/10">
          <svg
            className="h-10 w-10 text-amber-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-2.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-2.745 1.437 1.437-2.745"
            />
          </svg>
        </div>

        <p className="mb-3 text-sm font-medium uppercase tracking-widest text-amber-500">
          Team Angulo Construction LLC
        </p>

        <h1 className="mb-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
          Under Construction
        </h1>

        <p className="mb-10 text-lg leading-relaxed text-zinc-400">
          We&apos;re building something great. Our new website is on the way —
          check back soon.
        </p>

        <div className="flex items-center gap-2 text-sm text-zinc-500">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-amber-500" />
          </span>
          Coming soon
        </div>
      </main>
    </div>
  );
}
