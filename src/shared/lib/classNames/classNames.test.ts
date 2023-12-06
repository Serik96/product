import { classNames } from "./classNames";

describe("", () => {
  test("with only first param", () => {
    expect(classNames("someClass")).toBe("someClass");
  });

  test("with additional class", () => {
    const expected = "someClass class1 class2 class3";
    expect(classNames("someClass", {}, ["class1", "class2", "class3"])).toBe(
      expected
    );
  });
  test("with mods", () => {
    const expected = "someClass class1 class2 class3 hovered scrollable";
    expect(
      classNames("someClass", { hovered: true, scrollable: true }, [
        "class1",
        "class2",
        "class3",
      ])
    ).toBe(expected);
  });
  test("with mods", () => {
    const expected = "someClass class1 class2 class3 hovered";
    expect(
      classNames("someClass", { hovered: true, scrollable: false }, [
        "class1",
        "class2",
        "class3",
      ])
    ).toBe(expected);
  });
});
