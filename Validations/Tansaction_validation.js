const Output = require("../OutputGenerator/OutputFunctin");
const EmptyValue = undefined;
const min_transfer_amount = "Minimum withdrawal amount is 1000 for account ";
const max_transfer_amount = "Maximum withdrawal amount is 30000 for account ";
const daily__withdraw__limit = "Only 3 withdrawals are allowed in a day";
const daily__diposit_limit = "Only 3 withdrawals are allowed in a day";
const min_withdraw_amount = "Minimum withdraw amount is 1000";
const max_withdraw_amount = "Maximum withdraw amount is 30000";
const max_diposit_amount = "Maximum deposit amount is 50000";
const min_diposit_amount = "Minimum deposit amount is 500";
const insufficient_balance = "Insufficient balance";
const account_holder_fullname = "Account holder is name is compalsary";
const account_not_exist = "Account is not exists.";

//!___________________* CREATE ACCOUNT FUNCTION *___________________!//
exports.Create_account_validation = (account_holder) => {
  if (!account_holder) {
    Output.Creating_output_file(account_holder_fullname);
    return false;
  }

  return true;
};

//!__________________* CHECKING BALANCE FUNCTION *__________________!//
exports.Balance_Status_validation = (account_number) => {
  if (account_number === EmptyValue) {
    Output.Creating_output_file(account_not_exist);
    return false;
  }

  return true;
};

//!______________________* DEPOSIT FUNCTIONS *______________________!//
exports.Deposit_validation = (
  account_number,
  todays_date,
  transition_amount
) => {
  if (account_number === EmptyValue) {
    Output.Creating_output_file(account_not_exist);
    return false;
  }

  if (parseInt(transition_amount) < 500) {
    Output.Creating_output_file(min_diposit_amount);
    return false;
  }

  if (parseInt(transition_amount) > 50000) {
    Output.Creating_output_file(max_diposit_amount);
    return false;
  }

  let daily_diposit_limit = account_number.daily_limit.get(todays_date);

  if (daily_diposit_limit.deposit_limit > 2) {
    Output.Creating_output_file(daily__diposit_limit);
    return false;
  }

  return true;
};

//!______________________* WITHDRAW FUNCTION *______________________!//
exports.Withdraw_validation = (
  account_number,
  todays_date,
  transition_amount
) => {
  if (account_number === EmptyValue) {
    Output.Creating_output_file(account_not_exist);
    return false;
  }

  if (parseInt(transition_amount) < 1000) {
    Output.Creating_output_file(min_withdraw_amount);
    return false;
  }

  if (parseInt(transition_amount) > 30000) {
    Output.Creating_output_file(max_withdraw_amount);
    return false;
  }

  if (parseInt(transition_amount) > account_number.account_balance) {
    Output.Creating_output_file(insufficient_balance);
    return false;
  }

  let daily_withdraw_limit = account_number.daily_limit.get(todays_date);

  if (daily_withdraw_limit.withdraw_limit > 2) {
    Output.Creating_output_file(daily__withdraw__limit);
    return false;
  }

  return true;
};

//!______________________* TRANSFER FUNCTION *______________________!//
exports.Tansfer_validation = (
  transferfrom,
  transferto,
  sender_account_number,
  transition_amount
) => {
  if (transferfrom === EmptyValue) {
    Output.Creating_output_file(account_not_exist);
    return false;
  }

  if (parseInt(transition_amount) > transferfrom.account_balance) {
    Output.Creating_output_file(insufficient_balance);
    return false;
  }

  if (parseInt(transition_amount) < 1000) {
    Output.Creating_output_file(min_transfer_amount + sender_account_number);
    return false;
  }

  if (parseInt(transition_amount) > 30000) {
    Output.Creating_output_file(max_transfer_amount + sender_account_number);
    return false;
  }

  if (transferto === EmptyValue) {
    Output.Creating_output_file(account_not_exist);
    return false;
  }

  return true;
};
