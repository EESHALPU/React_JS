import Home from './component/Home';
import ReactDOM from 'react-dom';

const App=()=>{
    return(
        <div>
        <Home/>
        </div>
    )
}

ReactDOM.render(<App/>,document.getElementById('root'));
