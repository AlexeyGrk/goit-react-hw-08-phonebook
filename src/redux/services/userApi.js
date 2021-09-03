import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const userApi = createApi({
  reducerPath: "userApi",
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
  tagTypes: ["User"],
  endpoints: (builder) => ({
    addUser: builder.query({
      query: (user) => ({
        url: `/users/signup`,
        method: "POST",
        body: user,
      }),

      providesTags: ["User"],
    }),
    loginUser: builder.mutation({
      query: (user) => ({
        url: `/users/login`,
        method: "POST",
        body: user,
      }),

      invalidatesTags: ["User"],
    }),
    logoutUser: builder.mutation({
      query: (user) => ({
        url: `/users/logout`,
        method: "POST",
        body: user,
      }),

      invalidatesTags: ["User"],
    }),

    // deleteContact: builder.mutation({
    //   query: (todoId) => ({
    //     url: `/contacts/${todoId}`,
    //     method: "DELETE",
    //   }),
    //   invalidatesTags: [{ type: "Contacts" }],
    // }),
    // addContact: builder.mutation({
    //   query: (newContact) => ({
    //     url: `/contacts/`,
    //     method: "POST",
    //     body: newContact,
    //   }),

    //   invalidatesTags: [{ type: "Contacts" }],
    // }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useAddUserQuery, useLoginUserMutation, useLogoutUserMutation } =
  userApi;
