import { client } from "../utils/services/fetchClient";

export const authorise = (initdata, invitCode) => {
  return client.post('/authorize', {initdata:initdata, invitCode : invitCode});
};
