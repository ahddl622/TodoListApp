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

export const TodoInput = styled.input`
  font-size: 16px;
  height: 2.1rem;
  width: ${(props) => props.inputWidth};
  margin-right: 1rem;
  border-radius: 10px;
  border: 1px solid #999;
`;

export const TodoInputBox = styled.form`
  display: flex;
  justify-content: space-between;
`;

export const AddTodoBtn = styled.button`
  margin-right: 1rem;
  width: 7rem;
  color: white;
  background-color: skyblue;
  border: none;
  border-radius: 1rem;
`;

export const TodoItemList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
`;

export const TodoBody = styled.div`
  margin: 1rem;
`;

export const TodoCardItemContainer = styled.article`
  border: 1px solid black;
  padding: 1rem;
  border-radius: 0.5rem;
  margin-right: 1rem;

  width: 20rem;
  height: 20rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
