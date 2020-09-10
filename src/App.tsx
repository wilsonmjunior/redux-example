import React from 'react'
import { Provider } from 'react-redux'
import moment from 'moment';

import store from './store'
import Catalog from './components/Catalog'
import Cart from './components/Catalog/Cart';

const App: React.FC = () => {
  const teste = [
    { data: new Date(2020, 8, 10, 9, 30, 0) },
    { data: new Date(2020, 8, 10, 9, 15, 0) },
    { data: new Date(2020, 8, 10, 8, 54, 0) },
    { data: new Date(2020, 8, 10, 14, 30, 0) },
  ]

  teste.sort((a, b) => {
    if (a.data > b.data) {
      return 1;
    }
    if (a.data < b.data) {
      return -1;
    }
    return 0;
  })

  const novoTeste = teste.map((item) => {
    const difference2 = moment(Date.now()).diff(moment(item.data), 'minutes');
    if(difference2 <= 15) {
      console.log(difference2)
      return item
    }
  })

  return (
    <Provider store={store}>
      <h1>Welcome</h1>
      <Catalog />
      <Cart />
    </Provider>
  )
}

export default App
