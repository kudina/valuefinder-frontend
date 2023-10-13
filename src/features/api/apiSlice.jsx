// Import the RTK Query methods from the React-specific entry point
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { useSelector } from "react-redux";





// Define our single API slice object
export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    // http://localhost:5000
    //https://rich-gold-goldfish.cyclic.app
    baseUrl: "http://localhost:5000",
    prepareHeaders: (headers) => {
      headers.set(
        "Authorization",
        `Bearer ${localStorage.getItem("accessToken")}`
      );
    },
  }),
  tagTypes: ["User", "CurrentUser"],
  endpoints: (builder) => ({
    
    register: builder.mutation({
      query: (user) => ({
        url: "/user/api/v1/register",
        method: "POST",
        body: user,
      }),
    }),
    login: builder.mutation({
      query: (user) => ({
        url: "/user/api/v1/login",
        method: "POST",
        body: user,
      }),
      invalidatesTags: ["User"],
    }),
    getCurrentUser: builder.query({
      query: () => ({
        url: "/user/api/v1/current-user",
        keepUnusedDataFor: 0.0001
      }),
      invalidatesTags: ["CurrentUser"],
    }),
    getPosts: builder.query({
      query: () => ({
        url: "/post/api/v1/get-all-post",
      }),
    }),
    getPostsById: builder.query({
      query: () => ({
        url: "/post/api/v1/get-post-by-id",
      }),
    }),
    createJob: builder.mutation({
      query: (postpayload) => ({
        url: "/post/api/v1/create-post",
        method: "POST",
        body: postpayload,
      }),
    }),
   

    applyJob: builder.mutation({
      query: (id) => ({
        url: "/post/api/v1/update-post",
        method: "POST",
        body: id,
      }),
    }),

    updateJobpost: builder.mutation({
      query: (payload) => ({
        url: "/post/api/v1/update-job-post",
        method: "POST",
        body: payload,
      }),
    }),

    updateUser: builder.mutation({
      query: (payload) => ({
        url: "/user/api/v1/update-current-user",
        method: "POST",
        body: payload,
      }),
      invalidatesTags: ["User"],
    }),

    contractRquest: builder.mutation({
      query: (payload) => ({
        url: "/contract/api/v1/sendContractRequest",
        method: "POST",
        body: payload,
      }),
      invalidatesTags: ["User"],
    }),

    getContracts: builder.query({
      query: () => ({
        url: "/contract/api/v1/allcontracts",
      }),
    }),

    updateContract: builder.mutation({
      query: (payload) => ({
        url: "/contract/api/v1/updateContract",
        method: "POST",
        body: payload,
      }),
    }),

    
  }),
});

export const {
  useLoginMutation,
  useRegisterMutation,
  useGetCurrentUserQuery,
  useGetPostsQuery,
  useCreateJobMutation,
  useApplyJobMutation,
  useGetPostsByIdQuery,
  useUpdateUserMutation,
  useUpdateJobpostMutation,
  useContractRquestMutation,
  useGetContractsQuery,
  useUpdateContractMutation
  
} = apiSlice;
