import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Home from './Components/Main/Home';
import Start from './Components/Main/Start';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from "./Components/Main/Layout";
import Details from "./Components/Main/Details";
import Manager from './Components/Manager/Manager';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <AllRoutes />
//   <React.StrictMode>
//       <AllRoutes />
//   </React.StrictMode>
);


function AllRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="/manager" element={<Manager />} />
                    <Route path="/getStarted" element={<Start />} />
                    <Route path="/getStarted/Details" element={<Details />} />
                    
                </Route>
            </Routes>
        </BrowserRouter>

    );
}
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
