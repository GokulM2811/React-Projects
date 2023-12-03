import { MouseEvent } from "react";

function ListGroup() {
  let items = ["Chennai", "Coimbatore", "Maduri", "Thirunelveli"];
  //   items = [];
  const handleClick = (event: MouseEvent) => console.log(event);
  return (
    <>
      <h1>List</h1>
      {items.length === 0 && <p>No Items found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li onClick={handleClick} key={item} className="list-group-item">
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
