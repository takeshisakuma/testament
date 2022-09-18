import { calc } from "../test_for_jest";

describe("関数calcの動作確認", () => {
  it("3+4=7になる", () => {
    expect(calc(1, 8)).toBe(9);
  });
});
