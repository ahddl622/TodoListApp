const TodoSort = ({ onChangeSortOrder }) => {
  return (
    <div>
      <select onChange={onChangeSortOrder}>
        <option value="asc">오름차순</option>
        <option value="desc">내림차순</option>
      </select>
    </div>
  );
};

export default TodoSort;
