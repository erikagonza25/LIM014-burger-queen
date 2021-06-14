import React from 'react';
import {render,fireEvent} from '@testing-library/react';
import Chef from './Chef';

test('order chef',()=>{
  const {container} = render(<Chef /> )
  const button= container.firstChild
  fireEvent.click(button)
  expect(button.textContent).toBe('')
})
