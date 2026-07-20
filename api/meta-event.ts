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

  try {
    const {
      event_name,
      event_id,
      event_source_url,
      user_data = {},
      custom_data = {},
    } = req.body;

    if (
      event_name !== "Lead" &&
      event_name !== "InitiateCheckout"
    ) {
      return res.status(400).json({
        error: "Invalid event.",
      });
    }

    const pixelId = process.env.META_PIXEL_ID;
    const accessToken = process.env.META_ACCESS_TOKEN;

    if (!pixelId || !accessToken) {
      return res.status(500).json({
        error: "Meta environment variables not configured.",
      });
    }

    const response = await fetch(
      `https://graph.facebook.com/v23.0/${pixelId}/events?access_token=${accessToken}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          data: [
            {
              event_name,
              event_time: Math.floor(Date.now() / 1000),
              event_id,
              action_source: "website",
              event_source_url,
              user_data: {
                ...user_data,
                client_user_agent: req.headers["user-agent"],
              },
              custom_data,
            },
          ],
        }),
      }
    );

    const result = await response.json();

    if (!response.ok) {
      console.error("Meta Graph API Error:", result);

      return res.status(response.status).json(result);
    }

    return res.status(200).json(result);
  } catch (error) {
    console.error("Meta CAPI Error:", error);

    return res.status(500).json({
      error: "Failed to send event.",
    });
  }
}