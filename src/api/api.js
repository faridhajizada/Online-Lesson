import { createApi, fetchBaseQuery, retry } from "@reduxjs/toolkit/query/react";

export const baseQuery = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8089" }),
  endpoints: () => ({}),
  prepareHeaders: (headers) => {
    if (token) {
      headers.set("authorization", `Bearer ${localStorage.getItem("token")}`);
    }
    return headers;
  },
});

const baseQueryWithRetry = retry(baseQuery, { maxRetries: 1 });

export const api = createApi({
  reducerPath: "splitApi",
  baseQuery: baseQueryWithRetry,
  refetchOnMountOrArgChange: true,
  endpoints: () => ({}),
});
