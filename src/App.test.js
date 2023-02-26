import React from "react";
import { render, fireEvent } from "@testing-library/react";
import App from "./App";

test("renders input and button", () => {
  const { getByRole } = render(<App />);

  const input = getByRole("textbox");
  const button = getByRole("button", { name: "Submit" });

  expect(input).toBeInTheDocument();
  expect(button).toBeInTheDocument();
});

test("updates input value on change", () => {
  const { getByRole } = render(<App />);

  const testInput = "test input";
  const inputElement = getByRole("textbox");
  fireEvent.change(inputElement, { target: { value: testInput } });

  expect(inputElement.value).toBe(testInput);
});

test("alerts input value on button click", () => {
  const mockFunction = jest.fn();
  const alertMock = jest.spyOn(window, "alert").mockImplementation(() => {});
  const { getByRole } = render(<App />);
  const input = getByRole("textbox");
  const button = getByRole("button", { name: "Submit" });

  fireEvent.change(input, { target: { value: "Test input" } });
  fireEvent.click(button);
  mockFunction();
  expect(mockFunction).toHaveBeenCalledTimes(1);
  expect(alertMock).toHaveBeenCalledWith("You entered: Test input");
  alertMock.mockRestore();
});
