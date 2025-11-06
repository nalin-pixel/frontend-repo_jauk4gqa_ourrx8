import { CheckCircle2, Home, Building2, PenTool, Hammer, Store, Clock, ShieldCheck, Award, ImageIcon, BarChart2 } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

function Counter({ end, label, icon: Icon }) {
  const ref = useRef(null);
  const [value, setValue] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const duration = 1200;
            const start = performance.now();
            const animate = (t) => {
              const p = Math.min(1, (t - start) / duration);
              setValue(Math.floor(p * end));
              if (p < 1) requestAnimationFrame(animate);
            };
            requestAnimationFrame(animate);
            obs.disconnect();
          }
        });
      },
      { threshold: 0.4 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [end]);

  return (
    <div ref={ref} className="flex items-center gap-3 p-4 rounded-lg bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800">
      <Icon className="h-6 w-6 text-emerald-600" />
      <div>
        <div className="text-2xl font-bold text-neutral-900 dark:text-white">{value.toLocaleString()}+</div>
        <div className="text-sm text-neutral-600 dark:text-neutral-400">{label}</div>
      </div>
    </div>
  );
}

export function Story() {
  const milestones = [
    { year: 1981, text: 'Founded in Singapore as a family‑run contractor.' },
    { year: 1995, text: 'Expanded to commercial interiors and F&B kiosks.' },
    { year: 2008, text: 'In‑house carpentry and bespoke woodwork introduced.' },
    { year: 2016, text: 'ISO‑aligned quality and safety practices.' },
    { year: 2024, text: '400+ completed projects across SG.' },
  ];

  return (
    <section id="story" className="py-20 bg-neutral-50 dark:bg-neutral-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white">Our Story</h2>
        <p className="mt-3 text-neutral-700 dark:text-neutral-300 max-w-2xl">
          Over 40 years of hands‑on experience delivering reliable renovation and interior outfitting.
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-5">
          {milestones.map((m) => (
            <div key={m.year} className="p-5 rounded-xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800">
              <div className="text-emerald-600 font-semibold">{m.year}</div>
              <div className="mt-2 text-sm text-neutral-700 dark:text-neutral-300">{m.text}</div>
            </div>
          ))}
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          <Counter end={40} label="Years of Service" icon={Clock} />
          <Counter end={400} label="Projects Delivered" icon={BarChart2} />
          <Counter end={98} label="On‑time Delivery (%)" icon={ShieldCheck} />
        </div>
      </div>
    </section>
  );
}

