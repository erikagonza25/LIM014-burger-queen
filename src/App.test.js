import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import Cart from "./components/Cart";

test("render Cart", () => {
  const prueba = {
    content: "This is a test",
    important: true,
  };

  const component = render(<Cart prueba={prueba} />);
  console.log(component);
});
