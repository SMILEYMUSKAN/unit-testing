import UsersComponent from "./UsersComponent";
import { screen, render, waitFor } from "@testing-library/react";

describe("Testing User.js File", () => {
  it("Users.js File Should Return 100% Coverage", async () => {
    fetch = jest.fn(() =>
      Promise.resolve({
        json: () =>
          Promise.resolve([
            { id: 1, name: "Muskan", email: "muskan@gmail.com" },
          ]),
      })
    );
    var RenderUser = render(<UsersComponent />);
    var IsUserAvailable = await waitFor(() => screen.getByText("Muskan"));

    expect(IsUserAvailable).toBeInTheDocument();
    expect(RenderUser).toMatchSnapshot();
  });
});
