import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import RegisterForm from './components/RegisterForm';
import AllEntries from './components/AllEntries';
import CurrentlyInside from './components/CurrentlyInside';

function App() {
  return (
    <Router>
      <nav style={{ margin: 10 }}>
        <Link to="/" style={{ marginRight: 10 }}>Register Entry</Link>
        <Link to="/entries" style={{ marginRight: 10 }}>All Entries</Link>
        <Link to="/inside">Currently Inside</Link>
      </nav>

      <Routes>
        <Route path="/" element={<RegisterForm />} />
        <Route path="/entries" element={<AllEntries />} />
        <Route path="/inside" element={<CurrentlyInside />} />
      </Routes>
    </Router>
  );
}

export default App;
