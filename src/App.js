import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Link,
  useLocation,
	Switch,
	Route
} from "react-router-dom";

import Input from './components/Input';
import Movie from './components/Movie';


function App() {

  return (
    <div className="App">

		<Router>

			<Switch>
				
				<Route exact path="/">
					<Input></Input>
				</Route>

				<Route path="/:id">
					<Movie></Movie>
				</Route>
			
			</Switch>




		</Router>



		
    </div>
  );
}

export default App;
