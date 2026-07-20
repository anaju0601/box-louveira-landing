import type { VercelRequest, VercelResponse } from "@vercel/node";

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  console.log("===== META EVENT =====");
  console.log("Method:", req.method);
  console.log("Headers:", req.headers);
  console.log("Body:", req.body);

  if (req.method !== "POST") {
    console.log("❌ Método inválido");

    return res.status(405).json({
      error: "Method not allowed",
    });
  }

  const { event_name } = req.body || {};

  console.log("Event Name:", event_name);

  if (event_name !== "Lead") {
    console.log("❌ Evento inválido");

    return res.status(400).json({
      error: "Only Lead is supported in this version.",
      received: event_name,
    });
  }

  const pixelId = process.env.META_PIXEL_ID;
  const accessToken = process.env.META_ACCESS_TOKEN;

  console.log("Pixel ID:", pixelId ? "OK" : "MISSING");
  console.log("Access Token:", accessToken ? "OK" : "MISSING");

  if (!pixelId || !accessToken) {
    console.log("❌ Variáveis de ambiente ausentes");

    return res.status(500).json({
      error: "META_PIXEL_ID or META_ACCESS_TOKEN not configured.",
    });
  }

  const payload = {
    data: [
      {
        event_name: "Lead",
        event_time: Math.floor(Date.now() / 1000),
        action_source: "website",
      },
    ],
  };

  console.log("Payload enviado para Meta:");
  console.log(JSON.stringify(payload, null, 2));

  try {
    const response = await fetch(
      `https://graph.facebook.com/v23.0/${pixelId}/events?access_token=${accessToken}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      }
    );

    const result = await response.json();

    console.log("Status Meta:", response.status);
    console.log("Resposta Meta:");
    console.log(result);

    if (!response.ok) {
      console.error("❌ Erro retornado pela Meta");

      return res.status(response.status).json(result);
    }

    console.log("✅ Evento enviado com sucesso");

    return res.status(200).json(result);
  } catch (error) {
    console.error("❌ Erro interno:");
    console.error(error);

    return res.status(500).json({
      error: "Internal server error.",
    });
  }
}