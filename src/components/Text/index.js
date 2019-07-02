import styled from "styled-components";

const defaults = `
  color: #170c3a;
  font-family: 'Source Sans Pro', sans-serif;
  letter-spacing: 0.1rem;
`;

const H2 = styled.h2`
  ${defaults}
  font-size: 2.25rem;
  font-weight: 600;
`;

const H4 = styled.h4`
  ${defaults}
  font-size: 1.625rem;
  font-weight: 600;
`;

export { H2, H4 };
