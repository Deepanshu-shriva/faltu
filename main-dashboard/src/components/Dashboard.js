import React from 'react';
import styled from 'styled-components';

const DashboardContainer = styled.div`
  margin-left: 250px; /* Adjust based on sidebar width */
  padding: 20px;
`;

const Dashboard = () => {
  return (
    <DashboardContainer>
      <h2>Dashboard Overview</h2>
      {/* Add dashboard components and layout here */}
    </DashboardContainer>
  );
};

export default Dashboard;
