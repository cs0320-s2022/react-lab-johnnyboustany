import React from 'react';
import './App.css';

function TextBox(props: any) {
  // @ts-ignore
  return (
    <div className="TextBox">
        <header className={'TextBox-header'}>
            {props.label}
            <input type={"text"} onChange={event => props.change(event.target.value)}/>
        </header>
    </div>
  );
}

export default TextBox;