import styled from "styled-components";


export const TodoHeader = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-bottom: 1px solid black;
  margin: 1rem;
`;

export const TodoCardItem = styled.div`
  padding: 1rem;
  text-decoration: ${({ isDone }) => (isDone ? "line-through" : "none")};
`;
