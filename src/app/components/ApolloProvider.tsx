"use client"; // บังคับให้เป็น Client Component

import { ApolloProvider } from "@apollo/client";
import client from "../../lib/apolloClient";

export default function ApolloClientProvider({ children }: { children: React.ReactNode }) {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
