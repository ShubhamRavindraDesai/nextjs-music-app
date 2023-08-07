import SideBar from "@/src/components/Sidebar";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import React from "react";

describe("No data found component", () => {
  test("renders No data found component with all inner components", () => {
    const { getByTestId } = render(
      <SideBar
        handleCloseDrawer={() => {
          ("");
        }}
      />
    );

    const rootElement = getByTestId("sidebar-root");
    const headingElement = getByTestId("header");
    const homeLinkElement = getByTestId("home-link");

    const elements = [rootElement, headingElement, homeLinkElement];
    elements.forEach((element) => {
      expect(element).toBeInTheDocument();
    });
  });
});
