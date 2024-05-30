import { client } from "../utils/services/fetchClient";

export const buyStone = (userId, stoneId, sign) => {
  return client.post('/buy_stone', {user_id:userId, stone_id:stoneId, sign:sign});
};
