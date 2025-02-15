import { ApolloClient, InMemoryCache } from "@apollo/client";
import { API_URL } from "@/utils/config";
const client = new ApolloClient({
  uri: API_URL,
  cache: new InMemoryCache(), // ใช้ caching เพื่อปรับปรุง performance
});

export default client;
