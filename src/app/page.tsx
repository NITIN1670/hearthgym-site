// TODO: replace with the real business WhatsApp number (country code + number, no plus/spaces) before launch.
const WHATSAPP_NUMBER = "911234567890";
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Hi! I'd like to book a free demo of HearthGym for my gym."
);
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

const FEATURES = [
  {
    title: "Member management",
    desc: "Photos, search, and full subscription history at a glance.",
  },
  {
    title: "Subscriptions & renewals",
    desc: "Pause, resume, or negotiate an end date — every change kept on an audit trail.",
  },
  {
    title: "WhatsApp & SMS reminders",
    desc: "Every expiring member gets an automatic nudge, so renewals stop depending on memory.",
  },
  {
    title: "Lead & enquiry CRM",
    desc: "Track walk-ins and follow-ups so an enquiry never quietly goes cold.",
  },
  {
    title: "Gamification",
    desc: "Members earn bonus days for showing up — consistency becomes something they chase.",
  },
  {
    title: "Progress tracking",
    desc: "Weight and measurements charted over time, visible to the member themselves.",
  },
  {
    title: "Installable member app",
    desc: "A branded app experience with no Play Store, no App Store — live in five minutes.",
  },
  {
    title: "AI diet chart",
    desc: "A 7-day Indian meal plan generated automatically from each member's goal and profile.",
  },
];

const STEPS = [
  {
    n: "1",
    title: "Enroll your members",
    desc: "Name, phone, photo, plan — done in under a minute per member.",
  },
  {
    n: "2",
    title: "They get the app instantly",
    desc: "A PWA link, no install friction. They set their goal and diet preference themselves.",
  },
  {
    n: "3",
    title: "Renewals run on autopilot",
    desc: "WhatsApp reminders and the lead CRM keep revenue from slipping through the cracks.",
  },
];

const PLANS = [
  {
    name: "Starter",
    price: "₹499",
    period: "/month",
    annualNote: "or ₹4,999/year",
    desc: "For budget gyms, up to 150 members",
    features: ["Member, subscription & payment records", "Attendance tracking", "Reports"],
    highlighted: false,
  },
  {
    name: "Growth",
    price: "₹999",
    period: "/month",
    annualNote: "or ₹9,999/year",
    desc: "For up to 400 members",
    features: [
      "Everything in Starter",
      "Installable member app (PWA)",
      "WhatsApp & SMS reminders",
      "Gamification & custom branding",
    ],
    highlighted: true,
  },
  {
    name: "Pro",
    price: "₹1,999",
    period: "/month",
    annualNote: "or ₹19,999/year",
    desc: "Unlimited members, multi-branch",
    features: ["Everything in Growth", "AI diet chart", "Priority support"],
    highlighted: false,
  },
];

const DIET_DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

