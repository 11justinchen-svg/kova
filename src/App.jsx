import { useEffect, useRef, useState } from "react";

// CONCEPT: An acid archive interrupted by empty garment contact sheets.
// INTERACTION MODEL: combined scroll-driven + click-driven
// TRIGGER: viewport entry, scroll position, navigation and commerce actions
// STATES: impact, index, collection, construction, signup
// TRANSITION: hard field changes, clipped type, tile reveals and decisive button feedback
// REDUCED MOTION: all content is visible in its final composed state; loops and reveals stop

const products = [
  { code: "KVA-001", name: "Cut 01 Tee", note: "Heavy cotton / box cut", size: "wide" },
  { code: "KVA-002", name: "Index Jacket", note: "Layer shell / straight fit", size: "tall" },
  { code: "KVA-003", name: "Faultline Trouser", note: "Panel leg / adjustable hem", size: "small" },
  { code: "KVA-004", name: "Fold Carry", note: "Soft structure / daily volume", size: "medium" },
];

function Arrow({ direction = "right" }) {
  const rotation = direction === "down" ? 90 : 0;
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="size-5 shrink-0"
      style={{ transform: `rotate(${rotation}deg)` }}
    >
      <path d="M4 12h15M13 6l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}

function MenuIcon({ open }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="size-6">
      {open ? (
        <path d="M5 5l14 14M19 5L5 19" fill="none" stroke="currentColor" strokeWidth="1.8" />
      ) : (
        <path d="M3 7h18M3 17h18" fill="none" stroke="currentColor" strokeWidth="1.8" />
      )}
    </svg>
  );
}

function ImageSlot({ label, index, className = "" }) {
  return (
    <div className={`image-slot ${className}`} role="img" aria-label={`${label}; image placeholder`}>
      <span className="image-slot__index">{String(index).padStart(2, "0")}</span>
      <span className="image-slot__label">IMAGE PENDING</span>
      <span className="image-slot__cross" aria-hidden="true" />
    </div>
  );
}

