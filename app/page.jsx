"use client";

import { useEffect, useState } from "react";


/* ============================================================
   DATA  — kept in-file so every section lives in page.jsx
   ============================================================ */
const STRIP_ITEMS = [
  "Certified Zoho Partner",
  "Zoho Analytics Specialists",
  "200+ Custom Dashboards Delivered",
  "Authorized Zoho Partner",
  "Top Zoho Consulting Partner",
  "13+ Years Of Zoho Expertise",
];

const MARQUEE_ITEMS = [
  "Certified Zoho Partner",
  "Zoho Analytics",
  "Custom Dashboards",
  "Authorized Zoho Partner",
  "Real-Time Reporting",
  "Top Zoho Consulting Partner",
  "Built by ZoFlowX",
];

const PROBLEMS = [
  {
    num: "01",
    h: "Numbers without a story",
    p: 'Your team sees 40 charts and walks away with zero decisions. We design every dashboard around one question: "What should we do today?"',
  },
  {
    num: "02",
    h: "Built once, never updated",
    p: "Your business changed. Your KPIs didn't. Most dashboards are frozen in time. ZoFlowX builds them to evolve with you.",
  },
  {
    num: "03",
    h: "Three teams, three versions of the truth",
    p: "Sales says one number, finance says another, marketing has a third. We pull every source into one place — so everyone agrees.",
  },
  {
    num: "04",
    h: "KPIs that don't drive a single decision",
    p: "If a number doesn't change behavior, it shouldn't be on the screen. We strip the fluff and surface what actually matters.",
  },
];

const SERVICES = [
  { num: "01", h: "Executive Dashboards", p: "One screen. Every number your leadership team needs to run the company. Refreshed in real time.", tag: "Leadership View" },
  { num: "02", h: "Sales Performance Dashboards", p: "Pipeline, win rates, rep leaderboards, deal velocity — all from your Zoho CRM, in one clean view.", tag: "Revenue" },
  { num: "03", h: "Marketing & Campaign Dashboards", p: "See exactly which campaigns bring leads, which ones bring revenue, and which ones to cut.", tag: "Growth" },
  { num: "04", h: "Finance & Cash Flow Dashboards", p: "Live revenue, outstanding invoices, runway, and margins — finally readable without a spreadsheet.", tag: "Money" },
  { num: "05", h: "Operations & Inventory Dashboards", p: "Spot stockouts before they happen. Track fulfillment, supplier performance, and order status live.", tag: "Ops" },
  { num: "06", h: "Customer Success Dashboards", p: "Churn risk, support ticket trends, satisfaction scores — keep customers happy before they leave.", tag: "Retention" },
  { num: "07", h: "Custom KPI Tracking", p: "Tell us the metric that matters. We'll build the view that tracks it — across any data source you use.", tag: "Tailored" },
  { num: "08", h: "Role-Based Dashboards", p: "Each person sees what they should — nothing more, nothing less. Sales reps, managers, founders.", tag: "Permissions" },
  { num: "09", h: "Mobile-Ready Dashboards", p: "Designed to look just as sharp on a phone as on a 27-inch monitor. Decisions don't wait for desks.", tag: "Anywhere" },
];

const STEPS = [
  { num: "01", h: "Discovery Call", p: "A short call to understand your business goals and what decisions you want your dashboard to drive." },
  { num: "02", h: "Data Audit", p: "We map out where your data lives today — Zoho CRM, sheets, ads, email tools — and what's missing." },
  { num: "03", h: "Dashboard Design", p: "We share simple mockups so you can see the layout before a single line is built. You approve, we build." },
  { num: "04", h: "Build & Connect", p: "Our certified team builds your dashboard inside Zoho Analytics and connects every data source you use." },
  { num: "05", h: "Quality Check", p: "We test every number against your raw data so you can trust what you see — every single time." },
  { num: "06", h: "Team Training", p: "A friendly walkthrough for your team. No jargon. Just how to read it, share it, and act on it." },
  { num: "07", h: "Ongoing Support", p: "Business changed? New KPI? We're a message away. ZoFlowX doesn't disappear after launch." },
];


const WHY_POINTS = [
  { icon: "★", h: "Authorized Zoho Partner — with deep Analytics focus", p: "We're certified across the Zoho stack, but Analytics dashboards are our craft. You won't get a generalist." },
  { icon: "⚡", h: "Speed without shortcuts", p: "Most projects ship in 3–5 weeks. We move fast because we've built this 200+ times — but never skip the basics." },
  { icon: "◐", h: "We connect what others can't", p: "Zoho CRM, Books, Desk, plus Google Ads, Meta, Shopify, sheets, custom databases — all into one Zoho Analytics view." },
  { icon: "∞", h: "We stay after launch", p: "New KPIs, new teams, new questions — ZoFlowX keeps your dashboard sharp for the long haul." },
];

const INDUSTRIES = [
  { h: "SaaS & Subscription", m: "MRR · Churn · LTV" },
  { h: "E-commerce & Retail", m: "Sales · Inventory · Returns" },
  { h: "Real Estate", m: "Listings · Agents · Pipeline" },
  { h: "Healthcare & Clinics", m: "Patients · Revenue · Visits" },
  { h: "Manufacturing", m: "Output · Quality · Delays" },
  { h: "Financial Services", m: "Portfolio · Risk · AUM" },
  { h: "Logistics & Supply", m: "Routes · Costs · On-time %" },
  { h: "Education & Training", m: "Enrollment · Completion · NPS" },
  { h: "Professional Services", m: "Utilization · Billables · Margin" },
];

const CASES = [
  {
    feature: true,
    tag: "SaaS · Featured",
    h: "Cut weekly reporting from 9 hours to 12 minutes for a B2B SaaS team.",
    p: "The leadership team was spending most of every Monday pulling numbers from CRM, Stripe, and HubSpot. ZoFlowX built one Zoho Analytics dashboard that pulls every source automatically — Monday meetings now start with decisions, not data wrangling.",
    results: [{ v: "96%", l: "Less Time On Reports" }, { v: "$48K", l: "Saved Per Year" }],
  },
  {
    tag: "E-commerce",
    h: "Unified 7 data sources for a multi-store e-commerce brand.",
    p: "Shopify, Amazon, Meta Ads, Google Ads, Klaviyo, Zoho Books, and a custom returns sheet — all in one Zoho Analytics view with profit per channel.",
    results: [{ v: "+34%", l: "Profitable Ad Spend" }, { v: "7→1", l: "Sources To Dashboards" }],
  },
  {
    tag: "Real Estate",
    h: "Real-time agent performance dashboards for a 60-agent firm.",
    p: "Agents now see their own pipeline, listings, and commissions on mobile every morning. Managers see the entire firm at a glance.",
    results: [{ v: "2.3×", l: "Faster Deal Cycles" }, { v: "100%", l: "Agent Adoption" }],
  },
];

