import type { ConfigurationOptions } from "typesense/lib/Typesense/Configuration";

const typesenseConfig: ConfigurationOptions = {
  nodes: [
    {
      host: process.env.NEXT_PUBLIC_TYPESENSE_URL?.split("://")[1].split(":")[0] || "",
      port: Number(process.env.NEXT_PUBLIC_TYPESENSE_URL?.split(":")[2]) || 443,
      protocol: process.env.NEXT_PUBLIC_TYPESENSE_URL?.split("://")[0] || "https",
    },
  ],
  apiKey: process.env.NEXT_PUBLIC_TYPESENSE_SEARCH_ONLY_API_KEY || "",
  connectionTimeoutSeconds: 2,
};

export { typesenseConfig };
