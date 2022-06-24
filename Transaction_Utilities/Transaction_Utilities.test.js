const {
  Create,
  Balance,
  Deposit,
  Withdraw,
  Transfer,
} = require("../Transaction_Utilities/Transaction_Utilities");
const Transaction_Handler = require("../Transaction_Handler/Transaction_Handler");
const Output = require("../Output/OutputFunctin");
const Validation = require("../Validations/Tansaction_validation");
const EmptyValue = undefined;
const default_account_number = 1001;
let todays_date =
  new Date().getDate() +
  "-" +
  new Date().getMonth() +
  "-" +
  new Date().getFullYear();
let account_details_map = new Map();
let daily_transaction_track_map = new Map();

let info = {
  account_holder: "Ayush Fanse",
};

test("Create", () => {
  const Create = (() => {

    let finalOutput;

    const execution = (info) => {

      let validation = (n) => {
        let validate =  Validation.Create_account_validation(n)
        return validate;
      };

      expect(validation(info.account_holder)).toBe(true)

      let ExistAccount = (account_number) => {
        for (var j = 0; j < 1; account_number++) {
          let existAccount = (number) => {account_details_map.get(number)};
          expect(existAccount(account_number)).toBe(EmptyValue)

          let creating_account_utilities = {
            account_balance: 0,
            daily_limit: daily_transaction_track_map.set(todays_date, {
              deposit_limit: 0,
              withdraw_limit: 0,
            }),
          };

          if (existAccount === EmptyValue) {
            const Create_New_Account = ()=>{
              account_details_map.set(account_number, creating_account_utilities);
              Output.Creating_output_file(account_number);
              finalOutput = account_number;
              return finalOutput;
            }
            
          expect(Create_New_Account()).tobe(1001);
            }
        }
        return;
      };

      ExistAccount(default_account_number);
      console.log('yes')
      return finalOutput;
    };
    execution(info)
    // expect(execution(info)).toBe(1001)
    return finalOutput;
  });
  
//  Create()
//     expect(Create(info)).toBe(1001)


  // //*__________________* CHECKING BALANCE FUNCTION *__________________*//

  // function Balance() {
  //   this.execution = (info) => {
  //     let account_number = account_details_map.get(parseInt(info.account_number));
  //     let validation = Validation.Balance_Status_validation(account_number);
  //     let finalOutput;

  //     if (validation) {
  //       Output.Creating_output_file(account_number.account_balance);
  //       finalOutput = account_number.account_balance
  //       return;
  //     }
  //     return finalOutput;
  //   };
  // }

  // //*_______________________* DEPOSIT FUNCTION *_______________________*//

  // function Deposit() {
  //   this.execution = (info) => {
  //     let user_account = account_details_map.get(parseInt(info.account_number));
  //     let finalOutput;

  //     let validation = Validation.Deposit_validation(
  //       user_account,
  //       todays_date,
  //       info.transition_amount
  //     );

  //     if (validation) {
  //       let daily_diposit_limit = user_account.daily_limit.get(todays_date);

  //       let updated_amount =
  //         parseInt(user_account.account_balance) +
  //         parseInt(info.transition_amount);

  //       let updated_deposit_limit = daily_diposit_limit.deposit_limit + 1;

  //       let updated_account_details = {
  //         account_balance: updated_amount,
  //         daily_limit: daily_transaction_track_map.set(todays_date, {
  //           deposit_limit: updated_deposit_limit,
  //           withdraw_limit: daily_diposit_limit.withdraw_limit,
  //         }),
  //       };

  //       account_details_map.set(
  //         parseInt(info.account_number),
  //         updated_account_details
  //       );
  //       Output.Creating_output_file(updated_amount);
  //       finalOutput = updated_amount;
  //       return;
  //     }
  //     return finalOutput;
  //   };
  // }

  // //*_______________________* WITHDRAW FUNCTION *______________________*//

  // function Withdraw() {
  //   this.execution = (info) => {
  //     let user_account = account_details_map.get(parseInt(info.account_number));
  //     let finalOutput;

  //     let validation = Validation.Withdraw_validation(
  //       user_account,
  //       todays_date,
  //       info.transition_amount
  //     );

  //     if (validation) {
  //       let daily_diposit_limit = user_account.daily_limit.get(todays_date);
  //       let updated_amount =
  //         parseInt(user_account.account_balance) -
  //         parseInt(info.transition_amount);

  //       let updated_withdraw_limit = daily_diposit_limit.withdraw_limit + 1;

  //       let updated_account_details = {
  //         account_balance: updated_amount,
  //         daily_limit: daily_transaction_track_map.set(todays_date, {
  //           deposit_limit: daily_diposit_limit.deposit_limit,
  //           withdraw_limit: updated_withdraw_limit,
  //         }),
  //       };

  //       account_details_map.set(
  //         parseInt(info.account_number),
  //         updated_account_details
  //       );

  //       Output.Creating_output_file(updated_amount);

  //       finalOutput = updated_amount;
  //       return;
  //     }
  //     return finalOutput;
  //   };
  // }

  // //*_______________________* TRANSFER FUNCTION *_______________________*//

  // function Transfer() {
  //   this.execution = (info) => {
  //     let transferfrom = account_details_map.get(
  //       parseInt(info.sender_account_number)
  //     );

  //     let transferto = account_details_map.get(
  //       parseInt(info.receiver_account_number)
  //     );

  //     let validation = Validation.Tansfer_validation(
  //       transferfrom,
  //       transferto,
  //       info.sender_account_number,
  //       info.transition_amount
  //     );

  //     let finalOutput;

  //     if (validation) {
  //       transferfrom = parseInt(transferfrom) - parseInt(info.transition_amount);
  //       account_details_map.set(
  //         parseInt(info.sender_account_number),
  //         transferfrom
  //       );
  //       transferto = parseInt(transferto) + parseInt(info.transition_amount);
  //       account_details_map.set(
  //         parseInt(info.receiver_account_number),
  //         transferto
  //       );
  //       Output.Creating_output_file(Successful);
  //       finalOutput = Successful;
  //       return;
  //     }
  //     return finalOutput;
  //   };
  // }
});
