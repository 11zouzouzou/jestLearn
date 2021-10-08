import { sumTS, THREETEST } from "./sumTs";
test("adds 2 + 2 to equal 4", () => {
  expect(sumTS(2, 2)).toBe(4);
});
const threeTest = new THREETEST();
test("camera far 1000", () => {
  expect(threeTest.setCameraFar(1000)).toBe(1000);
});

test("camera far 0.5", () => {
  expect(threeTest.setCameraNear(0.5)).toBe(0.5);
});
