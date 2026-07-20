declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

export function trackLead() {
  window.fbq?.("track", "Lead");
}

export function trackInitiateCheckout() {
  window.fbq?.("track", "InitiateCheckout");
}