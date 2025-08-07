
import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: import.meta.env.VITE_SUPABASE_GRAPHQL_URL,
  cache: new InMemoryCache(),
  headers: {
    apikey: import.meta.env.VITE_SUPABASE_ANON_KEY,
    authorization: `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
  },
});

export default client;
