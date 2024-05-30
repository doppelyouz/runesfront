import { client } from "../utils/services/fetchClient";
import { backendDomain } from "../constants/constants";

export const requestPayout = (userId, amount, address,sign) => {
    return client.post('/request_payout', {userId:userId, amount:amount, address:address, sign:sign});
  };