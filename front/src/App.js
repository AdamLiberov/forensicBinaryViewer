import * as React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

import Layout from './components/Layout';
import About from './components/pages/About';
import Home from './components/pages/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element= {<Home />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
