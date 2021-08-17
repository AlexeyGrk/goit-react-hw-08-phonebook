import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const contactsApi = createApi({
  reducerPath: "contactsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://611abeea22020a00175a426d.mockapi.io/api/v1/",
  }),
  tagTypes: ["Contacts"],
  endpoints: (builder) => ({
    getContacts: builder.query({
      query: () => `/contacts`,
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
        url: `/contacts/`,
        method: "POST",
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
