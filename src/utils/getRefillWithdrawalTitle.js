import { WITHDRAWAL_MODAL_TITLE } from "../constants/constants";

export const getRefillWithdrawalTitle = (hasForm, hasAddress) => {
  if (hasForm || hasAddress) {
    return WITHDRAWAL_MODAL_TITLE.REFILL;
  }

  return WITHDRAWAL_MODAL_TITLE.SUCCESS;
};