function ProductCard({ product, index, onAdd }) {
  return (
    <article className={`product product--${product.size}`} data-reveal style={{ "--reveal-delay": `${index * 70}ms` }}>
      <a href={`#${product.code}`} className="product__media" aria-label={`View ${product.name}`}>
        <ImageSlot label={product.name} index={index + 1} />
      </a>
      <div className="product__meta">
        <div>
          <p className="meta-label">{product.code}</p>
          <h3>{product.name}</h3>
          <p className="product__note">{product.note}</p>
        </div>
        <div className="product__action">
          <p className="product__price">$100</p>
          <button type="button" className="add-button" onClick={() => onAdd(product)}>
            Add to bag
            <Arrow />
          </button>
        </div>
      </div>
    </article>
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [bagCount, setBagCount] = useState(0);
  const [lastAdded, setLastAdded] = useState("");
  const [email, setEmail] = useState("");
  const [formState, setFormState] = useState({ type: "idle", message: "" });
  const noticeTimer = useRef(0);

  useEffect(() => {
    const elements = document.querySelectorAll("[data-reveal]");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reducedMotion) {
      elements.forEach((element) => element.classList.add("is-visible"));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 },
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  useEffect(() => () => window.clearTimeout(noticeTimer.current), []);

  const addToBag = (product) => {
    setBagCount((count) => count + 1);
    setLastAdded(`${product.name} added to bag.`);
    window.clearTimeout(noticeTimer.current);
    noticeTimer.current = window.setTimeout(() => setLastAdded(""), 2600);
  };

  const submitEmail = (event) => {
    event.preventDefault();
    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    if (!isValid) {
      setFormState({ type: "error", message: "Enter a valid email address." });
      return;
    }

    setFormState({ type: "success", message: "You are on the Kova drop list." });
    setEmail("");
  };

  return (
    <div className="site-shell">
      <div className="scroll-progress" aria-hidden="true" />

      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Kova home">
          KOVA
        </a>

        <nav className="desktop-nav" aria-label="Primary navigation">
          <a href="#drop">Drop 01</a>
          <a href="#construction">Construction</a>
          <a href="#index">Index</a>
        </nav>

        <div className="header-actions">
          <button type="button" className="bag-button" aria-label={`Bag with ${bagCount} items`}>
            Bag <span>[{String(bagCount).padStart(2, "0")}]</span>
          </button>
          <button
            type="button"
            className="menu-button"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <MenuIcon open={menuOpen} />
          </button>
        </div>
      </header>

      <div id="mobile-menu" className={`mobile-menu ${menuOpen ? "is-open" : ""}`} aria-hidden={!menuOpen}>
        {["drop", "construction", "index"].map((item, index) => (
          <a key={item} href={`#${item}`} onClick={() => setMenuOpen(false)} tabIndex={menuOpen ? 0 : -1}>
            <span>0{index + 1}</span>
            {item}
          </a>
        ))}
      </div>

      <main>
        <section id="top" className="hero min-h-[100dvh]" aria-labelledby="hero-title">
          <div className="hero__rail hero__rail--left" aria-hidden="true">
            <span>KVA / 01</span>
            <span>LOS ANGELES</span>
            <span>2026</span>
          </div>

          <div className="hero__slot-wrap" data-reveal>
            <ImageSlot label="Kova campaign hero" index={0} className="hero__slot" />
          </div>

          <div className="hero__copy" data-reveal>
            <p className="meta-label">Independent uniform / Drop 01</p>
            <h2>Cut for movement.<br />Built for repetition.</h2>
            <a className="primary-link" href="#drop">
              Shop the first drop
              <Arrow direction="down" />
            </a>
          </div>

          <h1 id="hero-title" className="hero__title" aria-label="Kova">
            KOVA
          </h1>

          <div className="hero__counter" aria-hidden="true">
            <span>NO.</span>
            <strong>001</strong>
          </div>
        </section>

        <section className="ticker" aria-label="Kova collection announcement">
          <div className="ticker__track">
            {[0, 1].map((repeat) => (
              <div className="ticker__content" key={repeat} aria-hidden={repeat === 1}>
                <span>DROP 01</span><i />
                <span>CUT FOR FRICTION</span><i />
                <span>ALL PIECES $100</span><i />
                <span>KOVA UNIFORM</span><i />
              </div>
            ))}
          </div>
        </section>

        <section id="index" className="manifesto section-pad">
          <div className="manifesto__index" data-reveal>
            <p className="meta-label">Field note / 001</p>
            <p>
              Kova makes clothes for the space between leaving and arriving. Direct shapes. Useful volume.
              Nothing added without a reason.
            </p>
          </div>

          <div className="manifesto__statement" data-reveal>
            <span>FORM</span>
            <span>FOLLOWS</span>
            <span className="manifesto__accent">FRICTION</span>
          </div>

          <div className="manifesto__spec" data-reveal>
            <p>01 / MATERIAL</p>
            <p>02 / MOVEMENT</p>
            <p>03 / REPEAT</p>
          </div>
        </section>

        <section id="drop" className="collection section-pad" aria-labelledby="collection-title">
          <header className="section-heading" data-reveal>
            <div>
              <p className="meta-label">Available forms / Four objects</p>
              <h2 id="collection-title">DROP 01</h2>
            </div>
            <p className="section-heading__note">Image slots are reserved for final campaign and product photography.</p>
          </header>

          <div className="product-grid">
            {products.map((product, index) => (
              <ProductCard key={product.code} product={product} index={index} onAdd={addToBag} />
            ))}
          </div>
        </section>

        <section id="construction" className="construction" aria-labelledby="construction-title">
          <div className="construction__copy section-pad" data-reveal>
            <p className="meta-label">Construction note / 01</p>
            <h2 id="construction-title">THE GARMENT<br />IS THE<br />GRAPHIC.</h2>
            <p>
              Shape comes first. Seams stay visible. Fasteners are placed where the hand expects them.
              Every piece is designed to be worn hard, layered often, and kept in motion.
            </p>
            <a className="secondary-link" href="#drop">
              View the uniform <Arrow />
            </a>
          </div>

          <div className="construction__visual" data-reveal>
            <ImageSlot label="Kova garment construction detail" index={5} />
            <div className="construction__measure" aria-hidden="true">
              <span>420 MM</span>
              <span>680 MM</span>
            </div>
          </div>
        </section>

        <section className="newsletter section-pad" aria-labelledby="newsletter-title">
          <div data-reveal>
            <p className="meta-label">Drop transmission / No weekly noise</p>
            <h2 id="newsletter-title">NO FEED.<br />JUST DROPS.</h2>
          </div>

          <form className="signup-form" onSubmit={submitEmail} noValidate data-reveal>
            <label htmlFor="email">Email address</label>
            <div className="signup-form__control">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="name@domain.com"
                value={email}
                aria-describedby="email-helper email-status"
                aria-invalid={formState.type === "error"}
                onChange={(event) => {
                  setEmail(event.target.value);
                  if (formState.type !== "idle") setFormState({ type: "idle", message: "" });
                }}
              />
              <button type="submit" aria-label="Join the Kova drop list"><Arrow /></button>
            </div>
            <p id="email-helper" className="form-helper">Release dates, restocks, and nothing else.</p>
            <p id="email-status" className={`form-status form-status--${formState.type}`} role="status">
              {formState.message}
            </p>
          </form>
        </section>
      </main>

      <footer className="site-footer section-pad">
        <a className="footer-mark" href="#top">KOVA</a>
        <div className="footer-links">
          <a href="#drop">Shop</a>
          <a href="#construction">About</a>
          <a href="mailto:studio@kova.example">Contact</a>
        </div>
        <div className="footer-meta">
          <span>Independent clothing</span>
          <span>Los Angeles / 2026</span>
          <span>All rights reserved</span>
        </div>
      </footer>

      <div className={`bag-notice ${lastAdded ? "is-visible" : ""}`} role="status" aria-live="polite">
        {lastAdded}
      </div>
    </div>
  );
}
