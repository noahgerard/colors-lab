const { validateColor } = require("./js/code.js");
const fetch = require("node-fetch");

const API_URL = process.env.API_URL || 'http://localhost:8080';

describe("Integration: ColorsLab API", () => {
  test("Login API returns user info for valid credentials", async () => {
    const res = await fetch(`${API_URL}/Login.php`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ login: "test", password: "test" }),
    });
    expect(res.status).toBe(200);
    const text = await res.text();
    // Remove PHP warnings and HTML tags
    const json = text.replace(/<[^>]*>/g, '').replace(/^[^\{]*/, '');
    const data = JSON.parse(json);
    expect(data).toHaveProperty("id");
  }, 20000);

  test("AddColor API rejects invalid color", async () => {
    const res = await fetch(`${API_URL}/AddColor.php`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ color: "xx", userId: 1 }),
    });
    expect(res.status).toBe(200);
    const text = await res.text();
    expect(text).toMatch(/Invalid|error/i);
  }, 20000);
});
