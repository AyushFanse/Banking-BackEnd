const InputProcessor = require("../InputFileProcessor/InputProcessor");
const fs = require("fs");
const account_details_map = new Map();
const daily_transaction_track_map = new Map();

//*----------------------------* Create Post *----------------------------*//

const create_file = async (req, res) => {
  account_details_map.clear();
  daily_transaction_track_map.clear();
  
  try {
    InputProcessor(
      req.file.path,
      account_details_map,
      daily_transaction_track_map
    );
    
    
    const ext = req.file.filename.substr(req.file.filename.lastIndexOf("."));
    
    res.status(201).send({
      msg: "File is ready! File will be availabe for 30sec only.",
      ext: ext,
    });
  } catch (err) {
    res.status(400).json(err);
  }
};

//*----------------------------* Get Post By Id From DataBase *----------------------------*//

const get_file = (req, res) => {
  const file_path = `Get-Output-File/Output.text`;

  try {
    //!_____________________ Delete File in 1 min _____________________!//

    account_details_map.clear();
    daily_transaction_track_map.clear();

    setTimeout(() => {
      fs.unlinkSync(file_path);
    }, 1000);

    res.status(200).download(file_path);
  } catch (err) {
    res.status(400).json(err);
  }
};

module.exports = {
  create_file,
  get_file,
};
