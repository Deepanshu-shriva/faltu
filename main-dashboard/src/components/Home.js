import React from "react";
import MainDashboard from "./MainDashboard";
import styled from "styled-components";
const DashboardContainer = styled.div`
  width: 1440px; /* Fixed width */
  height: 1024px; /* Fixed height */
  top: -512px; /* Offset from the top */
  left: 946px; /* Offset from the left */
  gap: 0px; /* No gap between child elements */
  opacity: 1; /* Ensure it is visible */
  background: #eaebff; /* Background color */
  display: flex;
  align-items: center;
  justify-content: center; /* Center content if needed */
`;
const Home = () => {
  return (
    <div>
      <h1>Main Dashboard</h1>
      <DashboardContainer>
        <MainDashboard />
      </DashboardContainer>
    </div>
  );
};

export default Home;
