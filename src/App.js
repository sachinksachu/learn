import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CurrencyConverter from './pages/CurrecnyConverter'; // Assuming correct import path
import Stopwatch from './pages/Stopwatch';
import ContextProvider from './pages/ContextProvider';
import Form from './pages/form/Form';
import RouterExample from './pages/RouterExample';
import Default from './pages/Default';
import ListItems from './pages/pagination/ListItems';
import ProductForm from './pages/form/ProductForm.js/form';
import ParentForm from './pages/form/TestForm/ParentForm';
import ChildWithError from './pages/error/ChildWithError';
import LazyParent from './pages/lazy/LazyParent';
import ChildWrapper from './pages/hoc/childWrapper';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/route" element={<Default />} />
        <Route exact path="/:productid?/:id?" element={<RouterExample />} />
        <Route exact path="/currency" element={<CurrencyConverter />} />
        <Route exact path="/stopwatch" element={<Stopwatch />} />
        <Route exact path="/theme" element={<ContextProvider />} />
        <Route exact path="/form" element={<Form />} />
        <Route exact path="/products" element={<ListItems />} />
        <Route exact path="/productform" element={<ProductForm />} />
        <Route exact path="/parentform" element={<ParentForm />} />
        <Route exact path="/errorhandling" element={<ChildWithError />} />
        <Route exact path="/lazy" element={<LazyParent />} />
        <Route exact path="/hoc" element={<ChildWrapper />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
