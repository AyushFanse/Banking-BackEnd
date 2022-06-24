const {
  Create,
  Balance,
  Deposit,
  Withdraw,
  Transfer,
} = require("../Transaction_Utilities/Transaction_Utilities");
const Transaction_Handler = require("../Transaction_Handler/Transaction_Handler");

const Transaction_Processor = (
  all_input_details,
  account_details_map,
  daily_transaction_track_map
) => {
  for (var i = 0; i < all_input_details.length; i++) {

    //*_____________ Differentiating data in proper form _____________*//
    let input_data = Transaction_Identifire(all_input_details[i]);

    //^________________________ Types of Cases ________________________^//
    const Transaction_Types = input_data[0].trim();
    const create = new Create();
    const balance = new Balance();
    const deposit = new Deposit();
    const withdraw = new Withdraw();
    const transfer = new Transfer();
    const transaction_handler = new Transaction_Handler();
    let transaction_details = {};
    
    switch (Transaction_Types) {
      
      //~__________________* CREATE *__________________~//
      case "Create":
        transaction_details = {
          account_holder: input_data[1] || null,
          transition_amount: 0,
        };

        transaction_handler.setTransaction(create);
        transaction_handler.execution(
          transaction_details,
          account_details_map,
          daily_transaction_track_map
        );
        break;

      //~__________________* BALANCE *__________________~//
      case "Balance":
        transaction_details = {
          tansaction: input_data[0].trim(),
          account_number: input_data[1].trim(),
        };

        transaction_handler.setTransaction(balance);
        transaction_handler.execution(
          transaction_details,
          account_details_map,
          daily_transaction_track_map
        );
        break;

      //~__________________* DEPOSIT *__________________~//
      case "Deposit":
        transaction_details = {
          tansaction: input_data[0].trim(),
          account_number: input_data[1].trim(),
          transition_amount: input_data[2].trim(),
        };

        transaction_handler.setTransaction(deposit);
        transaction_handler.execution(
          transaction_details,
          account_details_map,
          daily_transaction_track_map
        );
        break;

      //~__________________* WITHDRAW *__________________~//
      case "Withdraw":
        transaction_details = {
          tansaction: input_data[0].trim(),
          account_number: input_data[1].trim(),
          transition_amount: input_data[2].trim(),
        };

        transaction_handler.setTransaction(withdraw);
        transaction_handler.execution(
          transaction_details,
          account_details_map,
          daily_transaction_track_map
        );
        break;

      //~__________________* TRANSFER *__________________~//
      case "Transfer":
        transaction_details = {
          tansaction: input_data[0].trim(),
          sender_account_number: input_data[1].trim(),
          receiver_account_number: input_data[2].trim(),
          transition_amount: input_data[3].trim(),
        };

        transaction_handler.setTransaction(transfer);
        transaction_handler.execution(
          transaction_details,
          account_details_map,
          daily_transaction_track_map
        );
        break;
    }
  }
  return;
};

//~_______________________* Differentiating *_______________________~//
function Transaction_Identifire(input_details) {
  let transaction_types_verification = input_details.toString().split(" ", 1);

  if (transaction_types_verification[0] !== "Create") {
    return input_details.toString().split(" ");
  } else {
    return input_details.toString().split('"', 2);
  }
}

module.exports = Transaction_Processor;