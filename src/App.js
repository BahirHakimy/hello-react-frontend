import './App.css';
import React from 'react';
import { Provider } from 'react-redux';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Greetings from './components/Greetings';
import store from './store/store';

function App() {
  const router = createBrowserRouter([
    {
      path: '',
      element: <Greetings />,
    },
  ]);
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
