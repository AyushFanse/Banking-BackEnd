const {
  Create,
  Balance,
  Deposit,
  Withdraw,
  Transfer,
} = require("../Transaction_Utilities/Transaction_Utilities");
const Transaction_Handler = require("../Transaction_Handler/Transaction_Handler");

const create = new Create();
const balance = new Balance();
const deposit = new Deposit();
const withdraw = new Withdraw();
const transfer = new Transfer();
const transaction_handler = new Transaction_Handler();

test("Strategy", () => {
  const Transaction_Handler = () => {
    const transaction_details = {
      account_holder: "Ayush Fanse" || null,
      transition_amount: 0,
    };

    let transaction = "";
    const setTransaction = (transaction_type) => {
      transaction = transaction_type;
      return transaction;
    };
    expect(setTransaction(create)).toBe(create);

    const execution = (user_input) => {
      return user_input.account_holder;
    };

    expect(execution(transaction_details)).toBe("Ayush Fanse");
    return "Done";
  };

  expect(Transaction_Handler()).toBe("Done");
});
