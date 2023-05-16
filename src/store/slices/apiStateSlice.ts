import { createApi, fetchBaseQuery, retry } from "@reduxjs/toolkit/query/react";
import { FetchArgs } from "@reduxjs/toolkit/dist/query/fetchBaseQuery";
import { HYDRATE } from "next-redux-wrapper";

import { apiBaseUrl } from "@/utils/constants";

/**
 * @description - API Slice of the global store.
 */
export const apiStateSlice = createApi({
  //The name of the rootstate.
  reducerPath: "apiState",
  //Setting the url. If we need another base url then create another apiStateSlice with createApi with different reducerPath.
  baseQuery: retry(
    async (args: string | FetchArgs, api, extraOptions) => {
      const result = await fetchBaseQuery({
        baseUrl: apiBaseUrl,
        prepareHeaders: async (headers) => {
          headers.set("Content-Type", "application/json");
          // Any other headers especially authorisation headers.
          return headers;
        },
      })(args, api, extraOptions);

      // remove re-tries if unauthorized, successive re-retries would be redundant.
      if (result.error?.status === 401 || result.error?.status === 404) {
        retry.fail(result.error);
      }

      return result;
    },
    {
      maxRetries: 2,
    }
  ),
  //Authorization:
  //This will make sure the server redux state is hydrated on each route in SSR.
  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === HYDRATE) {
      return action.payload[reducerPath];
    }
  },
  //endpoints is code splitted and will be injected at later point of time.
  endpoints: () => ({}),
});
