import React from "react";

const List = ({ list }) => {
  return (
    <>
      {list?.map((li) => (
        <div className="person" key={li.id}>
          <img src={li.image} alt="name" />
          <h4 className="person">{li.name}</h4>
        </div>
      ))}
    </>
  );
};

export default List;
