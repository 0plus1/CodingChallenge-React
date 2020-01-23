import React from "react";
import { shallow } from "enzyme";

import BookList from "../components/Books/BookList";

describe("<BookList />", () => {
  describe("renders", () => {
    it("without crashing", () => {
      shallow(<BookList />);
    });
  });
});
