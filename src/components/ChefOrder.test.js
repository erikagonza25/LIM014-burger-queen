import React from 'react';
import {render,fireEvent} from '@testing-library/react';
import ChefOrder from './ChefOrder';

test('order chef',()=>{
  const {container} = render(<ChefOrder /> )
  const button= container.firstChild
  fireEvent.click(button)
  expect(button.textContent).toBe('')
})


