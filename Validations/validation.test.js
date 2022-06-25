const Validation = require("./Tansaction_validation");

const EmptyValue = undefined;
//!___________________* CREATE ACCOUNT FUNCTION *___________________!//

test("Invalid Create_account_validation", () => {
  expect(Validation.Create_account_validation("")).toBe(false);
});

test("Valid Create_account_validation", () => {
  expect(Validation.Create_account_validation("Ayush")).toBe(true);
});

//!__________________* CHECKING BALANCE FUNCTION *__________________!//

test("Valid Balance_Status_validation", () => {
  expect(Validation.Balance_Status_validation(EmptyValue)).toBe(false);
});

test("Valid Balance_Status_validation", () => {
  expect(Validation.Balance_Status_validation(1001)).toBe(true);
});

//!__________________* DEPOSIT FUNCTIONS *__________________!//

test("Valid Deposit_validation", () => {
  expect(Validation.Deposit_validation(EmptyValue)).toBe(false);
});

test("Valid Deposit_validation", () => {
  let account_number = 1001;
  let todays_date = "01-02-22";
  let transition_amount = 200;

  expect(
    Validation.Deposit_validation(
      account_number,
      todays_date,
      transition_amount
    )
  ).toBe(false);
});

test("Valid Deposit_validation", () => {
  let account_number = 1001;
  let todays_date = "01-02-22";
  let transition_amount = 60000;

  expect(
    Validation.Deposit_validation(
      account_number,
      todays_date,
      transition_amount
    )
  ).toBe(false);
});

test("Valid Deposit_validation", () => {
  let test_account_details_map = new Map();
  let test_daily_transaction_track_map = new Map();

  test_account_details_map.set(1001, {
    account_balance: 20000,
    daily_limit: test_daily_transaction_track_map.set("01-02-22", {
      deposit_limit: 3,
      withdraw_limit: 3,
    }),
  });

  let account_number = test_account_details_map.get(1001);
  let todays_date = "01-02-22";
  let transition_amount = 30000;

  expect(
    Validation.Deposit_validation(
      account_number,
      todays_date,
      transition_amount
    )
  ).toBe(false);
});

//!______________________* WITHDRAW FUNCTION *______________________!//

test("Valid Withdraw_validation", () => {
  expect(Validation.Withdraw_validation(EmptyValue)).toBe(false);
});

test("Valid Withdraw_validation", () => {
  let account_number = 1001;
  let todays_date = "01-02-22";
  let transition_amount = 700;

  expect(
    Validation.Withdraw_validation(
      account_number,
      todays_date,
      transition_amount
    )
  ).toBe(false);
});

test("Valid Withdraw_validation", () => {
  let account_number = 1001;
  let todays_date = "01-02-22";
  let transition_amount = 40000;

  expect(
    Validation.Withdraw_validation(
      account_number,
      todays_date,
      transition_amount
    )
  ).toBe(false);
});

test("Valid Withdraw_validation", () => {
  let test_account_details_map = new Map();
  let test_daily_transaction_track_map = new Map();

  test_account_details_map.set(1001, {
    account_balance: 5000,
    daily_limit: test_daily_transaction_track_map.set("01-02-22", {
      deposit_limit: 2,
      withdraw_limit: 2,
    }),
  });

  let account_number = test_account_details_map.get(1001);
  let todays_date = "01-02-22";
  let transition_amount = 8000;

  expect(
    Validation.Withdraw_validation(
      account_number,
      todays_date,
      transition_amount
    )
  ).toBe(false);
});

test("Valid Withdraw_validation", () => {
  let test_account_details_map = new Map();
  let test_daily_transaction_track_map = new Map();

  test_account_details_map.set(1001, {
    account_balance: 20000,
    daily_limit: test_daily_transaction_track_map.set("01-02-22", {
      deposit_limit: 3,
      withdraw_limit: 3,
    }),
  });

  let account_number = test_account_details_map.get(1001);
  let todays_date = "01-02-22";
  let transition_amount = 3000;

  expect(
    Validation.Withdraw_validation(
      account_number,
      todays_date,
      transition_amount
    )
  ).toBe(false);
});

