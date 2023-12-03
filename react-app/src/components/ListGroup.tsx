function ListGroup() {
  let items = ["Chennai", "Coimbatore", "Maduri", "Thirunelveli"];
  //   items = [];
  const isEmptyCheck = () => {
    return items.length === 0 ? <p>No Items found</p> : null;
  };
  return (
    <>
      <h1>List</h1>
      {isEmptyCheck()}
      <ul className="list-group">
        {items.map((item) => (
          <li key={item} className="list-group-item">
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
