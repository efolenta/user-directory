import React from "react";

const Row = ({id, name, department, position}) => (
  <tr>
    <th scope="row">{id}</th>
    <td>{name}</td>
    <td>{department}</td>
    <td>{position}</td>
  </tr>
);

/*
  Table component written as an ES6 class
*/
class UserTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
            "id": 1,
            "name": "Boris Baldwin",
            "department": "Produce",
            "position": "Sales"
        },
        {
            "id": 2,
            "name": "Sacha Wilcox",
            "department": "Meat",
            "position": "Butcher"
        },
        {
            "id": 3,
            "name": "Tiya Russo",
            "department": "Spirits",
            "position": "Wine Expert"
        },
        {
            "id": 4,
            "name": "Barry O'Connor",
            "department": "Seafood",
            "position": "Fish Cleaner"
        },
        {
            "id": 5,
            "name": "Ronnie Lamb",
            "department": "Deli",
            "position": "Platter Planner"
        },
        {
            "id": 6,
            "name": "Ariya Holloway",
            "department": "Bakery",
            "position": "Cake Specialist"
        },
        {
            "id": 7,
            "name": "Timur Mohamed",
            "department": "Health/Beauty",
            "position": "Make Up"
        },
        {
            "id": 8,
            "name": "Darragh Chadwick",
            "department": "Front",
            "position": "Cart Runner"
        },
        {
            "id": 9,
            "name": "Abdulrahman Bradley",
            "department": "Back",
            "position": "Manager"
        },
        {
            "id": 10,
            "name": "Aneesa Burnett",
            "department": "Back",
            "position": "Stocker"
        },
        {
            "id": 11,
            "name": "Reya Cooley",
            "department": "Front",
            "position": "Cashier"
        },
        {
            "id": 12,
            "name": "Khalil Coombes",
            "department": "Front",
            "position": "Bagger"
        },
        {
            "id": 13,
            "name": "Mila-Rose Thatcher",
            "department": "Front",
            "position": "Manager"
        }
    ],
    };
    
    // http://reactkungfu.com/2015/07/why-and-how-to-bind-methods-in-your-react-component-classes/
    // bind the context for compareBy & sortBy to this component instance
    this.compareBy.bind(this);
    this.sortBy.bind(this);
  }
  
  compareBy(key) {
    return function (a, b) {
      if (a[key] < b[key]) return -1;
      if (a[key] > b[key]) return 1;
      return 0;
    };
  }
 
  sortBy(key) {
    let arrayCopy = [...this.state.data];
    arrayCopy.sort(this.compareBy(key));
    this.setState({data: arrayCopy});
  }
    
  render() {
    const rows = this.state.data.map( (rowData) => <Row {...rowData} />);

    return (
      <table className="table">
      <thead>
        <tr>
          <th onClick={() => this.sortBy('id')} >ID</th>
          <th onClick={() => this.sortBy('name')}>Name</th>
          <th onClick={() => this.sortBy('department')}>Department</th>
          <th onClick={() => this.sortBy('position')}>Position</th>
        </tr>
      </thead>
      <tbody>
        {rows}
      </tbody>
    </table>
    );
    
  }
}

export default UserTable;
