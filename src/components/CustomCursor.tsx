import { useEffect, useState } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
} from "motion/react";

const CustomCursor = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [cursorText, setCursorText] = useState("");
  const [cursorMode, setCursorMode] = useState("default");
  const [isVisible, setIsVisible] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springConfig = {
    damping: 25,
    stiffness: 300,
    mass: 0.5,
  };

  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);
  const hoverSize =
    cursorMode === "view" ? 94 : cursorMode === "click" ? 70 : 82;

  useEffect(() => {
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (!finePointer.matches || reducedMotion.matches) return;

    document.body.dataset.customCursor = "true";

    const handlePointerMove = (event: PointerEvent) => {
      if (event.pointerType !== "mouse") return;
      mouseX.set(event.clientX);
      mouseY.set(event.clientY);
      setIsVisible(true);
    };

    const handlePointerOver = (event: PointerEvent) => {
      if (!(event.target instanceof Element)) return;

      const interactive = event.target.closest<HTMLElement>(
        "[data-cursor], a[href], button, [role='button'], img, video",
      );

      if (interactive) {
        setIsHovering(true);
        const explicitMode = interactive.dataset.cursor;
        const mode =
          explicitMode ||
          (interactive.matches("img, video")
            ? "view"
            : interactive.matches("button, [role='button']")
              ? "click"
              : "open");
        setCursorMode(mode);
        setCursorText(
          interactive.dataset.cursorText ||
            (mode === "view" ? "VIEW" : mode === "click" ? "CLICK" : "OPEN"),
        );
      }
    };

    const handlePointerOut = (event: PointerEvent) => {
      if (!(event.target instanceof Element)) return;
      const related =
        event.relatedTarget instanceof Element ? event.relatedTarget : null;

      const previous = event.target.closest(
        "[data-cursor], a[href], button, [role='button'], img, video",
      );
      const next = related?.closest(
        "[data-cursor], a[href], button, [role='button'], img, video",
      );

      if (previous && previous !== next) {
        setIsHovering(false);
        setCursorText("");
        setCursorMode("default");
      }
    };

    const handlePointerLeave = () => setIsVisible(false);
    const handlePointerEnter = () => setIsVisible(true);

    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("pointerleave", handlePointerLeave);
    window.addEventListener("pointerenter", handlePointerEnter);
    document.addEventListener("pointerover", handlePointerOver);
    document.addEventListener("pointerout", handlePointerOut);

    return () => {
      delete document.body.dataset.customCursor;
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerleave", handlePointerLeave);
      window.removeEventListener("pointerenter", handlePointerEnter);
      document.removeEventListener("pointerover", handlePointerOver);
      document.removeEventListener("pointerout", handlePointerOut);
    };
  }, [mouseX, mouseY]);

  return (
    <motion.div
      className="custom-cursor pointer-events-none fixed left-0 top-0 z-[9999]
                 hidden md:flex items-center justify-center
                 rounded-full bg-white text-black
                 mix-blend-difference"
      aria-hidden="true"
      data-mode={cursorMode}
      style={{
        x: cursorX,
        y: cursorY,
        width: isHovering ? hoverSize : 12,
        height: isHovering ? hoverSize : 12,
        marginLeft: isHovering ? -hoverSize / 2 : -6,
        marginTop: isHovering ? -hoverSize / 2 : -6,
        opacity: isVisible ? 1 : 0,
      }}
      transition={{
        width: { duration: 0.22 },
        height: { duration: 0.22 },
        marginLeft: { duration: 0.22 },
        marginTop: { duration: 0.22 },
        opacity: { duration: 0.16 },
      }}
    >
      {cursorText && (
        <span className="cursor-label text-[10px] font-semibold tracking-wider">
          {cursorText}
        </span>
      )}
    </motion.div>
  );
};

export default CustomCursor;