import { render, screen } from "@testing-library/react";
import { Default } from "./MButton.stories";

it("Checks Default Button", () => {
  render(<Default backgroundColor="#black" title="Button" />);

  const MButton = screen.getByTestId("m-button");
  console.log(MButton.textContent);
  expect(MButton.textContent).toEqual("Button");
});
