import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import logo from "../../assets/logo.webp";

/**
 * Fixed brand mark behind page content. Hidden while the page opener/hero
 * is on screen, then fades in from the second section onward.
 */
const BackgroundWatermark = () => {
  const { pathname } = useLocation();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const opener = document.querySelector("[data-page-opener]");
    if (!opener) {
      setVisible(true);
      return;
    }

    setVisible(false);
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(!entry.isIntersecting),
      { threshold: 0 },
    );
    observer.observe(opener);
    return () => observer.disconnect();
  }, [pathname]);

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none fixed inset-0 z-0 flex items-center justify-center overflow-hidden transition-opacity duration-500 ${
        visible ? "opacity-100" : "opacity-0"
      }`}
    >
      <img
        src={logo}
        alt=""
        width={480}
        height={386}
        decoding="async"
        draggable={false}
        className="w-[min(70vw,22rem)] max-w-none select-none opacity-[0.08] mix-blend-screen sm:w-[min(55vw,28rem)] sm:opacity-[0.09] lg:w-[min(45vw,32rem)]"
      />
    </div>
  );
};

export default BackgroundWatermark;
