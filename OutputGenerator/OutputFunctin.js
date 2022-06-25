var fs = require("fs");
const file_name = "Output.text";
const file_path = `Get-Output-File/${file_name}`;

//&__________________* OUTPUT GENERATOR FUNCTION *__________________&//

exports.Creating_output_file = (output_content) => {
  let FinalOutput = String(output_content) + "\n";

  //*______________ Printing Output In The Output File ______________*//

  fs.appendFileSync(file_path, FinalOutput);

  return;
};
