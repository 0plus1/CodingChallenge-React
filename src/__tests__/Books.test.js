import React from "react";
import { shallow } from "enzyme";

import BooksPage from "../components/Books/BooksPage";

describe("<BooksPage />", () => {
  describe("renders", () => {
    it("without crashing", () => {
      shallow(<BooksPage />);
    });
  });
});
