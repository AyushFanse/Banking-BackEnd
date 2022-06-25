const Transaction_Processor = require("../Transaction_Processor/Transaction_Processor");
const fs = require("fs");

const InputProcessor = (
  path,
  account_details_map,
  daily_transaction_track_map
) => {
  const file_path = path;

  //&_______________________ Readig Text File _______________________&//

  let fatiching_input_data = fs.readFileSync(file_path);
  let store_input_details = fatiching_input_data.toString().split("\n");

  //&________________ Pushing User Inputs to Test Case ________________&//

  Transaction_Processor(
    store_input_details,
    account_details_map,
    daily_transaction_track_map
  );

  // setTimeout(() => {
  //   fs.unlinkSync(file_path);
  // }, 2000);

  return "Done";
};

module.exports = InputProcessor;
