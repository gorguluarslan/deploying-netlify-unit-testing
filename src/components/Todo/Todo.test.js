import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { type } from "@testing-library/user-event/dist/type";
import Todo from "./index";

describe("Todo testleri", () => {
  let button, input;
  beforeEach(() => {
    render(<Todo />);

    button = screen.getByText("Add");
    input = screen.getByLabelText("Text");
  });

  test("Varsayılan olarak verilen 3 nesne render edilmeli", () => {
    const items = screen.getAllByText(/Item/i);

    expect(items.length).toEqual(3);
  });
  test("Input ve button dokümanda bulunmalı", () => {
    expect(button).toBeInTheDocument();
    expect(input).toBeInTheDocument();
  });
  test("inputa string girilip butona basınca listeye eklenmeli", () => {
    //inputu doldur
    const name = "Mehmet";
    userEvent.type(input, name);
    // butona tıkla
    userEvent.click(button);
    //assertion (bir şeylerin olmasını bekleme kısmı)
    expect(screen.getByText(name).toBeInTheDocument);
  });
});
