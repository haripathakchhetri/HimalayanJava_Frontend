import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../app/constants/spi_urls";

export const orderApi = createApi({
  reducerPath: 'orderApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${baseUrl}/orders`
  }),

  endpoints: (builder) => ({

    addOrder: builder.mutation({
      query: (q) => ({
        url: '/',
        body: q.body,
        headers: {
          Authorization: q.token
        },
        method: 'POST'
      }),
      invalidatesTags: ['Orders']
    })



  })
});

export const { useAddOrderMutation } = orderApi