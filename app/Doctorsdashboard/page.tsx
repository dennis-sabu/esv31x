import React from 'react';
import SideNavbar from '../components/sidenavbar';
import DoctorDashboard from '../components/doctordashboard';

const page = () => {
  return (
    <div className="flex">
      <SideNavbar />
      <div className="flex-1">
        <DoctorDashboard />
      </div>
    </div>
  );
};

export default page;