function WhatsAppButton({
  className = "",
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center rounded-full bg-hearth-500 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-hearth-600 ${className}`}
    >
      {children}
    </a>
  );
}

export default function Home() {
  return (
    <>
      <header className="sticky top-0 z-20 border-b border-hearth-100 bg-hearth-50/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <span className="text-lg font-bold tracking-tight text-hearth-950">
            HearthGym
          </span>
          <nav className="hidden items-center gap-8 text-sm font-medium text-hearth-800 md:flex">
            <a href="#features" className="hover:text-hearth-600">Features</a>
            <a href="#how-it-works" className="hover:text-hearth-600">How it works</a>
            <a href="#pricing" className="hover:text-hearth-600">Pricing</a>
          </nav>
          <WhatsAppButton className="px-4 py-2 text-xs md:px-6 md:py-3 md:text-sm">
            Book a Free Demo
          </WhatsAppButton>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="mx-auto max-w-6xl px-6 pt-16 pb-20 text-center md:pt-24 md:pb-28">
          <span className="inline-block rounded-full bg-hearth-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-hearth-700">
            Built for Indian gyms
          </span>
          <h1 className="mx-auto mt-6 max-w-3xl text-4xl font-bold tracking-tight text-hearth-950 md:text-6xl">
            Software that keeps your gym&apos;s fire burning.
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg text-muted">
            Member management, WhatsApp renewal reminders, a lead CRM, and
            AI-generated Indian diet charts &mdash; all in one platform, so no
            member and no enquiry quietly slips away.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <WhatsAppButton className="px-8 py-4 text-base">
              Book a Free Demo
            </WhatsAppButton>
            <a
              href="#pricing"
              className="text-sm font-semibold text-hearth-800 underline underline-offset-4 hover:text-hearth-600"
            >
              See pricing &rarr;
            </a>
          </div>
        </section>

        {/* Product preview */}
        <section className="border-y border-hearth-100 bg-white py-20">
          <div className="mx-auto max-w-4xl px-6">
            <p className="text-center text-sm font-semibold uppercase tracking-wide text-hearth-600">
              From the actual product
            </p>
            <h2 className="mt-2 text-center text-2xl font-bold text-hearth-950 md:text-3xl">
              What a member sees on their own phone
            </h2>

            <div className="mx-auto mt-10 max-w-sm rounded-[2rem] border-8 border-hearth-950 bg-hearth-50 p-3 shadow-xl">
              <div className="rounded-2xl bg-white p-4">
                <p className="text-[10px] font-semibold uppercase tracking-wide text-muted">
                  Diet plan
                </p>
                <p className="mt-0.5 text-[11px] text-muted">
                  AI-generated from your goal, diet preference and measurements.
                </p>

                <p className="mt-3 text-sm text-hearth-950">
                  A balanced 7-day plan built around your goal.
                </p>
                <p className="mt-1 text-xs font-medium text-hearth-700">
                  Target: ~2000 kcal/day
                </p>

                <div className="mt-3 flex flex-wrap gap-1.5">
                  {DIET_DAYS.map((day) => (
                    <span
                      key={day}
                      className="rounded-lg border border-hearth-100 bg-hearth-50 px-2 py-1 text-[10px] font-semibold text-hearth-800"
                    >
                      {day}
                    </span>
                  ))}
                </div>

                <ul className="mt-3 list-disc space-y-0.5 pl-4 text-[11px] text-muted">
                  <li>Drink 2&ndash;3L water daily.</li>
                  <li>Prefer home-cooked meals.</li>
                </ul>

                <p className="mt-3 text-[10px] text-muted">
                  General nutrition guidance, not medical advice.
                </p>

                <button
                  type="button"
                  className="mt-3 w-full rounded-lg border border-hearth-200 py-1.5 text-xs font-semibold text-hearth-800"
                >
                  Regenerate
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section id="features" className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="text-center text-3xl font-bold text-hearth-950">
            Everything a gym owner actually needs
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-center text-muted">
            No feature list padding &mdash; this is what&apos;s built and working
            today.
          </p>
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {FEATURES.map((f) => (
              <div
                key={f.title}
                className="rounded-2xl border border-hearth-100 bg-white p-6"
              >
                <h3 className="font-semibold text-hearth-950">{f.title}</h3>
                <p className="mt-2 text-sm text-muted">{f.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* How it works */}
        <section
          id="how-it-works"
          className="border-y border-hearth-100 bg-white py-20"
        >
          <div className="mx-auto max-w-5xl px-6">
            <h2 className="text-center text-3xl font-bold text-hearth-950">
              Get started in three steps
            </h2>
            <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
              {STEPS.map((step) => (
                <div key={step.n} className="text-center">
                  <span className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-hearth-500 text-sm font-bold text-white">
                    {step.n}
                  </span>
                  <h3 className="mt-4 font-semibold text-hearth-950">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="text-center text-3xl font-bold text-hearth-950">
            Simple, per-gym pricing
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-center text-muted">
            One flat monthly price per gym location. No per-member fees, no
            surprises.
          </p>
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            {PLANS.map((plan) => (
              <div
                key={plan.name}
                className={`rounded-2xl border p-8 ${
                  plan.highlighted
                    ? "border-hearth-500 bg-hearth-950 text-white shadow-lg md:-translate-y-2"
                    : "border-hearth-100 bg-white"
                }`}
              >
                {plan.highlighted && (
                  <span className="rounded-full bg-hearth-500 px-3 py-1 text-xs font-semibold uppercase tracking-wide">
                    Most popular
                  </span>
                )}
                <h3
                  className={`mt-4 text-xl font-bold ${
                    plan.highlighted ? "text-white" : "text-hearth-950"
                  }`}
                >
                  {plan.name}
                </h3>
                <p
                  className={`mt-1 text-sm ${
                    plan.highlighted ? "text-hearth-100" : "text-muted"
                  }`}
                >
                  {plan.desc}
                </p>
                <p className="mt-6">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span
                    className={
                      plan.highlighted ? "text-hearth-100" : "text-muted"
                    }
                  >
                    {plan.period}
                  </span>
                </p>
                <p
                  className={`mt-1 text-xs ${
                    plan.highlighted ? "text-hearth-100" : "text-muted"
                  }`}
                >
                  {plan.annualNote}
                </p>
                <ul className="mt-6 space-y-2 text-sm">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <span
                        className={
                          plan.highlighted ? "text-hearth-200" : "text-hearth-500"
                        }
                      >
                        &#10003;
                      </span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <WhatsAppButton
                  className={`mt-8 w-full ${
                    plan.highlighted ? "bg-white text-hearth-950 hover:bg-hearth-100" : ""
                  }`}
                >
                  Book a Free Demo
                </WhatsAppButton>
              </div>
            ))}
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-hearth-950 py-16 text-center text-white">
          <div className="mx-auto max-w-2xl px-6">
            <h2 className="text-3xl font-bold">
              See it running on your own phone.
            </h2>
            <p className="mt-3 text-hearth-100">
              A 15-minute WhatsApp call, in Hindi or English &mdash; no pressure,
              no card required.
            </p>
            <WhatsAppButton className="mt-8 bg-white text-hearth-950 hover:bg-hearth-100">
              Book a Free Demo
            </WhatsAppButton>
          </div>
        </section>
      </main>

      <footer className="border-t border-hearth-100 bg-hearth-50 py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 text-sm text-muted md:flex-row">
          <span className="font-semibold text-hearth-950">HearthGym</span>
          <span>&copy; {new Date().getFullYear()} HearthGym. All rights reserved.</span>
        </div>
      </footer>
    </>
  );
}
