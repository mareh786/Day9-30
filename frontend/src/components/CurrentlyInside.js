import React, { useEffect, useState } from 'react';
import axios from 'axios';

function CurrentlyInside() {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/inside')
      .then(res => setEntries(res.data));
  }, []);

  return (
    <div>
      <h2>Currently Inside</h2>
      <table border="1">
        <thead>
          <tr>
            <th>Name</th><th>Age</th><th>Visiting To</th><th>In Time</th>
          </tr>
        </thead>
        <tbody>
          {entries.map(e => (
            <tr key={e.id}>
              <td>{e.name}</td>
              <td>{e.age}</td>
              <td>{e.visiting_to}</td>
              <td>{e.in_time}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CurrentlyInside;
