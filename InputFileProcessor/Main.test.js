const fs = require("fs");
const file_name = "Input.text";
const file_path = `Put-Input-File/${file_name}`;



test('fs', () => {

    const fileRead = (filepath)=>{
        let fatiching_input_data = fs.readFileSync(filepath);
        let store_input_details = fatiching_input_data.toString().split("\n");
        return store_input_details
    }

    expect(fileRead(file_path)).toStrictEqual(['Create "Ayush Fanse"']);
  });
