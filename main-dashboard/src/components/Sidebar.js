import React from "react";
import styled from "styled-components";
import { GiHamburgerMenu } from "react-icons/gi";
const SidebarContainer = styled.div`
  width: 76px;
  height: 1024px;
  gap: 0px;
  opacity: 0px;
  background-color: #f0f0f0; /* Optional: Add background color if needed */
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed; /* Make sure it stays in place */
  top: 75px; /* Align to the top */
  left: 0; /* Align to the left */
  z-index: 1000; /* Ensure it is above other content */
  opacity: 1; /* Make it visible */
  /* Add more styles as needed */
`;
const IconContainer = styled.div`
  width: 52px;
  height: 52px;
  position: absolute; /* Ensure it's positioned correctly */
  top: 21px;
  left: 12px;
  padding: 11px 0px 0px 0px;
  gap: 0px;
  border-radius: 48px 0px 0px 0px; /* Round the top-left corner */
  opacity: 1; /* Set to 1 to make it visible */
  background-color: #ccc; /* Optional background color for visibility */
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  /* Add additional styles if needed */
`;
const Sidebar = () => {
  return (
    <SidebarContainer>
      <IconContainer>
        <GiHamburgerMenu size={24} color="#333" /> {/* Use the icon here */}
        {/* <img src="/path/to/your/icon.png" alt="Sidebar Icon" /> */}
      </IconContainer>
      
      {/* Add navigation links or buttons here */}
    </SidebarContainer>
  );
};

export default Sidebar;
