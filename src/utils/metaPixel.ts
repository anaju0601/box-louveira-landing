declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

export const trackLead = () => {
  if (typeof window !== "undefined" && window.fbq) {
    window.fbq("track", "Lead");
  }
};

export const trackInitiateCheckout = () => {
  if (typeof window !== "undefined" && window.fbq) {
    window.fbq("track", "InitiateCheckout");
  }
};