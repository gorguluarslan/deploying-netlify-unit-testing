import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Counter from "./index";

describe("Counter Test", () => {
  let increaseBtn, decreaseBtn, count;

  beforeEach(() => {
    console.log("Her testten önce çalışacağım");

    render(<Counter />);
    increaseBtn = screen.getByText("Increase"); // seçme işlemi
    decreaseBtn = screen.getByText("Decrease"); // seçme işlemi
    count = screen.getByText("0"); //seçme işlemi
  });
  beforeAll(() => {
    console.log("En başta bir kere çalışacağım");
  });

  afterEach(() => {
    console.log("Her testten sonra çalışacağım");
  });
  afterAll(() => {
    console.log("En sonda bir kere çalışacağım");
  });

  test("increase btn", () => {
    userEvent.click(increaseBtn); // tıklama işlemi
    expect(count).toHaveTextContent("1");
  });

  test("decrease btn", () => {
    userEvent.click(decreaseBtn); // tıklama işlemi
    expect(count).toHaveTextContent("-1");
  });
});
