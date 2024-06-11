import { getAuthorization } from "@tawasal/node";

export const options = {
  headers: {
    // Authorization: `Bearer ${getAuthorization()}`,
    Authorization: `Fake 1234`,
    Accept: "application/json",
  },
};
