declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

function getCookie(name: string): string | undefined {
  return document.cookie
    .split("; ")
    .find((row) => row.startsWith(`${name}=`))
    ?.split("=")[1];
}

function generateEventId() {
  return `lead_${Date.now()}_${Math.random().toString(36).slice(2, 10)}`;
}

export async function trackLead() {
  // Gera um ID único para deduplicação
  const eventId = generateEventId();

  // Meta Pixel (Browser)
  window.fbq?.(
    "track",
    "Lead",
    {},
    {
      eventID: eventId,
    }
  );

  // Cookies do Meta Pixel
  const fbp = getCookie("_fbp");
  const fbc = getCookie("_fbc");

  // Meta Conversions API (Servidor)
  try {
    await fetch("/api/meta-event", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        event_name: "Lead",
        event_id: eventId,
        fbp,
        fbc,
        event_source_url: window.location.href,
      }),
    });
  } catch (error) {
    console.error("Erro ao enviar evento para a Meta:", error);
  }
}

export function trackInitiateCheckout() {
  window.fbq?.("track", "InitiateCheckout");
}