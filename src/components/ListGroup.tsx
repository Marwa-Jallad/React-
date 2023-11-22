function ListGroup() {
  const items = ["New York", "San Fransisco", "Tokyo", "London", "Paris"];
  return (
    <>
      <h1>List Groupe</h1>
      {items.length === 0 && <p>No Item Found</p>}
      <ul className="list-group">
        {items.map((item) => (
          <li
            className="list-group-item"
            key={item}
            onClick={() => console.log(item)}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
export default ListGroup;
