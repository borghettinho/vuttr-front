import styled from "styled-components";

const defaults = `
  color: #170c3a;
  font-family: 'Source Sans Pro', sans-serif;
  letter-spacing: 0.2em;
`;

const H2 = styled.h2`
  ${defaults}
  font-size: 36px;
`;

const H4 = styled.h4`
  ${defaults}
  font-size: 26px;
`;

export { H2, H4 };
