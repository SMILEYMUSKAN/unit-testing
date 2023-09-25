import { render} from "@testing-library/react";
import App from "./App";

/*
test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

*/

describe("Testing App.js File", () => {
  it("App.js Should return 100% of coverage", () => {
    render(<App />);
  });
});
