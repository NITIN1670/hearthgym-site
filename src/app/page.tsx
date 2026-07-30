import Image from "next/image";

const WHATSAPP_NUMBER = "918376991734";
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Hi! I'd like to book a free demo of HearthGym for my gym."
);
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

type Showcase = {
  eyebrow: string;
  title: string;
  desc: string;
  points: string[];
  /** Omitted for the one row drawn in markup instead of captured from the app. */
  shot?: {
    src: string;
    alt: string;
    width: number;
    height: number;
    frame: "browser" | "phone";
  };
  note?: string;
};

const SHOWCASE: Showcase[] = [
  {
    eyebrow: "Member management",
    title: "Every member, and exactly where they stand.",
    desc: "One list shows who is active, who is paused, who is in grace and how many days each has left — so a lapsing membership is something you notice, not something you discover.",
    points: [
      "Search by name or phone",
      "Status and days-left at a glance",
      "Full subscription history per member",
    ],
    shot: {
      src: "/screenshots/members.webp",
      alt: "HearthGym member list showing each member's phone number, subscription status and days remaining.",
      width: 1280,
      height: 900,
      frame: "browser",
    },
  },
  {
    eyebrow: "The member app",
    title: "Your gym, in your members' pockets.",
    desc: "Every member gets an installable app — no Play Store, no App Store. They see their plan, their expiry date, their streak and their payments, and they get nudged before the membership lapses.",
    points: [
      "Installs from a link in seconds",
      "Renewal nudge before expiry",
      "Visits, streak and payment history",
    ],
    shot: {
      src: "/screenshots/member-home.webp",
      alt: "The member app on a phone, showing a renewal reminder, membership plan with expiry date, visit streak and payment history.",
      width: 400,
      height: 860,
      frame: "phone",
    },
  },
  {
    eyebrow: "Dashboard & reports",
    title: "Open it in the morning, know where the month stands.",
    desc: "Active members, check-ins, renewals due this week and revenue for the month — on one screen, updating as your front desk works.",
    points: [
      "Check-ins and revenue over the last 7 days",
      "Expiring-soon and new-this-month lists",
      "Monthly reports, exportable to PDF",
    ],
    shot: {
      src: "/screenshots/dashboard.webp",
      alt: "HearthGym owner dashboard with active member count, revenue for the month, and check-in and revenue charts for the last 7 days.",
      width: 1280,
      height: 900,
      frame: "browser",
    },
  },
  {
    eyebrow: "Payments",
    title: "Every payment recorded, every history kept.",
    desc: "Record a payment against a member and a plan in a few taps — cash or UPI — and the subscription moves with it. Nothing has to live in a notebook.",
    points: [
      "Cash and UPI",
      "Payment tied to the member and the plan",
      "Full history, always searchable",
    ],
    shot: {
      src: "/screenshots/payments.webp",
      alt: "Payment recording form alongside a table of past payments showing amount, mode and date.",
      width: 1280,
      height: 900,
      frame: "browser",
    },
  },
  {
    eyebrow: "AI diet chart",
    title: "A 7-day Indian meal plan, built around each member.",
    desc: "Generated from the member's goal, diet preference and measurements — vegetarian, Jain, eggetarian or non-veg, in food people actually cook at home.",
    points: [
      "Personalised to goal and diet preference",
      "Regenerate whenever their details change",
      "Available on the Pro plan",
    ],
    note: "Illustration of the diet plan screen.",
  },
];

const MORE_FEATURES = [
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

/** Chrome around desktop captures, so a screenshot reads as a screen and not as a stray image. */
function BrowserFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-hearth-100 bg-white shadow-xl">
      <div className="flex items-center gap-1.5 border-b border-hearth-100 bg-hearth-50 px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-hearth-200" />
        <span className="h-2.5 w-2.5 rounded-full bg-hearth-200" />
        <span className="h-2.5 w-2.5 rounded-full bg-hearth-200" />
      </div>
      {children}
    </div>
  );
}

function PhoneFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto w-full max-w-[280px] rounded-[2.25rem] border-8 border-hearth-950 bg-hearth-950 shadow-xl">
      <div className="overflow-hidden rounded-[1.6rem] bg-white">{children}</div>
    </div>
  );
}

/** The diet plan is drawn rather than captured — see the note rendered beneath it. */
function DietPlanCard() {
  return (
    <div className="bg-white p-4">
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
  );
}

function ShowcaseRow({ row, flip }: { row: Showcase; flip: boolean }) {
  return (
    <div className="grid items-center gap-10 md:grid-cols-2 md:gap-14">
      <div className={flip ? "md:order-2" : undefined}>
        {row.shot ? (
          row.shot.frame === "phone" ? (
            <PhoneFrame>
              <Image
                src={row.shot.src}
                alt={row.shot.alt}
                width={row.shot.width}
                height={row.shot.height}
                className="block h-auto w-full"
              />
            </PhoneFrame>
          ) : (
            <BrowserFrame>
              <Image
                src={row.shot.src}
                alt={row.shot.alt}
                width={row.shot.width}
                height={row.shot.height}
                className="block h-auto w-full"
              />
            </BrowserFrame>
          )
        ) : (
          <PhoneFrame>
            <DietPlanCard />
          </PhoneFrame>
        )}
        {row.note && (
          <p className="mt-3 text-center text-xs text-muted">{row.note}</p>
        )}
      </div>

      <div className={flip ? "md:order-1" : undefined}>
        <p className="text-sm font-semibold uppercase tracking-wide text-hearth-600">
          {row.eyebrow}
        </p>
        <h3 className="mt-2 text-2xl font-bold tracking-tight text-hearth-950 md:text-3xl">
          {row.title}
        </h3>
        <p className="mt-4 text-muted">{row.desc}</p>
        <ul className="mt-6 space-y-2.5">
          {row.points.map((p) => (
            <li key={p} className="flex items-start gap-3 text-sm text-hearth-900">
              <span className="mt-0.5 text-hearth-500">&#10003;</span>
              <span>{p}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <header className="sticky top-0 z-20 border-b border-hearth-100 bg-hearth-50/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a
            href="/"
            aria-label="HearthGym — back to home"
            className="rounded text-lg font-bold tracking-tight text-hearth-950 transition hover:text-hearth-600"
          >
            HearthGym
          </a>
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

        {/* Features */}
        <section
          id="features"
          className="border-y border-hearth-100 bg-white py-20 md:py-24"
        >
          <div className="mx-auto max-w-6xl px-6">
            <p className="text-center text-sm font-semibold uppercase tracking-wide text-hearth-600">
              From the actual product
            </p>
            <h2 className="mx-auto mt-2 max-w-2xl text-center text-3xl font-bold tracking-tight text-hearth-950 md:text-4xl">
              Everything a gym owner actually needs
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-center text-muted">
              Real screens, not mockups &mdash; no feature list padding, this is
              what&apos;s built and working today.
            </p>

            <div className="mt-16 space-y-20 md:mt-20 md:space-y-28">
              {SHOWCASE.map((row, i) => (
                <ShowcaseRow key={row.title} row={row} flip={i % 2 === 1} />
              ))}
            </div>

            <div className="mt-20 grid grid-cols-1 gap-6 border-t border-hearth-100 pt-16 sm:grid-cols-2 lg:grid-cols-4">
              {MORE_FEATURES.map((f) => (
                <div
                  key={f.title}
                  className="rounded-2xl border border-hearth-100 bg-hearth-50 p-6"
                >
                  <h3 className="font-semibold text-hearth-950">{f.title}</h3>
                  <p className="mt-2 text-sm text-muted">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How it works */}
        <section id="how-it-works" className="py-20">
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
                <WhatsAppButton className="mt-8 w-full">
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
            <WhatsAppButton className="mt-8">
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
