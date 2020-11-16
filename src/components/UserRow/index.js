import React from "react";

function UserRow(props) {
    return (
        <>
            <tr>
            <th scope="row">{props.id}</th>
            <td>{props.name}</td>
            <td>{props.department}</td>
            <td>{props.position}</td>
            </tr>
        </>
    );
}

export default UserRow;
