import * as React from 'react';
import Container from '@mui/material/Container';
import SignInSide from './component/SignInSide';
import SignUp from './component/SignUp';
import Dashboard from './component/Dashboard';
import Appointments from './component/Appointments';
import Create from './component/CreatePatient';
import Update from './component/UpdatePatient';
import Delete from './component/DeletePatient';
import Settings from './component/Settings';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

export default function App() {
  return (
    <Router>
      <Container disableGutters maxWidth="false">
        <Routes>
          <Route path="/" element={<SignInSide />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/Appointments" element={<Appointments />} />
          <Route path="/Create" element={<Create />} />
          <Route path="/Update" element={<Update />} />
          <Route path="/Delete" element={<Delete />} />
          <Route path="/Settings" element={<Settings />} />
        </Routes>
      </Container>
    </Router>
  );
}
