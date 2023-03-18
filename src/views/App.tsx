import React from 'react';
import SideMenu from "./SideMenu";
import MainContent from "./MainContent";
import './views.css'
function App() {
  return (
    <div className="app-container">
        <SideMenu/>
        <MainContent/>
    </div>
  );
}

export default App;
