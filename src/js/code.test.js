const { validateColor } = require("./code.js");

test("validate max color length", () => {
  expect(validateColor("testcolor")).toBe(true);
  expect(validateColor("testcolorxxxx")).toBe(false);
});

test("validate min color length", () => {
  expect(validateColor("testcolor")).toBe(true);
  expect(validateColor("xx")).toBe(false);
});
