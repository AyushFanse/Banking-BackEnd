const {
  Create,
  Balance,
  Deposit,
  Withdraw,
  Transfer,
} = require("../Transaction_Utilities/Transaction_Utilities");

const create = new Create();
const balance = new Balance();
const deposit = new Deposit();
const withdraw = new Withdraw();
const transfer = new Transfer();

let test_account_details_map = new Map();
let test_daily_transaction_track_map = new Map();
let transaction_details;

//*__________________* CREATE ACCOUNT FUNCTION *__________________*//

test("Create", () => {
  transaction_details = {
    account_holder: "Ayush Fanse",
    transition_amount: 0,
  };
  expect(
    create.execution(
      transaction_details,
      test_account_details_map,
      test_daily_transaction_track_map
    )
  ).toBe(1001);
});

test("Create", () => {
  transaction_details = {
    account_holder: "",
    transition_amount: 0,
  };
  expect(
    create.execution(
      transaction_details,
      test_account_details_map,
      test_daily_transaction_track_map
    )
  ).toBe(1001);
});

test("Create", () => {
  transaction_details = {
    account_holder: "Sanu Fanse",
    transition_amount: 0,
  };
  expect(
    create.execution(
      transaction_details,
      test_account_details_map,
      test_daily_transaction_track_map
    )
  ).toBe(1002);
});

//*__________________* CHECKING BALANCE FUNCTION *__________________*//

test("Balance", () => {
  transaction_details = {
    account_number: 1001,
  };
  expect(
    balance.execution(
      transaction_details,
      test_account_details_map,
      test_daily_transaction_track_map
    )
  ).toBe(0);
});


test("Balance", () => {
  transaction_details = {
    account_number: 1003,
  };
  expect(
    balance.execution(
      transaction_details,
      test_account_details_map,
      test_daily_transaction_track_map
    )
  ).toBe(undefined);
});

//*_______________________* DEPOSIT FUNCTION *_______________________*//

test("Deposit", () => {
  transaction_details = {
    account_number: 1001,
    transition_amount: 10000,
  };
  expect(
    deposit.execution(
      transaction_details,
      test_account_details_map,
      test_daily_transaction_track_map
    )
  ).toBe(10000);
});

//*_______________________* WITHDRAW FUNCTION *______________________*//

test("Withdraw", () => {

  transaction_details = {
    account_number: 1001,
    transition_amount: 1000,
  };

  expect(
    withdraw.execution(
      transaction_details,
      test_account_details_map,
      test_daily_transaction_track_map
    )
  ).toBe(9000);
});

//*_______________________* TRANSFER FUNCTION *_______________________*//

  test("Transfer", () => {

    transaction_details = {
      sender_account_number: 1001,
      receiver_account_number: 1002,
      transition_amount: 1000
    };
  
    expect(
      transfer.execution(
        transaction_details,
        test_account_details_map,
        test_daily_transaction_track_map
      )
    ).toEqual("Successful");
  });