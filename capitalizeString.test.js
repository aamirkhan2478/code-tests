import capitalizeString from "./capitalizeString";

describe("Capitalize", () =>
  test("Capitalize String", () =>
    expect(capitalizeString("hello world")).toEqual("Hello world")));
