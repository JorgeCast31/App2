import React, {FunctionComponent} from 'react';
import './App.css';
import Home from './view/Home';


interface IProps{}

const App : FunctionComponent<IProps>=(props) => {
    return (
        <div>
           <Home/> 
        </div>
    );
}

export default App;
