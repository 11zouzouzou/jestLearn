import { Snapshot } from "./snapshot";

describe("snapshot test", () => {
  const snap = new Snapshot();
  test("one", () => {
    expect(snap.toJSON()).toMatchSnapshot();
  });
});
