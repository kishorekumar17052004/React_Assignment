import { useEffect, useRef } from "react";

const  Task2 = ()=> {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);
  const sectionContent =
    "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua nunc "
      .repeat(50)
      .trim();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div className="min-h-screen bg-slate-100 text-slate-800">
      <nav className="sticky top-0 z-10 flex justify-center gap-3 bg-white/95 px-4 py-4 shadow">
        <button
          onClick={() => scrollToSection(homeRef)}
          className="rounded bg-teal-600 px-5 py-2 font-medium text-white transition hover:bg-teal-700"
        >
          Home
        </button>
        <button
          onClick={() => scrollToSection(aboutRef)}
          className="rounded bg-teal-600 px-5 py-2 font-medium text-white transition hover:bg-teal-700"
        >
          About
        </button>
        <button
          onClick={() => scrollToSection(contactRef)}
          className="rounded bg-teal-600 px-5 py-2 font-medium text-white transition hover:bg-teal-700"
        >
          Contact
        </button>
      </nav>

      <section ref={homeRef} className="mx-auto max-w-5xl px-6 py-16">
        <h1 className="mb-6 text-4xl font-bold text-teal-700">Home</h1>
        <p className="rounded bg-white p-6 leading-8 text-slate-700 shadow">{sectionContent}</p>
      </section>

      <section ref={aboutRef} className="mx-auto max-w-5xl px-6 py-16">
        <h1 className="mb-6 text-4xl font-bold text-teal-700">About</h1>
        <p className="rounded bg-white p-6 leading-8 text-slate-700 shadow">{sectionContent}</p>
      </section>

      <section ref={contactRef} className="mx-auto max-w-5xl px-6 py-16">
        <h1 className="mb-6 text-4xl font-bold text-teal-700">Contact</h1>
        <p className="rounded bg-white p-6 leading-8 text-slate-700 shadow">{sectionContent}</p>
      </section>
    </div>
  );
}

export default Task2;
