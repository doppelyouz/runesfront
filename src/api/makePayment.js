import { client } from "../utils/services/fetchClient";


export const makePayment = (user_id, amount,currency) => {
    return client.post('/make_payment', {userId:user_id, amount:amount, currency:currency});
  };