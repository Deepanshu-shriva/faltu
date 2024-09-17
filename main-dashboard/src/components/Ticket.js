import React from 'react';
import styled from 'styled-components';

const TicketContainer = styled.div`
  background: #fff;
  border: 1px solid #ddd;
  padding: 10px;
  margin-bottom: 10px;
`;

const Ticket = ({ title, status, details }) => {
  return (
    <TicketContainer>
      <h3>{title}</h3>
      <p>Status: {status}</p>
      <p>{details}</p>
    </TicketContainer>
  );
};

export default Ticket;