const TESTIMONIALS = [
  {
    avatar: "PM",
    quote: "We tried two other Zoho consultants before ZoFlowX. They built our dashboard in 4 weeks and it's the first one our leadership team actually checks daily. Worth every rupee.",
    n: "Priya Mehta",
    t: "COO · SaaS Company",
  },
  {
    avatar: "DK",
    quote: "Our finance team used to spend 2 days a month on reporting. ZoFlowX rebuilt our Zoho Analytics setup and now everything is live. We got our weekends back.",
    n: "Daniel Kerr",
    t: "CFO · E-commerce Brand",
  },
  {
    avatar: "SR",
    quote: "Arul and the ZoFlowX team genuinely care. They didn't sell us features — they listened, audited what we had, and built exactly what we needed. Best Zoho partner experience.",
    n: "Sarah Rodriguez",
    t: "Founder · Marketing Agency",
  },
];

const POSTS = [
  { num: "01", tag: "Dashboard Design", h: "5 signs your Zoho Analytics dashboard needs a refresh", p: "If your team has stopped opening it, the dashboard isn't the problem — the design is. Here's how to spot it.", cover: "bg-gradient-to-br from-[#D9F75C] to-[#F0C24B] text-ink" },
  { num: "02", tag: "Sales Reporting", h: "How to build a sales dashboard your reps will actually use", p: "Most sales dashboards report up. The good ones help reps close more deals. Here's the difference.", cover: "bg-gradient-to-br from-[#E85D2F] to-[#F0C24B] text-white" },
  { num: "03", tag: "Integrations", h: "Connect Google Ads to Zoho Analytics in under 10 minutes", p: "A simple guide to seeing ad performance and CRM revenue together — the way it should be.", cover: "bg-ink text-red-500" },
];

const FAQS = [
  { q: "Is ZoFlowX an Authorized Zoho Partner?", a: "Yes. ZoFlowX is a Certified Zoho Partner and an Authorized Zoho Partner — recognized as a Top Zoho Consulting Partner with deep specialization in Zoho Analytics dashboard customization. Our team is certified across the Zoho ecosystem, so you can trust we know the platform end-to-end." },
  { q: "How long does a ZoFlowX dashboard project take?", a: "Most ZoFlowX projects ship in 3 to 5 weeks. Simple dashboards can go live in 2 weeks. Complex multi-source dashboards might take 6 to 8 weeks. After our first call, ZoFlowX gives you a clear timeline before any work starts — no surprises." },
  { q: "Will ZoFlowX work with my existing Zoho Analytics setup?", a: "Absolutely. ZoFlowX often steps in to clean up, redesign, and improve dashboards that other consultants started. Whether you're brand new to Zoho Analytics or have years of reports in there already, ZoFlowX adapts to what you have." },
  { q: "Can ZoFlowX connect Zoho Analytics to non-Zoho tools?", a: "Yes — and we love this part. ZoFlowX regularly connects Zoho Analytics to Google Ads, Meta Ads, Shopify, HubSpot, Salesforce, Stripe, QuickBooks, Klaviyo, Google Sheets, and even custom databases. One dashboard, every source." },
  { q: "Does ZoFlowX provide training after launch?", a: "Always. Every ZoFlowX project includes a friendly team training session in plain English — no jargon. We also leave behind a short video walkthrough so new team members can get up to speed any time." },
  { q: "What if I'm not on a Zoho Analytics paid plan yet?", a: "No problem. ZoFlowX will recommend the right Zoho Analytics plan for your business size and data volume. As an Authorized Zoho Partner, we can also help you set up licensing at the right price." },
  { q: "How is ZoFlowX different from other Zoho consultants?", a: "Three things make ZoFlowX different. First, we focus deeply on Zoho Analytics — it's our craft, not a side service. Second, we explain everything in plain English so non-technical owners stay in control. Third, ZoFlowX stays with you after launch — we don't disappear once the invoice is paid." },
  { q: "Can ZoFlowX rebuild dashboards another agency built?", a: "Yes — this is one of our most common projects. ZoFlowX can audit your current Zoho Analytics dashboards, point out what's working and what isn't, and rebuild them so your team finally trusts and uses them." },
  { q: "What does a ZoFlowX dashboard project cost?", a: "Pricing depends on data sources, dashboard count, and complexity. Most ZoFlowX projects fall in a clear, fixed-price range that we share before any work begins. Book a free audit and we'll give you a transparent quote in 48 hours." },
];

/* ============================================================
   Reusable bits
   ============================================================ */
const Arrow = () => <span className="inline-flex items-center leading-none"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right ml-2" aria-hidden="true"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg></span>;

function Eyebrow({ children, light, center, className = "" }) {
  return (
    <div
      className={`inline-flex items-center gap-2.5 text-[11px] font-medium uppercase tracking-[0.18em] ${light ? "text-cream/60" : "text-muted"
        } ${center ? "" : "before:h-px before:w-6 before:bg-current before:opacity-60"} ${className}`}
    >
      {children}
    </div>
  );
}

const btnPrimary =
  "inline-flex items-center justify-center gap-2 rounded-md bg-gradient-to-r from-red-500 to-red-600 px-6 py-3 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:scale-105 hover:from-red-600 hover:to-red-700";
const btnGhost =
  "inline-flex items-center justify-center gap-2 rounded-md bg-gradient-to-r from-blue-500 to-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:scale-105 hover:from-blue-600 hover:to-blue-700";
const btnLime =
  "inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-red-500 to-red-600 px-6 py-4 text-sm font-semibold text-white transition-transform duration-300 hover:-translate-y-0.5";

/* gradient text used on <em> words */
const grad =
  "bg-gradient-to-r from-blue-500 to-red-500 bg-clip-text text-transparent font-extrabold";

/* ============================================================
   PAGE
   ============================================================ */
