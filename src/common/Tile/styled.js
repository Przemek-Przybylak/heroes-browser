import styled from "styled-components";

export const Wrapper = styled.ul`
  margin: 50px auto;
  width: 1000px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  list-style: none;
`;

export const TileWrapper = styled.li`
  box-shadow: inset 0 0 1em grey;
  border-radius: 5%;
  padding: 10px;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Name = styled.p`
  height: 200px;
  margin: 20px;
  border: 1px solid black;
  font-size: 35px;
  font-weight: 600;
  letter-spacing: 1.5px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  text-align: center;
  `;