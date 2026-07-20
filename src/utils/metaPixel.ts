declare global {
  interface Window {
    fbq?: (
      action: string,
      event: string,
      parameters?: Record<string, unknown>,
      options?: { eventID?: string }
    ) => void;
  }
}

function createEventId() {
  return crypto.randomUUID();
}

async function sendServerEvent(
  eventName: "Lead" | "InitiateCheckout",
  eventId: string
) {
  try {
    await fetch("/api/meta-event", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        event_name: eventName,
        event_id: eventId,
        event_source_url: window.location.href,
        user_data: {},
        custom_data: {},
      }),
    });
  } catch (error) {
    console.error("Erro ao enviar evento para a Conversions API:", error);
  }
}

export async function trackLead() {
  const eventId = createEventId();

  window.fbq?.(
    "track",
    "Lead",
    {},
    {
      eventID: eventId,
    }
  );

  await Promise.race([
    sendServerEvent("Lead", eventId),
    new Promise((resolve) => setTimeout(resolve, 300)),
  ]);
}

export async function trackInitiateCheckout() {
  const eventId = createEventId();

  window.fbq?.(
    "track",
    "InitiateCheckout",
    {},
    {
      eventID: eventId,
    }
  );

  await sendServerEvent("InitiateCheckout", eventId);
}