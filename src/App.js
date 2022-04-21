//import logo from './logo.svg';
import './App.css';

import React, {useState} from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'


import {BrowserRouter,Routes,Route,} from "react-router-dom";
const App=()=> {
  const pageSize = 5;
  const apiKey= process.env.REACT_APP_NEWS_API
  const [progress, setProgress] = useState(0)
 
  
    return (
      <div>
        <BrowserRouter>
          <Navbar />
          <LoadingBar
          height={3}
        color='#f11946'
        progress={progress}
      
      />

          <Routes>

            <Route>
              <Route exact path="business" element={<News setProgress={setProgress} apiKey={apiKey} key="business" pageSize={pageSize} country="in" category="Business" />} />
              <Route exact path="entertainment" element={<News setProgress={setProgress}  apiKey={apiKey} key="entertainment" pageSize={pageSize} country="in" category="Entertainment" />} />
              <Route exact path="general" element={<News setProgress={setProgress}  apiKey={apiKey} key="general" pageSize={pageSize} country="in" category="General" />} />
              <Route exact path="health" element={<News setProgress={setProgress}  apiKey={apiKey} key="health" pageSize={pageSize} country="in" category="Health" />} />
              <Route exact path="science" element={<News setProgress={setProgress}  apiKey={apiKey} key="science" pageSize={pageSize} country="in" category="Science" />} />
              <Route exact path="sports" element={<News setProgress={setProgress}  apiKey={apiKey} key="sports" pageSize={pageSize} country="in" category="Sports" />} />
              <Route exact path="technology" element={<News setProgress={setProgress}  apiKey={apiKey} key="technology" pageSize={pageSize} country="in" category="Technology" />} />


            </Route>
          </Routes>

        </BrowserRouter>
      </div>

    )
    }


export default App;