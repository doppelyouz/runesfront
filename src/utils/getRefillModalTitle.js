import { REFILL_MODAL_TITLE } from "../constants/constants";
export const getRefillModalTitle = (hasForm, hasAddress) => {
  if (hasForm || hasAddress) {
    return REFILL_MODAL_TITLE.REFILL;
  }

  return REFILL_MODAL_TITLE.SUCCESS;
};
