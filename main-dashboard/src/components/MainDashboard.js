import React from "react";
import styled from "styled-components";
import Header from "./Header";
import Sidebar from "./Sidebar";
// Styled container for the main dashboard
const DashboardContainer = styled.div`
  width: 1364px; /* Fixed width */
  height: 931px; /* Fixed height */
  position: fixed; /* Absolute positioning */
  top: 93px; /* Offset from the top */
  left: 75px; /* Offset from the left */
  padding: 24px 40px; /* Padding inside the container */
  gap: 24px; /* Gap between child elements */
  background: #eaebff; /* Background color */
  opacity: 1; /* Ensure it is visible */
  display: flex;
  flex-direction: column; /* Arrange children vertically */
  align-items: flex-start; /* Align children to the start */
  justify-content: flex-start; /* Align children to the start */
  position: relative; /* Ensure child components are positioned correctly */
`;

const MainDashboard = () => {
  return (
    <DashboardContainer>
      <Header />
      <Sidebar />
      <h1>Dashboard</h1>
      {/* Add additional content or components here */}
    </DashboardContainer>
  );
};

export default MainDashboard;
