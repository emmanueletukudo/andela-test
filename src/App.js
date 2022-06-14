import React, { useState } from 'react';
import './App.css';

function App() {
  const [formValues, setFormValues] = useState([{ name: "", age: "", job: "" }]);
  const [show, setShow] = useState(false);
  const [result, setResult] = useState([]);

  const handleChange = (i, e) => {
    let newValues = [...formValues];
    newValues[i][e.target.name] = e.target.value;
    setFormValues(newValues);
  }

  const handleAdd = (e) => {
    e.preventDefault()
    setFormValues([...formValues, { name: "", age: "", job: "" }])
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    setShow(true);
    setResult(JSON.stringify(formValues));
  }

  return (
    <div className="App">
      <>
        <form onSubmit={handleSubmit} className='job-form'>
          {!show && <div className='input-wrapper'>
            {formValues.map((v, i) => (
              <>
                <input type="text" name="name" value={v.name} onChange={e => handleChange(i, e)} placeholder="name" /><br />
                <input type="text" name="age" value={v.age} onChange={e => handleChange(i, e)} placeholder="age" /><br />
                <input type="text" name="job" value={v.job} onChange={e => handleChange(i, e)} placeholder="job title" /><br />
              </>
            ))}

            <button onClick={handleAdd}>Add</button>
            <button onClick={handleSubmit}>Submit</button>
          </div>}
        </form>
        <div>
          {result}
        </div>
      </>
    </div>
  );
}

export default App;
