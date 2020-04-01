import { toArray } from "../lib";

enum EnumEmpty {}

enum Enum {
  first,
  second,
  third
}

enum EnumWithString {
  "first",
  "second",
  "third"
}

enum EnumWithValues {
  first = "first",
  second = "second",
  third = "third"
}

test("Enum is empty", () => {
  expect(toArray(EnumEmpty)).toEqual([]);
});

test("Simple enum", () => {
  expect(toArray(Enum)).toEqual(["first", "second", "third"]);
});

test("Simple enum with strings", () => {
  expect(toArray(EnumWithString)).toEqual(["first", "second", "third"]);
});

test("Simple enum with", () => {
  expect(toArray(EnumWithValues)).toEqual(["first", "second", "third"]);
});
