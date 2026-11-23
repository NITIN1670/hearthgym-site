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
    desc: "Members can open the gym’s web app from a link and install it on their phone. They can check their membership, view payments and track their visits.",
    points: [
      "Installable from a link",
      "Membership status and expiry date",
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
    eyebrow: "Payments",
    title: "Record cash and UPI payments at the desk.",
    desc: "Record payments against memberships and look up past transactions from the gym workspace.",
    points: [
      "Cash and UPI",
      "Payment tied to the member and the plan",
      "Payment history by member",
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
    title: "Indian meal plans based on a member’s goals.",
    desc: "Generate an Indian meal plan using the member’s health profile, goals and dietary preferences.",
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
    id: "gst-invoicing",
    title: "GST invoices and receipts",
    desc: "Issue numbered GST invoices or simple receipts, download PDFs and export the invoice register.",
  },
  {
    id: "lead-crm",
    title: "Lead and enquiry CRM",
    desc: "Log walk-ins, assign follow-ups, record conversations and convert leads into members.",
  },
  {
    id: "visit-rewards",
    title: "Visit rewards",
    desc: "Set an attendance target and award bonus membership days when members hit it.",
  },
  {
    id: "member-import",
    title: "CSV and Excel member import",
    desc: "Bring in your existing member list, preview rows and catch duplicates before importing.",
  },
];

const STEPS = [
  { n: "1", title: "Set up your gym", desc: "Create your owner account and add your first membership plan." },
  { n: "2", title: "Bring your members over", desc: "Import your member list or add members one at a time." },
  { n: "3", title: "Start running the front desk", desc: "Check members in, record payments and see which memberships are due to renew." },
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
      "Visit rewards and custom branding",
    ],
    highlighted: true,
  },
  {
    name: "Pro",
    price: "₹1,999",
    period: "/month",
    annualNote: "or ₹19,999/year",
    desc: "Unlimited members per gym",
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
      className={`inline-flex items-center justify-center rounded-full bg-[#ff8755] px-6 py-3 text-sm font-semibold text-hearth-950 shadow-sm transition hover:bg-[#ffad88] ${className}`}
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
                className="block h-auto w-[120%] max-w-none -translate-x-1/6"
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
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-8">
          <a
            href="/"
            aria-label="HearthGym — back to home"
            className="flex shrink-0 items-center gap-2 rounded text-lg font-extrabold tracking-tight text-hearth-950 transition hover:text-hearth-600"
          >
            <Image src="/hearthgym-mark.svg" alt="" width={40} height={40} unoptimized />
            HearthGym
          </a>
          <nav className="hidden items-center gap-8 text-sm font-medium text-hearth-800 md:flex">
            <a href="#features" className="hover:text-hearth-600">Features</a>
            <a href="#how-it-works" className="hover:text-hearth-600">How it works</a>
            <a href="#pricing" className="hover:text-hearth-600">Pricing</a>
          </nav>
          <WhatsAppButton className="min-h-11 px-3 py-2 text-sm sm:px-5">
            Book a free demo
          </WhatsAppButton>
        </div>
      </header>

      <main>

        <section className="overflow-hidden bg-hearth-950 text-hearth-50">
          <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-14 sm:px-8 md:py-20 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14 lg:py-24">
            <div>
              <p className="text-sm font-semibold text-[#ffab83]">Gym management software for India</p>
              <h1 className="mt-4 max-w-xl text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">Run your gym from one place.</h1>
              <p className="mt-5 max-w-lg text-lg leading-relaxed text-[#e3cec0]">
                Manage memberships, check-ins, leads and GST invoices from one workspace. See who is due to renew and what your gym collected this month.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <WhatsAppButton className="px-6 py-3 text-base">Book a free demo</WhatsAppButton>
                <a href="#pricing" className="inline-flex min-h-11 items-center px-2 text-sm font-semibold underline-offset-4 hover:underline">View pricing</a>
              </div>
            </div>
            <figure className="min-w-0">
              <BrowserFrame>
                <Image src="/screenshots/dashboard.webp" alt="HearthGym owner dashboard showing membership, check-ins and revenue" width={1280} height={900} preload className="block h-auto w-[120%] max-w-none -translate-x-1/6" />
              </BrowserFrame>
              <figcaption className="mt-3 text-sm text-[#e3cec0]">HearthGym owner dashboard · Monthly and custom reports available</figcaption>
            </figure>
          </div>
        </section>
        <section aria-label="Gym setup and billing" className="border-b border-hearth-200 bg-hearth-100">
          <div className="mx-auto grid max-w-6xl gap-4 px-5 py-5 sm:grid-cols-3 sm:gap-6 sm:px-8">
            <a href="#member-import" className="font-semibold underline-offset-4 hover:underline">Import your member list</a>
            <a href="#gst-invoicing" className="font-semibold underline-offset-4 hover:underline">Issue GST invoices</a>
            <a href="#lead-crm" className="font-semibold underline-offset-4 hover:underline">Track enquiries and follow-ups</a>
          </div>
        </section>

        {/* Features */}
        <section
          id="features"
          className="scroll-mt-24 border-y border-hearth-100 bg-white py-20 md:py-24"
        >
          <div className="mx-auto max-w-6xl px-6">
            <h2 className="mx-auto mt-2 max-w-2xl text-center text-3xl font-bold tracking-tight text-hearth-950 md:text-4xl">
              From first enquiry to membership renewal
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-center text-muted">
              See how staff manage members, record payments and track attendance in HearthGym.
            </p>

            <div className="mt-16 space-y-20 md:mt-20 md:space-y-28">
              {SHOWCASE.map((row, i) => (
                <ShowcaseRow key={row.title} row={row} flip={i % 2 === 1} />
              ))}
            </div>

            <div className="mt-20 grid grid-cols-1 gap-6 border-t border-hearth-100 pt-16 sm:grid-cols-2 lg:grid-cols-4">
              {MORE_FEATURES.map((f) => (
                <div
                  key={f.id}
                  id={f.id}
                  className="scroll-mt-28 rounded-2xl border border-hearth-200 bg-hearth-50 p-6"
                >
                  <h3 className="font-semibold text-hearth-950">{f.title}</h3>
                  <p className="mt-2 leading-relaxed text-muted">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How it works */}
        <section id="how-it-works" className="scroll-mt-24 py-20">
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
        <section id="pricing" className="scroll-mt-24 mx-auto max-w-6xl px-6 py-20">
          <h2 className="text-center text-3xl font-bold text-hearth-950">
            Simple, per-gym pricing
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-center text-muted">
            Each plan is priced per gym location, with monthly and annual billing options.
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
                  Book a free demo
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
              Book a free demo
            </WhatsAppButton>
          </div>
        </section>
      </main>

      <footer className="border-t border-hearth-100 bg-hearth-50 py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 text-sm text-muted md:flex-row">
          <a href="/" className="flex items-center gap-2 font-bold text-hearth-950"><Image src="/hearthgym-mark.svg" alt="" width={40} height={40} unoptimized /> HearthGym</a>
          <span>HearthGym is operated by HS Enterprises.</span>
          <a href="https://app.hearthgym.com/login" className="font-semibold text-hearth-950 underline-offset-4 hover:underline">Staff sign in</a>
        </div>
      </footer>
    </>
  );
}
