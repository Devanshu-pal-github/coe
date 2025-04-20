import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Landing & Login
import Landing from './pages/Landing';
import Login from './pages/Login/index';

// Admin Pages
import AdminLayout from './pages/Admin/components/Layout/index';    // this is the proper way (add index)
import AdminDashboard from './pages/Admin/Dashboard';
import ListEvent from './pages/Admin/ListEvent';
import ManageEvents from './pages/Admin/ManageEvents';
import EventDetail from './pages/Admin/EventDetail';

// Student Pages
import StudentLayout from './pages/Student/components/Layout';
import StudentDashboard from './pages/Student/Dashboard';
import EventRegistration from './pages/Student/EventRegistration';
import PastEvents from './pages/Student/PastEvents';
import RegisteredEvents from './pages/Student/RegisteredEvents';
import UpcomingEvents from './pages/Student/UpcomingEvents';

const App = () => {
  return (
    <Router>
      <Routes>

        {/* Public Routes */}
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />

        {/* Admin Routes */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminDashboard />} />
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="list-events" element={<ListEvent />} />
          <Route path="manage-events" element={<ManageEvents />} />
          <Route path="event-detail" element={<EventDetail />} />
        </Route>

        {/* Student Routes */}
        <Route path="/student" element={<StudentLayout />}>
          <Route index element={<StudentDashboard />} />
          <Route path="dashboard" element={<StudentDashboard />} />
          <Route path="register-event" element={<EventRegistration />} />
          <Route path="past-events" element={<PastEvents />} />
          <Route path="registered-events" element={<RegisteredEvents />} />
          <Route path="upcoming-events" element={<UpcomingEvents />} />
        </Route>

      </Routes>
    </Router>
  );
};

export default App;
