import { createPortal } from "react-dom";

export default function Loader() {
  return createPortal(
    <div
      role="status"
      aria-label="Loading"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        display: "grid",
        placeItems: "center",
        backgroundColor: "#fff",
      }}
    >
      <svg aria-hidden="true" width="64" height="64" viewBox="0 0 48 48" fill="none">
        <circle cx="24" cy="24" r="20" stroke="#d9d9d9" strokeWidth="4" />
        <circle
          cx="24"
          cy="24"
          r="20"
          stroke="#000000C9"
          strokeWidth="4"
          strokeLinecap="round"
          strokeDasharray="78 48"
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="0 24 24"
            to="360 24 24"
            dur="800ms"
            repeatCount="indefinite"
          />
        </circle>
      </svg>
    </div>,
    document.body,
  );
}
