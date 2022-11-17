import React from 'react';
import { useRef } from 'react';
import { Link } from 'react-router-dom';

// getting input value using useref

function Main() {
  const inputRef = useRef(null);
  return (
    <div className="myquiz=main">
      <h1 className="quizmainh1">My Quiz APP</h1>

      <ol>
        <li>you will be asked 20 questions</li>
        <li>you will be asked 20 questions</li>
        <li>you will be asked 20 questions</li>
        <li>you will be asked 20 questions</li>
        <li>you will be asked 20 questions</li>
      </ol>

      <form className="maindivform">
        <input
          ref={inputRef}
          type="text"
          placeholder="username"
          className="username"
        />
      </form>

      <div className="startquiz">
        <Link to="quiz">start</Link>
      </div>
    </div>
  );
}

export default Main;
