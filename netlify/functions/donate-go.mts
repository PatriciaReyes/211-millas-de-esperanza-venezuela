import { getDatabase } from "@netlify/database";
import type { Config } from "@netlify/functions";

export default async (request: Request) => {
  const requestedLanguage = new URL(request.url).searchParams.get("lang");
  const language = requestedLanguage === "es" ? "es" : "en";

  try {
    const database = getDatabase();

    await database.sql`
      CREATE TABLE IF NOT EXISTS donate_clicks (
        clicked_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
        language TEXT NOT NULL CHECK (language IN ('en', 'es'))
      )
    `;

    await database.sql`
      INSERT INTO donate_clicks (clicked_at, language)
      VALUES (NOW(), ${language})
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
