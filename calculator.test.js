import Calculator from "./calculator";

let calculator;

beforeEach(() => {
  calculator = new Calculator();
});

describe("Add Numbers", () => {
  // Tests for adding
  it("Add 2 + 2 = 4", () => {
    expect(calculator.add(2, 2)).toBe(4);
  });

  it("Add 4 + 4 = 8", () => {
    expect(calculator.add(4, 4)).toBe(8);
  });

  it("Add 5 + 4 = 9", () => {
    expect(calculator.add(5, 4)).toBe(9);
  });
});

describe("Subtract Numbers", () => {
  // Tests for subtracting
  it("Subtract 5 - 4 = 1", () => {
    expect(calculator.subtract(5, 4)).toBe(1);
  });
  it("Subtract 8 - 4 = 4", () => {
    expect(calculator.subtract(8, 4)).toBe(4);
  });
  it("Subtract 6 - 2 = 4", () => {
    expect(calculator.subtract(6, 2)).toBe(4);
  });
});

describe("Divide Numbers", () => {
  // Tests for dividing
  it("Divide 10 / 4 = 2.5", () => {
    expect(calculator.divide(10, 4)).toBe(2.5);
  });
  it("Divide 10 / 5 = 2", () => {
    expect(calculator.divide(10, 5)).toBe(2);
  });
  it("Divide 20 / 4 = 5", () => {
    expect(calculator.divide(20, 4)).toBe(5);
  });
});

describe("Multiply Numbers", () => {
  // Tests for multiplication
  it("Multiply 5 * 4 = 20", () => {
    expect(calculator.multiply(5, 4)).toBe(20);
  });
  it("Multiply 2 * 4 = 8", () => {
    expect(calculator.multiply(2, 4)).toBe(8);
  });
  it("Multiply 4 - 4 = 16", () => {
    expect(calculator.multiply(4, 4)).toBe(16);
  });
});
