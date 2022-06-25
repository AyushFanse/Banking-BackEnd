const InputProcessor = require("./InputProcessor");

test("InputProcessor", () => {
  const file_name = "Dommy-Inputs.text";
  const file_path = `Put-Input-File/${file_name}`;
  const map1 = new Map();
  const map2 = new Map();

  expect(InputProcessor(file_path, map1, map2)).toBe("Done");
});

test("InputProcessor", () => {
  const file_name = "Dommy.text";
  const file_path = `Put-Input-File/${file_name}`;
  const map1 = new Map();
  const map2 = new Map();

  expect(InputProcessor(file_path, map1, map2)).toBe("Done");
});
