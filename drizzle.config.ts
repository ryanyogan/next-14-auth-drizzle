import type { Config } from "drizzle-kit";

export default {
  schema: "./db/schema.ts",
  out: "./drizzle",
  driver: "turso",
  dbCredentials: {
    url: "libsql://locker-ryanyogan.turso.io",
    authToken:
      "eyJhbGciOiJFZERTQSIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3MDc5NTcxNDAsImlkIjoiYTRmMjQ1OTItY2I5OS0xMWVlLTg1MWMtZWFiNDFlZDRkYWM2In0.IZEeK-GMIhUeXzcJM7Ps7bHxdaSzw3-HOrUu8wKKgUhuz3PVlW2nDfn_NhxhSBuRfqB6wm2uySJMa4tIQtH1CQ",
  },
} satisfies Config;
