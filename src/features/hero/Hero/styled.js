import styled from "styled-components";

export const Wrapper = styled.article`
  display: flex;
  flex-direction: column;
  padding: 20px 900px 20px 20px;
  box-shadow: inset 0 0 1em grey;
`;

export const Item = styled.p`
  border: 1px solid black;
  font-size: 15px;
  font-weight: 600;
  text-transform: uppercase;
  padding: 10px;
  border-radius: 5%;
  width: 400px;
  letter-spacing: 1.5px;
`;