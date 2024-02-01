import { SortContainer } from "../../style/TodoStyle";

const TodoSort = ({ onChangeSortOrder }) => {
  return (
    <div>
      <SortContainer onChange={onChangeSortOrder}>
        <option value="asc">오름차순</option>
        <option value="desc">내림차순</option>
      </SortContainer>
    </div>
  );
};

export default TodoSort;
