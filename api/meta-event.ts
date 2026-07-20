import type { VercelRequest, VercelResponse } from "@vercel/node";

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({
      error: "Method not allowed",
    });
  }

  const {
    event_name,
    event_id,
    fbp,
    fbc,
    event_source_url,
  } = req.body || {};

  if (event_name !== "Lead") {
    return res.status(400).json({
      error: "Only Lead is supported in this version.",
      received: event_name,
    });
  }

  const pixelId = process.env.META_PIXEL_ID;
  const accessToken = process.env.META_ACCESS_TOKEN;

  if (!pixelId || !accessToken) {
    return res.status(500).json({
      error: "META_PIXEL_ID or META_ACCESS_TOKEN not configured.",
    });
  }

  const payload = {
    data: [
      {
        event_name: "Lead",
        event_time: Math.floor(Date.now() / 1000),
        event_id, 
        action_source: "website",
        event_source_url,
        user_data: {
          client_user_agent: req.headers["user-agent"],

          ...(fbp && { fbp }),
          ...(fbc && { fbc }),
        },
      },
    ],
  };

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

    if (!response.ok) {
      return res.status(response.status).json(result);
    }

    return res.status(200).json(result);
  } catch (error) {
    console.error("Erro ao enviar evento para a Meta:", error);

    return res.status(500).json({
      error: "Internal server error.",
    });
  }
}