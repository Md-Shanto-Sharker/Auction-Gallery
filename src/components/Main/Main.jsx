import React, { useEffect, useState } from "react";
import Tables from "./Tables";

const Main = ({ handldAdd }) => {
  const [table, setTable] = useState([]);

  useEffect(() => {
    fetch("gallery.json")
      .then((res) => res.json())
      .then((data) => setTable(data));
  }, []);

  console.log(table);
  return (
    <div>
      <div className="shadow-2xl bg-white rounded-2xl">
        <table className="table ">
          {/* head */}
          <thead className="border-b-2 border-[#DCE5F3] ">
            <tr>
              <th>Items</th>
              <th>Current Bid</th>
              <th>Time Left</th>
              <th>Bid Now</th>
            </tr>
          </thead>
          {table.map((tab) => (
            <Tables handldAdd={handldAdd} tab={tab}></Tables>
          ))}
        </table>
      </div>
    </div>
  );
};

export default Main;
