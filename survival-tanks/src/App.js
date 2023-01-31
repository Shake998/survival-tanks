import React from 'react'
import { Route } from 'wouter'
import Home from './pages/Home/index'
import './App.css'

function App() {
  return (
    <div className="App">
      <section className="App-content">
        <Route
          component={Home}
          path="/"
        />
      </section>
    </div>
  );
}

export default App;
