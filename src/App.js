import React from 'react';
import './App.css';
import Header from "./Header/Header";
import Sidebar from "./Sidebar/Sidebar";
import RecommendedVideos from './RecommendedVideos/RecommendedVideos';
import SearchPage from './Content/SearchPage/SearchPage';

import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Switch>
          <Route path="/search">           
          <div className="app__page">
              <Sidebar/>
              <SearchPage/>
            </div>
          </Route>
          <Route path="/">
            <div className="app__page">
              <Sidebar/>
              <RecommendedVideos/>
            </div>
          </Route>
        </Switch>
      </Router>

      
       


      {/* Header */}
      {/* Sidebar */}
      {/* RecommendationVideo */}
    </div>
  );
}

export default App;
