import { render, screen } from "@testing-library/react";
import SummaryForm from "../Summary/SummaryForm";

test("Initial conditions", () => {
  render(<SummaryForm />);
  const checkbox = screen.getByRole("checkbox", {
    name: /terms and conditions/i,
  });
  expect(checkbox).not.toBeChecked();

  const confirmButton = screen.getByRole("button", {
    name: /confirm order/i,
  });
  expect(confirmButton).toBeDisabled();
});

// test("Checkbox disables button on first click and enables on second clicks", () => {
//   render(<SummaryForm />);
//   const checkbox = screen.getByRole("checkbox", {
//     name: /terms and conditions/i,
//   });
//   const confirmButton = screen.getByRole("button", {
//     name: /confirm order/i,
//   });

//   userEvent.click(checkbox);
//   expect(confirmButton).toBeEnabled();

//   userEvent.click(checkbox);
//   expect(confirmButton).toBeDisabled();
// });

test("popover responds to hover", () => {
  render(<SummaryForm />);

  // popover starts out hidden
  const nullPopover = screen.queryByText(
    /no ice cream will actually be delivered/i
  );
  expect(nullPopover).not.toBeInTheDocument();

  // popover appears upon mouseover of checkbox label
  
  // popover disappears when we mouse out
});
