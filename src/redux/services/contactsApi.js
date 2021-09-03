import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const contactsApi = createApi({
  reducerPath: "contactsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://connections-api.herokuapp.com",
    prepareHeaders: (headers, { getState }) => {
      const token = getState().setCredentials?.token;
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ["Contacts"],
  endpoints: (builder, headers) => ({
    getContacts: builder.query({
      query: () => `/contacts`,

      headers,

      providesTags: ["Contacts"],
    }),
    deleteContact: builder.mutation({
      query: (todoId) => ({
        url: `/contacts/${todoId}`,
        method: "DELETE",
      }),
      invalidatesTags: [{ type: "Contacts" }],
    }),
    addContact: builder.mutation({
      query: (newContact) => ({
        url: `/contacts`,
        method: "POST",
        headers,
        body: newContact,
      }),

      invalidatesTags: [{ type: "Contacts" }],
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetContactsQuery,
  useDeleteContactMutation,
  useAddContactMutation,
} = contactsApi;
