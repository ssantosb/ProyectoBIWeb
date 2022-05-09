import './App.css';
import { useState } from 'react';
import $ from 'jquery';

function App() {
  const [input, setInput] = useState('');
  return (
  <body>
    <div className="s003">
      <form>
        <div className="inner-form">
          <div className="input-field first-wrap">
            <div className="input-select">
            </div>
          </div>
          <div className="input-field second-wrap">
            <input id="search" value={input} onInput={e => setInput(e.target.value)} type="text" placeholder="Enter Keywords?" />
          </div>
          <div className="input-field third-wrap">
            <button className="btn-search" type="button" onClick={()=>{
              let prueba = {
                "study_and_condition": input
              }
              prueba = JSON.parse(JSON.stringify(prueba))

              fetch("http://127.0.0.1:8000/predict", {
                method: "POST",
                headers: {
                  "Content-type": "application/json",
                  'Access-Control-Allow-Origin': '*'
                },
                prueba
              }).then(r=>console.log(r));
              
            }} >
              <svg className="svg-inline--fa fa-search fa-w-16" aria-hidden="true" data-prefix="fas" data-icon="search" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path fill="currentColor" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
              </svg>
            </button>
          </div>
        </div>
      </form>
    </div>
  </body>
  );
}

export default App;
