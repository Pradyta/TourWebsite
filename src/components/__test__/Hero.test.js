import React from "react";
import { render, screen } from '@testing-library/react';
import Hero from "../Hero";

describe("Hero Component", () => {
  test("should render Hero compoennt", () => {
    const {asFragment} = render( 
      <Hero />
  );
  expect(asFragment(<Hero/>)).toMatchSnapshot();

  });

    test("header renders with react testing tutorial in the document", () => {
      const component = render( 
        <Hero />
    );
    const linkElement = component.getByText(/Your Journey Your Story/i);
    expect(linkElement).toBeInTheDocument();
  });
});
