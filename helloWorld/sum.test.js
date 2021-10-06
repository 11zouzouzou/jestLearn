const sum = require("./sum");

test("adds 1 + 2 to equal 3", () => {
  //此测试使用 expect 和 toBe 来测试两值是否一致
  expect(sum(1, 2)).toBe(3);
});
