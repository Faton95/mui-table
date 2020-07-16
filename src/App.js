import React, {useState, useEffect} from 'react';
import MUIDataTable from "mui-datatables";
import { take, pipe, map } from 'ramda'

function App() {

    const [list, setList] = useState([])
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(res => res.json())
            .then(data => setList(data))
    }, [])
    const names = Object.keys(list[0] || [])


    console.warn("list", list)

    const data = [
        ["Joe James", "Test Corp", "Yonkers", "NY"],
        ["John Walsh", "Test Corp", "Hartford", "CT"],
        ["Bob Herm", "Test Corp", "Tampa", "FL"],
        ["James Houston", "Test Corp", "Dallas", "TX"],
    ];

    const options = {
        filterType: 'checkbox',
    };
  return (
    <div className="App">
        <MUIDataTable
            title={"Employee List"}
            data={data}
            columns={names}
            options={options}
        />
    </div>
  );
}

export default App;
