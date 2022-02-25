import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./components/auth/login";
import Register from "./components/auth/register";

const App = () => {
  return (
    // <BrowserRouter>
    //   <input type="checkbox" id="theme" />
    //   <div className="App">
    //     <div className="main">
    //       {/* <Route path="/:components" component={} /> */}
    //       <Routes>          
    //             {/* <Route path="/"  element={<Home/>} /> */}
    //             <Route path="/" element={<Login/>} />
    //             <Route path="/register" element={<Register/>} />
    //         </Routes>
    //     </div>    
    //   </div>
    // </BrowserRouter>
    <BrowserRouter>       
            <Routes>          
        
                <Route path="/" element={<Login/>} />

            </Routes>
        </BrowserRouter>
  );
};

export default App;
