import React, { useRef, useEffect } from "react";

/**
 * Hook that runs callback if there is a click or keypress (ACTION) outside of the passed ref
 */
function useOutsideAlerter(ref, callback, active) {
  useEffect(() => {
    if (active) {
      /**
       * Callback if ACTION on outside of element
       */
      function handleActionOutside(event) {
        const actionOutside = !ref.current.contains(event.target);
        const actionOnLink = event.target.hasAttribute("href");

        if (ref.current && actionOutside) {
          callback();
        } else if (ref.current && actionOnLink) {
          setTimeout(callback, 150);
        }
      }

      // Bind the event listener
      document.addEventListener("mousedown", handleActionOutside);
      document.addEventListener("keydown", handleActionOutside);

      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleActionOutside);
        document.removeEventListener("keydown", handleActionOutside);
      };
    }
  }, [ref, callback, active]);
}

/**
 * Component that alerts if you click outside of it
 */
export default function OutsideAlerter({
  children,
  callback = () => {},
  active,
  className = "",
}) {
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef, callback, active);

  return (
    <div className={className} ref={wrapperRef}>
      {children}
    </div>
  );
}
