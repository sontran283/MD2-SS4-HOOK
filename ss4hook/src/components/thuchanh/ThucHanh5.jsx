import { useState } from "react";

function ThucHanh5() {
    const [filter, setFilter] = useState('');
    const [data, setData] = useState([
        { name: 'John', age: 25 },
        { name: 'Mary', age: 30 },
        { name: 'Peter', age: 35 },
        { name: 'Jane', age: 40 },
    ]);

    const handleFilterChange = (event) => {
        setFilter(event.target.value);
    };

    const filteredData = data.filter(
        (item) => item.name.toLowerCase().indexOf(filter.toLowerCase()) !== -1
    );

    return (
        <div>
            <input type="text" value={filter} onChange={handleFilterChange} />
            <ul>
                {filteredData.map((item, index) => (
                    <li key={index}>
                        {item.name} ({item.age})
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ThucHanh5;