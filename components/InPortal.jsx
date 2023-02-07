import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

export default function InPortal({ children }) {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => setHasMounted(true), []);

  if (!hasMounted) return null;

  return createPortal(
    children,
    document.querySelector("#portal-container")
  );
}
