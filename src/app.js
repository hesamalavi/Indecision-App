// import React from 'react';
console.log('app.js is runniddsng');

// JSX - Javascript XML is a syntax extension to JavaScript
const app = {
  title: 'Indecision App',
  subtitle: 'This is subtitle',
  options: []
};
const onFormSubmit = e => {
  e.preventDefault();
  const option = e.target.elements.option.value;
  if (option) {
    app.options.push(option);
    e.target.elements.option.value = '';
  }
  renderForm();
};

const removeAll = () => {
  app.options = [];
  renderForm();
};

const onMakeDecision = () => {
  const randomNum = Math.floor(Math.random() * app.options.length);
  const option = app.options[randomNum];
  alert(option);
};
const appRoot = document.getElementById('app');

const renderForm = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}

      <p>{app.options.length > 0 ? `Here are your options:` : 'no options'}</p>
      <button disabled={app.options.length === 0} onClick={onMakeDecision}>
        What should I do?
      </button>
      <button onClick={removeAll}>Remove All</button>
      <ol>
        {app.options.map(option => (
          <li key={option}>{option}</li>
        ))}
      </ol>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option"></input>
        <button>Add Option</button>
      </form>
    </div>
  );
  ReactDOM.render(template, appRoot);
};

renderForm();
