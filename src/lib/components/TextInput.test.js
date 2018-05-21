import React from "react";
import TextInput from "./TextInput";
import renderer from "react-test-renderer";

describe("TextInput", () => {
  it("renders properly", () => {
    const tree = renderer
      .create(<TextInput label="Email" placeholder="name@example.com" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