export function Services() {
  const cards = [
    { title: 'Home Renovation', desc: 'Design‑build for HDB, condos and landed homes.', icon: Home },
    { title: 'Commercial Fit‑out', desc: 'Offices, retail, F&B, healthcare environments.', icon: Building2 },
    { title: 'Interior Design', desc: 'Concept to moodboards, materials and detailing.', icon: PenTool },
    { title: 'Bespoke Woodwork', desc: 'In‑house carpentry and cabinetry, solid craft.', icon: Hammer },
    { title: 'Kiosk & Booths', desc: 'Pop‑ups, mall kiosks, event and roadshow builds.', icon: Store },
  ];

  return (
    <section id="services" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white">Services</h2>
        <p className="mt-3 text-neutral-700 dark:text-neutral-300 max-w-2xl">Comprehensive solutions from design to handover, tailored for home and commercial spaces.</p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((c) => (
            <div key={c.title} className="group relative overflow-hidden rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-emerald-600/10 text-emerald-700 dark:text-emerald-300">
                  <c.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-neutral-900 dark:text-white">{c.title}</h3>
                  <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">{c.desc}</p>
                </div>
              </div>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-br from-emerald-500/5 to-transparent pointer-events-none" />
            </div>
          ))}
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {[{ t: 'Fast Delivery', i: Clock }, { t: 'Reliability', i: ShieldCheck }, { t: 'Quality Craft', i: Award }].map((v) => (
            <div key={v.t} className="flex items-start gap-3 p-5 rounded-xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800">
              <v.i className="h-5 w-5 text-emerald-600" />
              <div>
                <div className="font-medium text-neutral-900 dark:text-white">{v.t}</div>
                <div className="text-sm text-neutral-600 dark:text-neutral-400">We commit to schedules, transparent communication and stringent QA.</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Portfolio() {
  const images = [
    { src: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop', title: 'Modern Office Lobby', tag: 'Commercial' },
    { src: 'https://images.unsplash.com/photo-1718220268527-4477fd170775?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxPZmZpY2UlMjBMb2JieXxlbnwwfDB8fHwxNzYyNDI2ODM1fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80', title: 'Retail Boutique', tag: 'Retail' },
    { src: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?q=80&w=1200&auto=format&fit=crop', title: 'Cozy Living Room', tag: 'Residential' },
    { src: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1200&auto=format&fit=crop', title: 'Collaborative Workspace', tag: 'Commercial' },
    { src: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=80&w=1200&auto=format&fit=crop', title: 'Cafe Counter', tag: 'F&B' },
    { src: 'https://images.unsplash.com/photo-1718220268527-4477fd170775?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxPZmZpY2UlMjBMb2JieXxlbnwwfDB8fHwxNzYyNDI2ODM1fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80', title: 'Mall Kiosk', tag: 'Kiosk' },
  ];

  // Simple lightbox using dialog
  const openLightbox = (src, title) => {
    const dialog = document.getElementById('lightbox');
    const img = document.getElementById('lightbox-img');
    const caption = document.getElementById('lightbox-caption');
    if (dialog && img && caption) {
      img.src = src;
      caption.textContent = title;
      dialog.showModal();
    }
  };

  const closeLightbox = () => {
    const dialog = document.getElementById('lightbox');
    if (dialog) dialog.close();
  };

  return (
    <section id="portfolio" className="py-20 bg-neutral-50 dark:bg-neutral-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white">Portfolio</h2>
        <p className="mt-3 text-neutral-700 dark:text-neutral-300 max-w-2xl">
          A selection of interior builds across Singapore. Hover to see details, click to expand.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {images.map((img) => (
            <button
              key={img.src}
              onClick={() => openLightbox(img.src, img.title)}
              className="group relative overflow-hidden rounded-xl focus:outline-none focus-visible:ring ring-emerald-500"
            >
              <img src={img.src} alt={img.title} className="h-64 w-full object-cover" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity">
                <div>
                  <div className="text-white font-medium">{img.title}</div>
                  <div className="text-xs text-neutral-200">{img.tag}</div>
                </div>
                <ImageIcon className="h-5 w-5 text-white" />
              </div>
            </button>
          ))}
        </div>

        <dialog id="lightbox" className="rounded-xl p-0 backdrop:bg-black/60">
          <div className="relative">
            <img id="lightbox-img" src="" alt="Expanded work" className="max-h-[80vh] w-auto object-contain" />
            <button onClick={closeLightbox} className="absolute top-3 right-3 px-3 py-1 rounded-md bg-black/60 text-white text-sm">Close</button>
            <div id="lightbox-caption" className="p-3 text-sm text-neutral-800 dark:text-neutral-200" />
          </div>
        </dialog>
      </div>
    </section>
  );
}

export function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white">Contact Us</h2>
        <p className="mt-3 text-neutral-700 dark:text-neutral-300 max-w-2xl">Tell us about your project. We typically respond within one business day.</p>

        <div className="mt-10 grid gap-10 lg:grid-cols-2">
          <form className="space-y-4 p-6 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300">Name</label>
                <input required type="text" className="mt-1 w-full px-3 py-2 rounded-md border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100" placeholder="Your name" />
              </div>
              <div>
                <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300">Email</label>
                <input required type="email" className="mt-1 w-full px-3 py-2 rounded-md border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100" placeholder="you@example.com" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300">Phone</label>
              <input type="tel" className="mt-1 w-full px-3 py-2 rounded-md border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100" placeholder="+65 1234 5678" />
            </div>
            <div>
              <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300">Message</label>
              <textarea required rows={5} className="mt-1 w-full px-3 py-2 rounded-md border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100" placeholder="Project scope, timeline, budget..." />
            </div>
            <button type="submit" className="inline-flex items-center justify-center px-5 py-3 rounded-md bg-emerald-600 text-white font-medium shadow hover:bg-emerald-500 focus:outline-none focus-visible:ring ring-emerald-500">
              Send Enquiry
            </button>
            <p className="text-xs text-neutral-500">By sending, you consent to be contacted regarding your request.</p>
          </form>

          <div className="p-6 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800">
            <h3 className="font-semibold text-neutral-900 dark:text-white">Company Info</h3>
            <div className="mt-4 space-y-2 text-sm text-neutral-700 dark:text-neutral-300">
              <p>HRFC – Happy Renovation & Furniture Contractor</p>
              <p>Singapore • Since 1981</p>
              <p>Mon–Sat, 9am–6pm</p>
              <p>Email: hello@hrfc.sg</p>
              <p>Phone: +65 6123 4567</p>
            </div>
            <div className="mt-6">
              <h4 className="text-sm font-medium text-neutral-800 dark:text-neutral-200">Connect</h4>
              <div className="mt-2 flex gap-3">
                {['https://facebook.com', 'https://instagram.com', 'https://www.linkedin.com'].map((link) => (
                  <a key={link} href={link} target="_blank" rel="noreferrer" className="px-3 py-1 rounded-md border border-neutral-200 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 text-sm">
                    {new URL(link).hostname.replace('www.', '')}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="bg-neutral-950 text-neutral-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 grid gap-10 md:grid-cols-3">
        <div>
          <div className="text-white font-semibold">HRFC – Building Your Trust</div>
          <p className="mt-3 text-sm text-neutral-400">End‑to‑end renovation and interior outfitting for homes and businesses in Singapore.</p>
        </div>
        <div>
          <div className="text-white font-semibold">Services</div>
          <ul className="mt-3 space-y-2 text-sm">
            <li>Home Renovation</li>
            <li>Commercial Fit‑out</li>
            <li>Interior Design</li>
            <li>Bespoke Woodwork</li>
            <li>Kiosk & Booths</li>
          </ul>
        </div>
        <div>
          <div className="text-white font-semibold">Contact</div>
          <ul className="mt-3 space-y-2 text-sm">
            <li>Email: hello@hrfc.sg</li>
            <li>Phone: +65 6123 4567</li>
            <li>Hours: Mon–Sat, 9am–6pm</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 text-xs text-neutral-500 flex items-center justify-between">
          <span>© {new Date().getFullYear()} HRFC. All rights reserved.</span>
          <a href="#home" className="hover:text-neutral-300">Back to top</a>
        </div>
      </div>
    </footer>
  );
}
