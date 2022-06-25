const Output = require("../OutputGenerator/OutputFunctin");
const Validation = require("../Validations/Tansaction_validation");
const EmptyValue = undefined;
const Successful = "Successful";
const default_account_number = 1001;
let todays_date =
  new Date().getDate() +
  "-" +
  new Date().getMonth() +
  "-" +
  new Date().getFullYear();

//*___________________* CREATE ACCOUNT FUNCTION *___________________*//

function Create() {
  let finalOutput;
  this.execution = (info, account_details_map, daily_transaction_track_map) => {
    let validation = Validation.Create_account_validation(info.account_holder);

    if (validation) {
      let ExistAccount = (account_number) => {
        for (var j = 0; j < 1; account_number++) {
          let existAccount = account_details_map.get(account_number);

          let creating_account_utilities = {
            account_balance: 0,
            daily_limit: daily_transaction_track_map.set(todays_date, {
              deposit_limit: 0,
              withdraw_limit: 0,
            }),
          };

          if (existAccount === EmptyValue) {
            account_details_map.set(account_number, creating_account_utilities);
            Output.Creating_output_file(account_number);
            finalOutput = account_number;
            return finalOutput;
          }
        }
      };

      ExistAccount(default_account_number);
    }
    return finalOutput;
  };
}

//*__________________* CHECKING BALANCE FUNCTION *__________________*//

function Balance() {
  let finalOutput;
  this.execution = (info, account_details_map) => {
    let account_number = account_details_map.get(parseInt(info.account_number));
    let validation = Validation.Balance_Status_validation(account_number);

    if (validation) {
      Output.Creating_output_file(account_number.account_balance);
      finalOutput = account_number.account_balance;
      return finalOutput;
    }
  };
  return finalOutput;
}

//*_______________________* DEPOSIT FUNCTION *_______________________*//

function Deposit() {
  let finalOutput;

  this.execution = (info, account_details_map, daily_transaction_track_map) => {
    let user_account = account_details_map.get(parseInt(info.account_number));
    let validation = Validation.Deposit_validation(
      user_account,
      todays_date,
      info.transition_amount
    );

    if (validation) {
      let daily_diposit_limit = user_account.daily_limit.get(todays_date);

      let updated_amount =
        parseInt(user_account.account_balance) +
        parseInt(info.transition_amount);

      let updated_deposit_limit = daily_diposit_limit.deposit_limit + 1;

      let updated_account_details = {
        account_balance: updated_amount,
        daily_limit: daily_transaction_track_map.set(todays_date, {
          deposit_limit: updated_deposit_limit,
          withdraw_limit: daily_diposit_limit.withdraw_limit,
        }),
      };

      account_details_map.set(
        parseInt(info.account_number),
        updated_account_details
      );
      Output.Creating_output_file(updated_amount);
      finalOutput = updated_amount;
      return finalOutput;
    }
  };
  return finalOutput;
}

//*_______________________* WITHDRAW FUNCTION *______________________*//

function Withdraw() {
  let finalOutput;
  this.execution = (info, account_details_map, daily_transaction_track_map) => {
    let user_account = account_details_map.get(parseInt(info.account_number));

    let validation = Validation.Withdraw_validation(
      user_account,
      todays_date,
      info.transition_amount
    );

    if (validation) {
      let daily_diposit_limit = user_account.daily_limit.get(todays_date);
      let updated_amount =
        parseInt(user_account.account_balance) -
        parseInt(info.transition_amount);

      let updated_withdraw_limit = daily_diposit_limit.withdraw_limit + 1;

      let updated_account_details = {
        account_balance: updated_amount,
        daily_limit: daily_transaction_track_map.set(todays_date, {
          deposit_limit: daily_diposit_limit.deposit_limit,
          withdraw_limit: updated_withdraw_limit,
        }),
      };

      account_details_map.set(
        parseInt(info.account_number),
        updated_account_details
      );

      Output.Creating_output_file(updated_amount);

      finalOutput = updated_amount;
      return finalOutput;
    }
  };
  return finalOutput;
}

//*_______________________* TRANSFER FUNCTION *_______________________*//

function Transfer() {
  let finalOutput;
  this.execution = (info, account_details_map) => {
    let transferfrom = account_details_map.get(
      parseInt(info.sender_account_number)
    );

    let transferto = account_details_map.get(
      parseInt(info.receiver_account_number)
    );

    let validation = Validation.Tansfer_validation(
      transferfrom,
      transferto,
      info.sender_account_number,
      info.transition_amount
    );

    if (validation) {
      transferfrom = parseInt(transferfrom) - parseInt(info.transition_amount);
      account_details_map.set(
        parseInt(info.sender_account_number),
        transferfrom
      );
      transferto = parseInt(transferto) + parseInt(info.transition_amount);
      account_details_map.set(
        parseInt(info.receiver_account_number),
        transferto
      );
      Output.Creating_output_file(Successful);
      finalOutput = Successful;
      return finalOutput;
    }
  };
  return finalOutput;
}

module.exports = {
  Create,
  Balance,
  Deposit,
  Withdraw,
  Transfer,
};
