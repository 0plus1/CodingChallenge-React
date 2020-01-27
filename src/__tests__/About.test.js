import React from "react";
import { shallow } from "enzyme";

import AboutPage from "../components/About/AboutPage";

describe("<AboutPage />", () => {
  describe("renders", () => {
    it("without crashing", () => {
      shallow(<AboutPage />);
    });
  });
});
