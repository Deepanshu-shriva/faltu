import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.header`
  width: 1364px; /* Fixed width */
  height: 90px; /* Fixed height */
  position: fixed; /* Fix the header in place */
  top: 75px; /* Align with the top of the viewport */
  left: 76px; /* Offset from the left side (assuming this aligns with your sidebar) */
  padding: 10px 40px; /* Padding inside the header */
  gap: 0px; /* No gap between child elements */
  border: 0px 0px 0px 2px solid #ccc; /* Border on the left side only */
  border-left: 2px solid #eaebff; /* Left border with specified color */
  background: #ffffff; /* Background color */
  color: #333; /* Text color */
  display: flex;
  justify-content: space-between; /* Space between child elements */
  align-items: center; /* Center items vertically */
  opacity: 1; /* Ensure header is visible */
`;
// Styled search input container
const SearchContainer = styled.div`
  width: 306px; /* Fixed width */
  height: 48px; /* Height */
  padding: 8px 18px 8px 12px; /* Padding inside the search container */
  gap: 12px; /* Gap between items inside the container */
  border-radius: 8px 0px 0px 0px; /* Rounded top-left corner */
  border: 0.5px solid #cccccc; /* Border with specified color */
  background: #fefefe; /* Background color */
  display: flex; /* Use flex to align items */
  align-items: center; /* Center items vertically */
  opacity: 1; /* Ensure it is visible */
`;
// Styled search input field
const SearchInput = styled.input`
  border: none; /* Remove default border */
  background: transparent; /* Transparent background to blend with container */
  outline: none; /* Remove default focus outline */
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  padding: 0; /* Remove padding */
  font-size: 16px; /* Font size */
`;
const Header = () => {
  return (
    <HeaderContainer>
      <SearchContainer>
        <SearchInput type="text" placeholder="Search anything..." />
      </SearchContainer>
      <h1>Header</h1>
    </HeaderContainer>
  );
};
export default Header;