export default function Page() {
  const [openFaq, setOpenFaq] = useState(0);

  // Reveal-on-scroll
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  // Smooth scroll for anchor links
  useEffect(() => {
    const handler = (e) => {
      const a = e.target.closest('a[href^="#"]');
      if (!a) return;
      const id = a.getAttribute("href");
      if (id.length > 1) {
        const target = document.querySelector(id);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
    };
    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, []);

  const handleBooking = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = form.elements.name.value;
    const btn = form.querySelector(".form-submit");
    btn.textContent = `✓ Request received, ${name.split(" ")[0]}!`;
    btn.style.background = "#E85D2F";
    setTimeout(() => {
      form.reset();
      btn.innerHTML = 'Book My Free Audit <span class="inline-flex h-[22px] w-[22px] items-center justify-center rounded-full bg-red-500 text-ink">→</span>';
      btn.style.background = "";
    }, 4000);
  };

  return (
    <main className="overflow-x-hidden bg-cream font-sans text-[#16161A] antialiased">
      {/* ============================================================
          TOP STRIP
          ============================================================ */}
      <div className="overflow-hidden bg-ink py-2.5 text-xs tracking-[0.05em] text-cream">
        <div className="flex animate-[slide_38s_linear_infinite] gap-12 whitespace-nowrap">
          {[...STRIP_ITEMS, ...STRIP_ITEMS].map((s, i) => (
            <span key={i} className="inline-flex items-center gap-3.5 after:text-[10px] after:text-red-500 after:content-['◆']">
              {s}
            </span>
          ))}
        </div>
      </div>

      {/* ============================================================
          NAV
          ============================================================ */}
      <nav className="sticky top-0 z-50 border-b border-ink/10 bg-white backdrop-blur-md">
        <div className="mx-auto flex max-w-[1320px] items-center justify-between px-8 py-[18px] max-[720px]:px-5">
          <a href="#" className="flex items-center gap-2 text-[26px] font-medium tracking-[-0.03em]">
            <span className="h-2 w-2 rounded-full bg-red-500 shadow-[0_0_0_4px_rgba(217,247,92,.25)]" />
            ZoFlow<em className="font-light not-italic text-coral">X</em>
          </a>
          <div className="hidden gap-[34px] text-sm font-medium min-[901px]:flex">
            {[
              ["Services", "#services"],
              ["How We Work", "#process"],
              ["Case Studies", "#cases"],
              ["FAQ", "#faq"],
              ["Blog", "#blog"],
            ].map(([label, href]) => (
              <a key={href} href={href} className="relative py-1.5 text-[#16161A] transition-colors after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-ink after:transition-transform after:duration-300 hover:after:scale-x-100">
                {label}
              </a>
            ))}
          </div>
          <a href="#book" className={btnPrimary}>
            Book a Free Audit <Arrow />
          </a>
        </div>
      </nav>

      {/* ============================================================
          HERO
          ============================================================ */}
      <section className="relative overflow-hidden bg-[linear-gradient(135deg,#eff6ff_0%,#fefce8_50%,#fef2f2_100%)] px-8 pb-[110px] pt-20 max-[720px]:px-0 max-[720px]:pb-[70px] max-[720px]:pt-[50px]">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(14,14,18,.04)_1px,transparent_1px),linear-gradient(90deg,rgba(14,14,18,.04)_1px,transparent_1px)] bg-[length:80px_80px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
        <div className="relative mx-auto grid max-w-[1320px] grid-cols-[1.15fr_.85fr] items-center gap-[60px] px-8 max-[1000px]:grid-cols-1 max-[1000px]:gap-12 max-[720px]:px-5">
          <div>
            <div className="reveal mb-9 flex flex-wrap items-center gap-3.5">
              <div className="relative inline-flex items-center px-5 py-2 rounded-full overflow-hidden bg-gradient-to-r from-blue-100 via-yellow-100 to-red-100 text-blue-800 border border-blue-200 shadow-sm">

                {/* Shimmer Animation */}

                <span className="absolute top-0 left-0 h-full w-[70%] bg-gradient-to-r from-transparent via-white to-transparent animate-shimmer"></span>

                {/* Content */}
                <span className="relative flex items-center gap-2 font-bold text-[14px]">
                  <span className="h-[7px] w-[7px] rounded-full bg-red-500"></span>
                  Authorized Zoho Partner
                </span>


              </div>

              <div className="relative inline-flex items-center px-5 py-2 rounded-full overflow-hidden bg-gradient-to-r from-blue-100 via-yellow-100 to-red-100 text-blue-800 border border-blue-200 shadow-sm">

                {/* Shimmer Animation */}

                <span className="absolute top-0 left-0 h-full w-[70%] bg-gradient-to-r from-transparent via-white to-transparent animate-shimmer"></span>

                {/* Content */}
                <span className="relative flex items-center gap-2 font-bold text-[14px]">
                  <span className="h-[7px] w-[7px] rounded-full bg-red-500"></span>
                  Zoho Analytics · Dashboard Customization
                </span>


              </div>

            </div>
            <h1 className="reveal mb-8 text-5xl font-extrabold leading-[1.15] tracking-[-0.035em]">
              Dashboards your team will <span className={grad}>actually open</span>
              <br />
              every <em className={`not-italic ${grad}`}>morning.</em>
            </h1>
            <p className="reveal mb-9 max-w-[560px] text-[19px] text-[#3b3b40]">
              ZoFlowX builds custom Zoho Analytics dashboards that turn scattered numbers into one clear picture. Less guesswork. Faster decisions. Real growth — designed around how your business actually runs.
            </p>
            <div className="reveal mb-[42px] flex flex-wrap items-center gap-3.5">
              <a href="#book" className={btnPrimary}>
                Book a Free Dashboard Audit <Arrow />
              </a>
              <a href="#cases" className={btnGhost}>
                See sample dashboards <Arrow />
              </a>
            </div>
            <div className="reveal flex flex-wrap items-center gap-9 border-t border-ink/10 pt-[30px] text-[13px] max-[720px]:gap-5">
              {[
                ["200+", "Dashboards Built"],
                ["13+", "Years Of Zoho"],
                ["14", "Industries Served"],
                ["98%", "Client Retention"],
              ].map(([num, lbl]) => (
                <div key={lbl} className="flex flex-col gap-0.5">
                  <span className="text-[30px] tracking-[-0.02em] max-[720px]:text-2xl">{num}</span>
                  <span className="text-[10.5px] uppercase tracking-[0.1em] text-muted">{lbl}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Hero dashboard mock */}
          <div className="reveal relative rotate-[1.2deg] rounded-3xl p-6 text-cream shadow-[0_50px_100px_-30px_rgba(14,14,18,.4)] transition-transform duration-500 hover:translate-y-[-4px] hover:rotate-0 max-[720px]:rotate-0">
            <div className="mb-[18px] flex items-center justify-between border-b border-white/10 pb-4 text-black">
              <div className="bg-white text-[11px] uppercase tracking-[0.12em] opacity-60">ZoFlowX · Sales Dashboard</div>
              <div className="flex gap-[5px]">
                <span className="h-2 w-2 rounded-full bg-[#3B82F6]" />
                <span className="h-2 w-2 rounded-full bg-white/20" />
                <span className="h-2 w-2 rounded-full bg-white/20" />
              </div>
            </div>

            <div className="mb-3.5 grid grid-cols-2 gap-3">
              {[
                ["Revenue · MTD", "$184.2K", "▲ 24.7% vs last month"],
                ["Pipeline Value", "$612K", "▲ 11.2% growth"],
              ].map(([lbl, val, delta]) => (
                <div key={lbl} className="rounded-2xl border border-white/5 bg-ink2 p-3.5">
                  <div className="mb-2 text-[10px] uppercase tracking-[0.1em] text-cream/50">{lbl}</div>
                  <div className="text-[28px] tracking-[-0.02em]">{val}</div>
                  <div className="mt-1 text-[11px] text-red-500">{delta}</div>
                </div>
              ))}
            </div>

            <div className="mb-3 rounded-2xl border border-white/5 bg-ink2 p-[18px]">
              <div className="mb-3.5 flex items-center justify-between">
                <h4 className="text-[11px] font-medium uppercase tracking-[0.1em] text-cream/60">Revenue · Last 7 Months</h4>
                <div className="flex gap-2.5 text-[10px] text-cream/50">
                  <span><i className="mr-[5px] inline-block h-2 w-2 rounded-full bg-[#3B82F6]" />Won</span>
                  <span><i className="mr-[5px] inline-block h-2 w-2 rounded-full bg-coral" />Lost</span>
                </div>
              </div>
              <div className="flex h-20 items-end gap-2.5">
                {[
                  ["35%", "lime", ".1s"],
                  ["55%", "lime", ".2s"],
                  ["42%", "lime", ".3s"],
                  ["60%", "coral", ".4s"],
                  ["78%", "lime", ".5s"],
                  ["65%", "lime", ".6s"],
                  ["90%", "lime", ".7s"],
                ].map(([h, c, d], i) => (
                  <div
                    key={i}
                    className="flex-1 animate-[rise_1s_ease-out_backwards] rounded-t"
                    style={{
                      height: h,
                      animationDelay: d,
                      background:
                        c === "lime"
                          ? "linear-gradient(to top, #2563EB, #3B82F6)"
                          : "#EF4444",
                    }}
                  />
                ))}
              </div>
            </div>

            <div className="flex items-center justify-between gap-3.5 rounded-2xl border border-white/5 bg-ink2 p-4">
              <div className="flex flex-col">
                <div className="text-[10px] uppercase tracking-[0.1em] text-cream/50">Conversion Rate</div>
                <div className="text-[22px]">38.6%</div>
              </div>
              <svg viewBox="0 0 120 40" fill="none" className="max-w-[120px] flex-1">
                <path d="M0,30 L15,25 L30,28 L45,18 L60,22 L75,12 L90,15 L105,6 L120,8" stroke="#3B82F6" strokeWidth="2" fill="none" strokeLinecap="round" />
                <circle cx="120" cy="8" r="3" fill="#3B82F6" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          MARQUEE
          ============================================================ */}
      {/* <section className="overflow-hidden border-t border-white/5 bg-white py-6 text-black">
        <div className="flex animate-[slide_40s_linear_infinite] gap-[60px] whitespace-nowrap text-[38px] font-light tracking-[-0.02em] max-[700px]:text-[28px]">
          {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((s, i) => (
            <span key={i} className="inline-flex items-center gap-[30px] after:inline-block after:h-2 after:w-2 after:rounded-full after:bg-red-500 after:content-['']">
              {s}
            </span>
          ))}
        </div>
      </section> */}

      {/* ============================================================
          PROBLEM
          ============================================================ */}
      <section className="relative bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,.05),transparent_40%),radial-gradient(circle_at_bottom_right,rgba(250,204,21,.05),transparent_40%),linear-gradient(135deg,#ffffff_0%,#f8fbff_50%,#fffef7_100%)] px-8 pb-[100px] pt-[70px] max-[720px]:px-0 max-[720px]:py-20">
        <div className="mx-auto grid max-w-[1320px] grid-cols-[.85fr_1.15fr] items-start gap-20 px-8 max-[1000px]:grid-cols-1 max-[1000px]:gap-12 max-[720px]:px-5">
          <div className="reveal">
            <Eyebrow>The Honest Truth</Eyebrow>
            <h2 className="my-6 text-5xl font-bold leading-[1.05]">
              Most dashboards look <em className={`not-italic ${grad}`}>busy</em> but tell you nothing.
            </h2>
            <p className="max-w-[480px] text-lg text-[#3b3b40]">
              You bought Zoho Analytics for clarity. But the standard reports show numbers your team scrolls past every morning. That's not a Zoho problem — it's a customization problem.
            </p>
            <div className="mt-[50px]">
              <a href="#book" className={btnPrimary}>
                Show me what's wrong with mine <Arrow />
              </a>
            </div>
          </div>

          <div className="reveal flex flex-col">
            {PROBLEMS.map((it, i) => (
              <div
                key={it.num}
                className={`group grid grid-cols-[60px_1fr_auto] items-start gap-5 border-b border-ink/10 py-7 transition-[padding] duration-300 hover:pl-3.5 ${i === 0 ? "border-t" : ""
                  }`}
              >
                <span className="pt-1.5 text-[13px] text-muted">{it.num}</span>
                <div>
                  <h3 className="mb-1.5 text-2xl font-bold">{it.h}</h3>
                  <p className="max-w-[520px] text-[15.5px] text-[#4a4a4f]">{it.p}</p>
                </div>
               
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          SERVICES
          ============================================================ */}
      <section id="services" className="relative bg-white px-8 py-[70px] text-[#111827] max-[720px]:px-0 max-[720px]:py-20">
        <div className="relative mx-auto max-w-[1320px] px-8 max-[720px]:px-5">
          <div className="mb-[70px]">
            <div className="reveal max-w-[800px]">
              <Eyebrow>What We Customize</Eyebrow>

              <h2 className="text-5xl leading-none tracking-[-0.03em] text-black whitespace-nowrap">
                Built around <em className={`not-italic ${grad}`}>your business</em>, not a template.
              </h2>

              <p className="mt-8 max-w-[650px] text-[17px] leading-relaxed text-black">
                Every business has a different way of measuring success. As a Certified Zoho Partner,
                ZoFlowX customizes Zoho Analytics dashboards for the way your team thinks, reports,
                and decides.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-px border border-white/10 bg-white/10 max-[900px]:grid-cols-2 max-[600px]:grid-cols-1">
            {SERVICES.map((s) => (
              <div key={s.num} className="group relative flex min-h-[280px] flex-col bg-[#111827] px-8 pb-8 pt-[38px] transition-colors duration-300 hover:bg-gradient-to-br hover:from-[#24213E] hover:to-[#2C1F35]">
                <div className="text-[11px] tracking-[0.1em] text-cream/40">{s.num}</div>
                <div className="absolute right-8 top-8 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-all duration-300 group-hover:rotate-[-45deg] group-hover:bg-red-500">
                  →
                </div>
                <h3 className="text-lg my-[14px] mt-[18px] text-[26px] font-semibold leading-[1.1] text-white">{s.h}</h3>
                <p className="flex-1 text-[14px] leading-[1.5] text-cream/65">{s.p}</p>
                <span className="mt-[18px] w-max rounded-full bg-[rgba(217,247,92,.15)] px-2.5 py-[5px] text-[10px] uppercase tracking-[0.1em] text-red-500">
                  {s.tag}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-[60px] flex flex-wrap justify-center gap-3.5">
            <a href="#book" className={btnPrimary}>
              Get a quote for my dashboard <Arrow />
            </a>
            <a href="#process" className={btnGhost}>
              See how we work <Arrow />
            </a>
          </div>
        </div>
      </section>

      {/* ============================================================
          PROCESS
          ============================================================ */}
      <section id="process" className="relative bg-[linear-gradient(135deg,#EAF2FF_0%,#F3F4F6_100%)] py-[70px]">
        <div className="mx-auto max-w-[1320px] px-8 max-[720px]:px-5">
          <div className="reveal">
            <Eyebrow>How ZoFlowX Works</Eyebrow>
            <h2 className="my-[18px] text-5xl tracking-[-0.03em]">
              From scattered data to a <em className={`not-italic ${grad}`}>single source of truth</em> — in 3 to 5 weeks.
            </h2>
            <p className="mb-[70px] max-w-[580px] text-[17px] text-[#3b3b40]">
              We've delivered hundreds of Zoho Analytics dashboards. The process is simple, predictable, and built to keep you in control at every step.
            </p>
          </div>


          {/* <div className="reveal grid grid-cols-7 border-y border-ink/20 max-[1100px]:grid-cols-2 max-[600px]:grid-cols-1">
            {STEPS.map((st, i) => (
              <div key={st.num} className="flex min-h-[240px] flex-col border border-[#BFDBFE] bg-[rgb(240,242,236)] p-[30px_22px] px-[22px] py-[30px] transition-colors duration-300 hover:bg-white/70">
                <div
                  className={`mb-[18px] flex h-9 w-9 items-center justify-center rounded-full text-[13px] font-medium ${[0, 3, 6].includes(i) ? "bg-blue-500 text-white" : "bg-ink text-cream"
                    }`}
                >
                  {st.num}
                </div>
                <h3 className="mb-2.5 text-[21px] leading-[1.15]">{st.h}</h3>
                <p className="text-sm leading-[1.5] text-[#4a4a4f]">{st.p}</p>
              </div>
            ))}
          </div> */}
          <div className="reveal grid grid-cols-3 gap-8 max-[1100px]:grid-cols-2 max-[700px]:grid-cols-1">
            {STEPS.map((st) => (
              <div
                key={st.num}
                className="group rounded-[32px] border border-[#BFDBFE] bg-white p-8 transition-all duration-300 hover:border-[rgb(239,68,68)] hover:bg-gradient-to-br hover:from-[#eff6ff] hover:to-[#fefce8] hover:-translate-y-2 hover:shadow-xl"
              >
                <h3 className="text-lg mb-3 text-[24px] font-bold leading-[1.1] text-[#0F172A]">
                  {st.h}
                </h3>

                <p className="mb-5 text-[14px] leading-[1.6] text-[#475569]">
                  {st.p}
                </p>

                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-200 text-lg transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-red-500 group-hover:text-white group-hover:border-transparent">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up-right"
                  >
                    <path d="M7 7h10v10" />
                    <path d="M7 17 17 7" />
                  </svg>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-[60px]">
            <a href="#book" className={btnPrimary}>
              Start my dashboard project <Arrow />
            </a>
          </div>
        </div>
      </section>

      {/* ============================================================
          WHY ZOFLOWX
          ============================================================ */}
      <section className="relative bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,.05),transparent_40%),radial-gradient(circle_at_bottom_right,rgba(250,204,21,.05),transparent_40%),linear-gradient(135deg,#ffffff_0%,#f8fbff_50%,#fffef7_100%)] px-8 py-[70px] max-[720px]:px-0 max-[720px]:py-20">
        <div className="mx-auto grid max-w-[1320px] grid-cols-2 items-start gap-20 px-8 max-[1000px]:grid-cols-1 max-[1000px]:gap-12 max-[720px]:px-5">
          <div className="reveal">
            <Eyebrow>Why ZoFlowX</Eyebrow>
            <h2 className="my-5 text-5xl leading-none tracking-[-0.03em] font-bold">
              You're not hiring a vendor. You're hiring a <em className="not-italic bg-gradient-to-r from-blue-500 to-red-500 bg-clip-text text-transparent font-bold">partner.</em>
            </h2>
            <p className="max-w-[480px] text-[17px] text-[#3b3b40]">
              Anyone can drag charts onto a screen. ZoFlowX is a Top Zoho Consulting Partner that designs dashboards your team will use for years — not just open once.
            </p>


            <div className="mt-10">
              <a href="#book" className={btnPrimary}>
                Talk to a ZoFlowX expert <Arrow />
              </a>
            </div>
          </div>

          <div className="reveal flex flex-col">
            {WHY_POINTS.map((w, i) => {
              const iconBg = ["bg-ink text-white", "bg-red-500 text-white", "bg-coral text-white", "bg-gold text-white"][i];
              return (
                <div key={w.h} className={`grid grid-cols-[80px_1fr] gap-[22px] border-b border-ink/10 py-[30px] ${i === 0 ? "border-t" : ""}`}>
                  <div className={`flex h-[60px] w-[60px] items-center justify-center rounded-[14px] text-2xl text-black bg-gradient-to-r from-blue-500 to-red-500 ${iconBg}`}>{w.icon}</div>
                  <div>
                    <h3 className="mb-2 text-[22px] font-bold">{w.h}</h3>
                    <p className="text-[15.5px] text-[#4a4a4f]">{w.p}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============================================================
          INDUSTRIES
          ============================================================ */}
      <section className="relative overflow-hidden bg-[#111827] px-8 py-[120px] text-cream before:absolute before:left-0 before:right-0 before:top-0 before:h-px before:bg-[linear-gradient(90deg,transparent,#D9F75C,transparent)] max-[720px]:px-0 max-[720px]:py-20">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-[100px] -left-[100px] h-[500px] w-[500px] rounded-full bg-red-500/20 blur-[180px]"></div>
        </div>
        <div className="mx-auto max-w-[1320px] px-8 max-[720px]:px-5">
          <div className="mb-[60px] flex flex-wrap items-center justify-between gap-10">
            <div className="reveal">
              <Eyebrow light>Industries We Serve</Eyebrow>
              <h2 className="mt-[18px] max-w-[680px] text-5xl leading-none tracking-[-0.03em] font-bold">
                Custom Zoho Analytics dashboards for <em className="not-italic bg-gradient-to-r from-blue-500 to-red-500 bg-clip-text text-transparent font-bold">every kind of business.</em>
              </h2>
            </div>
            <a href="#book" className={`reveal ${btnLime}`}>
              Talk to your industry specialist <Arrow />
            </a>
          </div>

          <div className="reveal grid grid-cols-3 gap-3.5 max-[900px]:grid-cols-2 max-[600px]:grid-cols-1">
            {INDUSTRIES.map((ind) => (
              <div
                key={ind.h}
                className="group flex cursor-pointer items-center justify-between gap-4 rounded-[18px] border border-white/10 px-6 py-[26px] transition-all duration-300 hover:-translate-y-[3px] hover:bg-gradient-to-br hover:from-[#24213E] hover:to-[#2C1F35] hover:shadow-[0_12px_30px_rgba(0,0,0,0.25)]"
              >
                <div>
                  <h3 className="text-[22px] font-medium">{ind.h}</h3>
                  <div className="mt-1 text-[11px] uppercase tracking-[0.08em] text-cream/50">
                    {ind.m}
                  </div>
                </div>

                <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center transition-transform duration-300 group-hover:translate-x-[3px] group-hover:-translate-y-[3px]">
                  ↗
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          CASE STUDIES
          ============================================================ */}
      <section id="cases" className="relative bg-[linear-gradient(135deg,#EAF2FF_0%,#F3F4F6_100%)] px-8 py-[70px] max-[720px]:px-0 max-[720px]:py-20">
        <div className="mx-auto max-w-[1320px] px-8 max-[720px]:px-5">
          <div className="mb-[60px] grid grid-cols-1 items-center gap-[60px] max-[900px]:grid-cols-1 max-[900px]:gap-6">
            <div className="reveal">
              <Eyebrow>Real Wins, Real Numbers</Eyebrow>
              <h2 className="text-5xl leading-none tracking-[-0.03em]">
                Dashboards that <em className={`not-italic ${grad}`}>actually moved the needle.</em>
              </h2>
            </div>
            <p className="reveal max-w-[480px] text-[17px] text-[#3b3b40]">
              Every project ZoFlowX takes on ends in a measurable change — faster reporting, cleaner data, better calls. Here's what that looks like.
            </p>
          </div>

          <div className="grid grid-cols-[1.3fr_1fr_1fr] gap-[18px] max-[1000px]:grid-cols-1">
            {CASES.map((c) => (
              <div key={c.h} className="reveal flex min-h-[380px] flex-col gap-5 overflow-hidden rounded-3xl border border-[#BFDBFE] bg-[#F0F2EC] p-8 transition-all duration-300 hover:-translate-y-[6px] hover:border-[#FCA5A5] hover:shadow-[0_30px_60px_-25px_rgba(14,14,18,.2)]">
                <span className="w-max rounded-full bg-red-500 px-3 py-1.5 text-[10.5px] uppercase tracking-[0.1em] text-white">{c.tag}</span>
                <h3 className="text-[26px] leading-[1.15] tracking-[-0.01em]">{c.h}</h3>
                <p className="flex-1 text-[15px] leading-[1.55] text-[#4a4a4f]">{c.p}</p>
                <div className="grid grid-cols-2 gap-[18px] border-t border-ink/10 pt-[18px]">
                  {c.results.map((r) => (
                    <div key={r.l}>
                      <div className={`text-4xl leading-none tracking-[-0.02em] ${c.feature ? "text-red-500" : ""}`}>{r.v}</div>
                      <div className="mt-1.5 text-[10px] uppercase tracking-[0.1em] text-muted">{r.l}</div>
                    </div>
                  ))}
                </div>
                <a href="#" className="mt-auto flex items-center gap-2 text-xs tracking-[0.05em]">Read the full story →</a>
              </div>
            ))}
          </div>

          <div className="mt-[60px] text-center">
            <a href="#book" className={btnPrimary}>
              Become our next case study <Arrow />
            </a>
          </div>
        </div>
      </section>

      {/* ============================================================
          TESTIMONIALS
          ============================================================ */}
      <section className="bg-white px-8 py-[70px] max-[720px]:px-0 max-[720px]:py-20">
        <div className="mx-auto max-w-[1320px] px-8 max-[720px]:px-5">
          <div className="reveal mx-auto mb-[60px] max-w-[780px] text-center">
            <Eyebrow center className="justify-center">What Clients Say</Eyebrow>
            <h2 className="my-[18px] text-5xl leading-none tracking-[-0.03em]">
              Words from teams who finally <em className={`not-italic ${grad}`}>love their dashboards.</em>
            </h2>
          </div>

          <div className="grid grid-cols-3 gap-[22px] max-[900px]:grid-cols-1">
            {TESTIMONIALS.map((t, i) => {
              const dark = i === 1;
              const avatarBg = ["bg-gradient-to-br from-coral to-gold", "bg-gradient-to-br from-lime to-gold text-ink", "bg-gradient-to-br from-ink to-coral"][i];
              return (
                <div
                  key={t.n}
                  className={`relative flex flex-col rounded-[22px] border p-[32px_30px] px-[30px] py-8 transition-transform duration-300 hover:-translate-y-1 ${dark ? "border-ink bg-ink text-cream" : "border-ink/10 bg-paper"
                    }`}
                >
                  <div className={`mb-[18px] text-sm tracking-[2px] ${dark ? "text-red-500" : "text-coral"}`}>★★★★★</div>
                  <div className={`mb-2 text-[64px] leading-[.5] ${dark ? "text-red-500" : "text-coral"}`}>“</div>
                  <blockquote className="flex-1 text-[18.5px] leading-[1.45] tracking-[-0.01em]">{t.quote}</blockquote>
                  <div className={`mt-6 flex items-center gap-3 border-t pt-[22px] ${dark ? "border-white/10" : "border-ink/10"}`}>
                    <div className={`flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full text-[17px] font-medium text-white ${avatarBg}`}>{t.avatar}</div>
                    <div>
                      <div className="text-base font-medium">{t.n}</div>
                      <div className={`text-[11px] tracking-[0.05em] ${dark ? "text-cream/55" : "text-muted"}`}>{t.t}</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-[50px] text-center">
            <a href="#book" className={btnPrimary}>
              Add your name to this list <Arrow />
            </a>
          </div>
        </div>
      </section>

      {/* ============================================================
          BLOG
          ============================================================ */}
      <section id="blog" className="bg-[linear-gradient(135deg,#EAF2FF_0%,#F3F4F6_100%)] py-[70px]">
        <div className="mx-auto max-w-[1320px] px-8 max-[720px]:px-5">
          <div className="mb-[50px] grid grid-cols-2 items-center gap-[60px] max-[900px]:grid-cols-1 max-[900px]:gap-[18px]">
            <div className="reveal">
              <Eyebrow>From The ZoFlowX Blog</Eyebrow>
              <h2 className="text-5xl leading-none tracking-[-0.03em]">
                Practical reads on Zoho Analytics dashboards, <em className={`not-italic ${grad}`}>no fluff.</em>
              </h2>
            </div>
            <p className="reveal max-w-[460px] text-[17px] text-[#3b3b40]">
              We share what we've learned building hundreds of dashboards. Real examples, plain English, nothing salesy.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-[22px] max-[900px]:grid-cols-1">
            {POSTS.map((post) => (
              <article key={post.num} className="reveal flex flex-col overflow-hidden rounded-[22px] border border-ink/10 bg-paper transition-all duration-300 hover:-translate-y-[5px] hover:shadow-[0_25px_50px_-20px_rgba(14,14,18,.2)]">
                <div className={`flex h-[200px] items-center justify-center text-[72px] ${post.cover}`}>
                  <span className="relative z-10">{post.num}</span>
                </div>
                <div className="flex flex-1 flex-col border border-[#BFDBFE] p-[26px] pb-7 hover:border-[#FCA5A5]">
                  <div className="mb-3.5 flex items-center gap-2.5 text-[10.5px] uppercase tracking-[0.1em] text-muted">
                    <span className="h-[5px] w-[5px] rounded-full bg-coral" />
                    {post.tag}
                  </div>
                  <h3 className="mb-2.5 text-[22px] leading-[1.2] tracking-[-0.01em]">{post.h}</h3>
                  <p className="mb-[18px] flex-1 text-[14.5px] leading-[1.5] text-[#4a4a4f]">{post.p}</p>
                  <a href="#" className="inline-flex items-center gap-2 border-t border-ink/10 pt-4 text-xs tracking-[0.05em] text-ink">Read article →</a>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-[50px] text-center">
            <a href="#" className={btnGhost}>
              Read all ZoFlowX insights <Arrow />
            </a>
          </div>
        </div>
      </section>

      {/* ============================================================
          FAQ
          ============================================================ */}
      <section id="faq" className="bg-white px-8 py-[70px] max-[720px]:px-0 max-[720px]:py-20">
        <div className="mx-auto grid max-w-[1320px] grid-cols-[.85fr_1.15fr] items-start gap-20 px-8 max-[1000px]:grid-cols-1 max-[1000px]:gap-12 max-[720px]:px-5">
          <div className="reveal">
            <Eyebrow>Common Questions</Eyebrow>
            <h2 className="my-6 text-5xl leading-none tracking-[-0.03em]">
              Quick answers about <em className={`not-italic ${grad}`}>working with ZoFlowX.</em>
            </h2>
            <p className="max-w-[380px] text-[17px] text-[#3b3b40]">
              Still curious? Book a free 30-minute call with the ZoFlowX team — no pitch, just answers.
            </p>
            <div className="mt-9">
              <a href="#book" className={btnPrimary}>
                Talk to ZoFlowX <Arrow />
              </a>
            </div>
          </div>

          <div className="reveal flex flex-col border-t border-ink/15">
            {FAQS.map((f, i) => {
              const open = openFaq === i;
              return (
                <div key={f.q} className="border-b border-ink/15">
                  <button
                    onClick={() => setOpenFaq(open ? -1 : i)}
                    className="flex w-full items-center justify-between gap-6 py-[26px] text-left text-xl font-medium tracking-[-0.01em] text-ink transition-[padding] duration-300 hover:pl-2.5"
                  >
                    {f.q}
                    <span
                      className={`flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${open ? "rotate-45 border-red-500 bg-red-500" : "border-ink/20"
                        }`}
                    >
                      +
                    </span>
                  </button>
                  <div className={`overflow-hidden transition-[max-height] duration-[400ms] ease-in-out ${open ? "max-h-[400px]" : "max-h-0"}`}>
                    <div className="max-w-[680px] pb-7 text-base leading-[1.6] text-[#4a4a4f]">{f.a}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============================================================
          FINAL CTA + BOOK A MEETING
          ============================================================ */}
      <section id="book" className="relative overflow-hidden bg-[#111827] px-8 py-[120px] text-cream max-[720px]:px-0 max-[720px]:py-20">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_80%_20%,rgba(217,247,92,.15),transparent_50%),radial-gradient(ellipse_at_20%_80%,rgba(232,93,47,.1),transparent_50%)]" />
        <div className="relative mx-auto grid max-w-[1320px] grid-cols-[1.05fr_.95fr] items-start gap-20 px-8 max-[1000px]:grid-cols-1 max-[1000px]:gap-12 max-[720px]:px-5">
          <div className="reveal">
            <div className="inline-flex items-center gap-2.5 text-[11px] font-medium uppercase tracking-[0.18em] text-red-500 before:h-px before:w-6 before:bg-lime before:opacity-60">
              Let's Build Yours
            </div>
            <h2 className="my-7 text-5xl leading-none tracking-[-0.03em]">
              Ready for a dashboard your team <em className={`not-italic ${grad}`}>actually loves?</em>
            </h2>
            <p className="mb-9 max-w-[520px] text-lg text-cream/75">
              Book a free 30-minute audit with ZoFlowX. We'll review your current Zoho Analytics setup, spot what's missing, and walk you through exactly what your custom dashboard could look like. No pitch, no pressure.
            </p>

            <ul className="mb-9 flex flex-col gap-3.5">
              {[
                "Free Zoho Analytics audit — 30 minutes, real value",
                "Talk directly to a Certified Zoho Partner expert",
                "Walk away with a clear next-step plan, even if you don't hire us",
                "Trusted by 200+ businesses across 14 industries",
              ].map((li) => (
                <li key={li} className="flex items-center gap-3.5 text-[15.5px] text-cream/85 before:h-2 before:w-2 before:flex-shrink-0 before:rounded-full before:bg-red-500 before:content-['']">
                  {li}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap items-center gap-6 border-t border-white/10 pt-8 text-[13px] text-cream/60">
              <span>Prefer email? <a href="mailto:info@zoflowx.com" className="text-red-500">info@zoflowx.com</a></span>
              <span className="text-cream/30">|</span>
              <span>Or call: <a href="tel:+91 8190009222" className="text-red-500">+91 8190009222</a></span>
            </div>
          </div>

          {/* Booking form */}
          <form onSubmit={handleBooking} className="reveal relative overflow-hidden rounded-3xl bg-paper p-[36px_32px] px-8 py-9 text-ink shadow-[0_40px_80px_-30px_rgba(0,0,0,.4)]">
            <div className="absolute -right-[60px] -top-[60px] h-40 w-40 rounded-full bg-red-500 opacity-50 blur-[50px]" />
            <div className="relative z-10 mb-6">
              <div className="mb-2.5 flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.1em] text-coral before:h-1.5 before:w-1.5 before:animate-[pulse_2s_infinite] before:rounded-full before:bg-coral before:content-['']">
                Book a Free Audit · 30 min
              </div>
              <h3 className="mb-2 text-[30px] leading-[1.05] tracking-[-0.02em]">
                Schedule your <em className="font-light not-italic text-coral">free dashboard audit.</em>
              </h3>
              <p className="text-sm text-[#4a4a4f]">Fill this in and the ZoFlowX team will confirm your slot within a few hours.</p>
            </div>

            <div className="relative z-10 mb-3.5 grid grid-cols-2 gap-3">
              <Field label="Full name" name="name" placeholder="Jane Doe" required />
              <Field label="Work email" name="email" type="email" placeholder="jane@company.com" required />
            </div>
            <div className="relative z-10 mb-3.5 grid grid-cols-2 gap-3">
              <Field label="Company" name="company" placeholder="Acme Inc." required />
              <Field label="Phone (optional)" name="phone" type="tel" placeholder="+1 555 123 4567" />
            </div>

            <div className="relative z-10 mb-3.5">
              <FieldLabel>I'd like to talk about</FieldLabel>
              <select name="topic" required className={inputClass}>
                <option value="">Choose what fits best...</option>
                <option>Building a new Zoho Analytics dashboard</option>
                <option>Fixing or rebuilding our current dashboard</option>
                <option>Connecting more data sources</option>
                <option>Training our team on Zoho Analytics</option>
                <option>I'm not sure yet — let's chat</option>
              </select>
            </div>

          

            <div className="relative z-10 mb-3.5">
              <FieldLabel>Anything we should know? (optional)</FieldLabel>
              <textarea name="notes" placeholder="One line about your biggest dashboard headache..." className={`${inputClass} min-h-[80px] resize-y`} />
            </div>

            <button
              type="submit"
              class="form-submit relative z-10 mt-1.5 flex w-full items-center justify-center gap-2.5 rounded-xl bg-red-500 py-[17px] text-[15px] font-medium text-white transition-all duration-200"
            >
              Book My Free Audit
              <span class="flex h-[22px] w-[22px] items-center justify-center rounded-full bg-white text-red-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={14}
                  height={14}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2.5}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </span>
            </button>
            <p className="relative z-10 mt-3.5 text-center text-[11px] tracking-[0.04em] text-muted">No spam. No pitch decks. Just a real conversation.</p>
          </form>
        </div>
      </section>

      {/* ============================================================
          FOOTER
          ============================================================ */}
      <footer className="border-t border-white/[.07] bg-ink py-[80px_0] pb-9 pt-20 text-cream">
        <div className="mx-auto max-w-[1320px] px-8 max-[720px]:px-5">
          <div className="mb-[60px] grid grid-cols-[1.4fr_.8fr_.8fr_.8fr_1fr] gap-[50px] max-[1000px]:grid-cols-2 max-[1000px]:gap-10 max-[600px]:grid-cols-1">
            <div>
              <a href="#" className="mb-[18px] flex items-center gap-2 text-[32px] font-medium text-cream">
                <span className="h-2 w-2 rounded-full bg-red-500 shadow-[0_0_0_4px_rgba(217,247,92,.25)]" />
                ZoFlow<em className="font-light not-italic text-coral">X</em>
              </a>
              <p className="mb-[22px] max-w-[340px] text-[14.5px] text-cream/65">
                ZoFlowX is a Certified Zoho Partner specializing in Zoho Analytics dashboard customization. We build dashboards that turn your data into decisions.
              </p>
              <div className="flex flex-col gap-2">
                {["Authorized Zoho Partner", "Top Zoho Consulting Partner", "Zoho Analytics Specialists"].map((b) => (
                  <div key={b} className="flex items-center gap-2 text-[11px] tracking-[0.06em] text-cream/65 before:font-bold before:text-red-500 before:content-['✓']">
                    {b}
                  </div>
                ))}
              </div>
            </div>

            {[
              ["Services", ["Executive Dashboards", "Sales Dashboards", "Marketing Dashboards", "Finance Dashboards", "Custom KPI Tracking"]],
              ["Company", ["About ZoFlowX", "Case Studies", "Blog", "FAQ", "Contact"]],
              ["Industries", ["SaaS & Subscription", "E-commerce", "Real Estate", "Healthcare", "Manufacturing"]],
            ].map(([title, links]) => (
              <div key={title}>
                <h4 className="mb-[18px] text-[11px] font-medium uppercase tracking-[0.12em] text-red-500">{title}</h4>
                <ul className="flex flex-col gap-[11px]">
                  {links.map((l) => (
                    <li key={l}>
                      <a href="#" className="text-sm text-cream/70 transition-colors hover:text-cream">{l}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div>
              <h4 className="mb-[18px] text-[11px] font-medium uppercase tracking-[0.12em] text-red-500">Stay In The Loop</h4>
              <p className="mb-3.5 text-sm text-cream/65">One short email a month. Real dashboard tips, no spam.</p>
              <form onSubmit={(e) => { e.preventDefault(); alert("Subscribed! Check your inbox."); }} className="flex gap-2">
                <input type="email" placeholder="you@company.com" required className="flex-1 rounded-full border border-white/15 bg-white/5 px-3.5 py-[11px] text-[13px] text-cream" />
                <button type="submit" className="rounded-full bg-lime px-4 py-[11px] text-[13px] font-medium text-ink">Join</button>
              </form>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-5 border-t border-white/[.08] pt-[30px] text-xs text-cream/55">
            <span>© 2026 ZoFlowX · A Certified Zoho Partner · All rights reserved.</span>
            <div className="flex gap-3.5">
              {[["LinkedIn", "in"], ["Twitter", "𝕏"], ["YouTube", "▶"]].map(([label, icon]) => (
                <a key={label} href="#" aria-label={label} className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 transition-all duration-200 hover:border-red-500 hover:bg-red-500 hover:text-ink">
                  {icon}
                </a>
              ))}
            </div>
            <span>
              <a href="#">Privacy</a> · <a href="#">Terms</a>
            </span>
          </div>
        </div>
      </footer>
    </main>
  );
}

/* ============================================================
   Small form helpers (kept in-file)
   ============================================================ */
const inputClass =
  "w-full rounded-xl border border-ink/15 bg-white px-4 py-3.5 text-[15px] text-ink transition focus:border-ink focus:shadow-[0_0_0_3px_rgba(217,247,92,.4)] focus:outline-none";

function FieldLabel({ children }) {
  return <label className="mb-1.5 block text-[10px] uppercase tracking-[0.1em] text-muted">{children}</label>;
}

function Field({ label, ...props }) {
  return (
    <div>
      <FieldLabel>{label}</FieldLabel>
      <input className={inputClass} {...props} />
    </div>
  );
}
