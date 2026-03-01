import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { myrouter } from './routers/router';

import { store } from './Redux/store';
import { Provider } from 'react-redux'

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  //   <RouterProvider router={myrouter} />
  // </StrictMode>,
  <Provider store={store}>
    <RouterProvider router={myrouter} />
  </Provider>,
)
