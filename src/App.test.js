//import { render, screen } from '@testing-library/react';
//import App from './App';
const text = "Hola Mundo";
test("Debe contener un texto", () => {
  expect(text).toMach(/Mundo/);
});
