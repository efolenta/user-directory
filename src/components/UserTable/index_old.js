import React from "react";

function UserTable(props) {
  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Department</th>
            <th scope="col">Position</th>
          </tr>
        </thead>
        <tbody>
          {props.children}
        </tbody>
      </table>
    </>
  );
}

export default UserTable;
