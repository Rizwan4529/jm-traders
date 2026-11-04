import logo from "../../assets/logo.webp";

/**
 * Fixed, low-opacity brand mark centered in the viewport.
 * Sits behind page content; `mix-blend-screen` drops the logo's black plate
 * while keeping the gold/blue colour.
 */
const BackgroundWatermark = () => {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 flex items-center justify-center overflow-hidden"
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
