import { QueryCache, QueryClient } from "@tanstack/react-query";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
    },
  },
  queryCache: new QueryCache({
    onError: (error: any, query) => {
      // 🎉 only show error if we already have data in the cache
      // which indicates a failed background update
      if (error.status === 401) {
        localStorage.clear();
        sessionStorage.clear();
        globalThis.location.reload();
      }
      if (query.state.data !== undefined) {
        console.error(`Something went wrong: ${error.message}`);
      }
    },
  }),
});
