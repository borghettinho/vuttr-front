import styled from "styled-components";

const Card = styled.div`
  border: 1px solid #ebeaed;
  border-radius: 5px;
  padding: 0.5em;

  &:hover {
    box-shadow: 0 5px 7px rgba(0, 0, 0, 0.05);
  }
`;

const CardHeader = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export { Card, CardHeader };
