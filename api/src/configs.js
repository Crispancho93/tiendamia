import { config } from "dotenv";

const envFile =
  process.env.NODE_ENV == "production"
    ? ".env.production"
    : ".env.development";

config({ path: envFile });

export const PORT = process.env.PORT || 3000;
