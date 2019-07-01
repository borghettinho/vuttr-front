import styled from "styled-components";

const TextInput = styled.input`
  border-radius: 5px;
  font-family: "Source Sans Pro";
  color: #170c3a;
  transition: ease-out 200ms;

  background-color: #f5f4f6;
  border: 1px solid #ebeaed;

  &:focus {
    background-color: #ebeaed;
    border: 1px solid #dedce1;
    transition: ease-out 200ms;
    outline: none;
  }
`;

export { TextInput };
