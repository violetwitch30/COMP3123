import logo from './logo.svg';
import './App.css';
import Student from './student';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                {/*<p>*/}
                {/*    Edit <code>src/App.js</code> and save to reload.*/}
                {/*</p>*/}
                {/*<a*/}
                {/*    className="App-link"*/}
                {/*    href="https://reactjs.org"*/}
                {/*    target="_blank"*/}
                {/*    rel="noopener noreferrer"*/}
                {/*>*/}
                {/*    Learn React*/}
                {/*</a>*/}
                <h1>Welcome to Full Stack Development - I</h1>
                <h2>React JS Programming Week07 Lab Exercise</h2>
                <Student sid={101504996} name="Fidan Zeynalli" college="George Brown College" city="Toronto" />
            </header>
        </div>
    );
}

export default App;