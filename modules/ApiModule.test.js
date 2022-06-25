const { create_file, get_file } = require("./ApiModule");

//*----------------------------* Create Post *----------------------------*//

test("Post", async () => {
  let req = {
    file: {
      path: "Put-Input-File/Dommy.text",
      filename: "Text.text",
    },
  };
  let data = await create_file(req);
  expect(data).toBe('Done');
});

test("Post", async () => {
  let req = {
    file: {
      filename: "Text.text",
    },
  };
  let data = await create_file(req);
  expect(data).toBe("err");
});

//*----------------------------* Get Post By Id From DataBase *----------------------------*//

test("Get", async () => {
  let data = await get_file();
  expect(data).toBe("Done");
});

test("Get", async () => {
  let data = await get_file();
  expect(data).toBe("err");
});
