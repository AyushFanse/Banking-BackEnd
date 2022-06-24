function Transaction_Handler() {
  this.transaction = "";
  this.setTransaction = (transaction) => {
    this.transaction = transaction;
  };

  this.execution = (
    user_input,
    account_details_map,
    daily_transaction_track_map
  ) => {
    this.transaction.execution(
      user_input,
      account_details_map,
      daily_transaction_track_map
    );
    return;
  };
}

module.exports = Transaction_Handler;
