import { client } from "../utils/services/fetchClient";

export const buyManafunc = (userId, sign) => {
  return client.post('/buy_mana', {userId:userId, sign:sign});
};
