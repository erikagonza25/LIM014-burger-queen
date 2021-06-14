import {render} from '@testing-library/react';
import Menu from './Menu';

const MockMenu=[
  {
    "id":18,
    "img":"https://firebasestorage.googleapis.com/v0/b/burger-queen-a6754.appspot.com/o/queso.png?alt=media&token=80fd4474-a735-470f-a0fd-ad26af225ebd",
    "name":"Queso",
    "price":"1",
    "type":"extra"
  },
  {
    "id":6,
    "img":"https://firebasestorage.googleapis.com/v0/b/burger-queen-a6754.appspot.com/o/hamburguesaPolloS.png?alt=media&token=63bc788a-fabb-47fb-b27e-e36ad702f318",
    "name":"Hamburguesa Simple de Pollo",
    "price":"10",
    "type":"lunch"
  },
]

describe('get data', () => {
  beforeEach(() =>{
    global.get = jest.fn(() =>Promise.resolve({
      json:()=>Promise.resolve(MockMenu)
    }))
  })
  test('get and render Menu',()=>{
    render(<Menu/> )
  })
})
