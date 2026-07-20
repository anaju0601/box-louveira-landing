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
  console.log("[Meta] sendServerEvent iniciado:", eventName);

  try {
    const response = await fetch("/api/meta-event", {
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

    console.log("[Meta] Status da API:", response.status);

    const data = await response.json();

    console.log("[Meta] Resposta da API:", data);
  } catch (error) {
    console.error("[Meta] Erro ao enviar evento:", error);
  }
}

export async function trackLead() {
  console.log("[Meta] trackLead executou");

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
  console.log("[Meta] trackInitiateCheckout executou");

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