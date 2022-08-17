import stringLength from './stringLength';

test("least 1 character long and not longer than 10 characters", () => {
  expect(stringLength("Hello")).toBeGreaterThan(0);
  expect(stringLength("World")).toBeLessThan(10);
});


