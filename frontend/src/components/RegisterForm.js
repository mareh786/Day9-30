import React, { useState } from 'react';
import axios from 'axios';

function RegisterForm() {
  const [form, setForm] = useState({
    name: '', age: '', visiting_to: '', in_time: '', out_time: ''
  });
  const [msg, setMsg] = useState('');

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/register', form);
      setMsg('Entry added successfully!');
    } catch (err) {
      setMsg(err.response?.data?.msg || 'Error');
    }
  };

  return (
    <div>
      <h2>Register Entry</h2>
      <form onSubmit={handleSubmit}>
        {['name', 'age', 'visiting_to', 'in_time', 'out_time'].map(field => (
          <div key={field}>
            <label>{field.replace('_', ' ')}: </label>
            <input name={field} value={form[field]} onChange={handleChange} required />
          </div>
        ))}
        <button type="submit">Submit</button>
      </form>
      <p>{msg}</p>
    </div>
  );
}

export default RegisterForm;
