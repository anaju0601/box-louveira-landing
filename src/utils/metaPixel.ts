declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

export function trackLead() {
  // Pixel (Browser)
  window.fbq?.("track", "Lead");

  // Conversions API (Servidor)
  fetch("/api/meta-event", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      event_name: "Lead",
    }),
  }).catch((error) => {
    console.error("Meta CAPI:", error);
  });
}

export function trackInitiateCheckout() {
  window.fbq?.("track", "InitiateCheckout");
}