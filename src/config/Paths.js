import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

import Home from '../pages/Home';
import Games from '../pages/Games';
import Music from '../pages/Music';
import Settings from '../pages/Settings';
import CoverFlow from '../pages/CoverFlow';

const Paths = () => {
    return (
        <>
        <Routes>
   
        <Route
               exact
                path='/'
                element={<Home/>}
            />
            <Route
               exact
                path='/music'
                element={<Music/>}
            />
             <Route
               exact
                path='/games'
                element={<Games/>}
            />
             <Route
               exact
                path='/coverflow'
                element={<CoverFlow/>}
            />
             <Route
               exact
                path='/settings'
                element={<Settings/>}
            />
         
            
        </Routes>
        </>
        
    );
}

export default Paths;