import { getDatabase } from "@netlify/database";
import type { Config, Context } from "@netlify/functions";

const getDeviceType = (request: Request) => {
  const userAgent = request.headers.get("user-agent") ?? "";

  if (!userAgent) return "unknown";
  if (/bot|crawler|spider|slurp|preview/i.test(userAgent)) return "bot";
  if (/ipad|tablet|kindle|silk|playbook|android(?!.*mobile)/i.test(userAgent)) return "tablet";
  if (/mobi|iphone|ipod|android/i.test(userAgent)) return "mobile";

  return "desktop";
};

export default async (request: Request, context: Context) => {
  const requestedLanguage = new URL(request.url).searchParams.get("lang");
  const language = requestedLanguage === "es" ? "es" : "en";
  const countryCode = context.geo.country.code;
  const countryName = context.geo.country.name;
  const deviceType = getDeviceType(request);

  try {
    const database = getDatabase();

    await database.sql`
      CREATE TABLE IF NOT EXISTS donate_clicks (
        clicked_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
        language TEXT NOT NULL CHECK (language IN ('en', 'es')),
        country_code TEXT,
        country_name TEXT,
        device_type TEXT
      )
    `;

    await database.sql`
      INSERT INTO donate_clicks (clicked_at, language, country_code, country_name, device_type)
      VALUES (NOW(), ${language}, ${countryCode}, ${countryName}, ${deviceType})
    `;
  } catch (error) {
    console.error("Failed to record donate-button click", error);
  }

  return new Response(null, {
    status: 302,
    headers: {
      Location: "https://fundacionproyectodelamano.org/donate",
      "Cache-Control": "no-store",
    },
  });
};

export const config: Config = {
  path: "/donate-go",
  method: "GET",
};
