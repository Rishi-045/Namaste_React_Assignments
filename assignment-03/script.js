import React from 'react';
import ReactDOM from 'react-dom/client';
import bajrangbali from './bajrangbali.jpg'
import user from './user.jpg'

const HeaderComponent = () => (
<div>
    <div className='header-container'>
    <div className='img-div'>
    <img src={bajrangbali} alt='jai shree ram' id='header-img'/>
    <h2>Hanuman</h2>
    </div>
    <div className='input-div'>
     <input type='text'/>
    </div>
    <div className='userlogo-div'>
    <img src={user} alt='user' id='user-img'/>
    </div>

    </div>
</div>
);

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<HeaderComponent/>)