//!______________________* TRANSFER FUNCTION *______________________!//

test("Valid Tansfer_validation", () => {
  expect(Validation.Tansfer_validation(EmptyValue)).toBe(false);
});

test("Valid Tansfer_validation", () => {
  let test_account_details_map = new Map();
  let test_daily_transaction_track_map = new Map();

  test_account_details_map.set(1001, {
    account_balance: 11000,
    daily_limit: test_daily_transaction_track_map.set("01-02-22", {
      deposit_limit: 1,
      withdraw_limit: 1,
    }),
  });

  test_account_details_map.set(1002, {
    account_balance: 2000,
    daily_limit: test_daily_transaction_track_map.set("10-02-22", {
      deposit_limit: 1,
      withdraw_limit: 1,
    }),
  });

  let transferfrom = test_account_details_map.get(1001);
  let transferto = test_account_details_map.get(1002);
  let sender_account_number = 1002;
  let transition_amount = 13000;

  expect(
    Validation.Tansfer_validation(
      transferfrom,
      transferto,
      sender_account_number,
      transition_amount
    )
  ).toBe(false);
});

test("Valid Tansfer_validation", () => {
  let test_account_details_map = new Map();
  let test_daily_transaction_track_map = new Map();

  test_account_details_map.set(1001, {
    account_balance: 11000,
    daily_limit: test_daily_transaction_track_map.set("01-02-22", {
      deposit_limit: 1,
      withdraw_limit: 1,
    }),
  });

  test_account_details_map.set(1002, {
    account_balance: 2000,
    daily_limit: test_daily_transaction_track_map.set("10-02-22", {
      deposit_limit: 1,
      withdraw_limit: 1,
    }),
  });

  let transferfrom = test_account_details_map.get(1001);
  let transferto = test_account_details_map.get(1002);
  let sender_account_number = 1002;
  let transition_amount = 800;

  expect(
    Validation.Tansfer_validation(
      transferfrom,
      transferto,
      sender_account_number,
      transition_amount
    )
  ).toBe(false);
});


test("Valid Tansfer_validation", () => {
    let test_account_details_map = new Map();
    let test_daily_transaction_track_map = new Map();
  
    test_account_details_map.set(1001, {
      account_balance: 101000,
      daily_limit: test_daily_transaction_track_map.set("01-02-22", {
        deposit_limit: 1,
        withdraw_limit: 1,
      }),
    });
  
    test_account_details_map.set(1002, {
      account_balance: 2000,
      daily_limit: test_daily_transaction_track_map.set("10-02-22", {
        deposit_limit: 1,
        withdraw_limit: 1,
      }),
    });
  
    let transferfrom = test_account_details_map.get(1001);
    let transferto = test_account_details_map.get(1002);
    let sender_account_number = 1002;
    let transition_amount = 40000;
  
    expect(
      Validation.Tansfer_validation(
        transferfrom,
        transferto,
        sender_account_number,
        transition_amount
      )
    ).toBe(false);
  });

  

test("Valid Tansfer_validation", () => {
    let test_account_details_map = new Map();
    let test_daily_transaction_track_map = new Map();
  
    test_account_details_map.set(1001, {
      account_balance: 101000,
      daily_limit: test_daily_transaction_track_map.set("01-02-22", {
        deposit_limit: 1,
        withdraw_limit: 1,
      }),
    });
  
    let transferfrom = test_account_details_map.get(1001);
    let transferto = test_account_details_map.get(1002);
    let sender_account_number = 1002;
    let transition_amount = 13000;
  
    expect(
      Validation.Tansfer_validation(
        transferfrom,
        transferto,
        sender_account_number,
        transition_amount
      )
    ).toBe(false);
  });