import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Link,
  useLocation,
	Switch,
	Route
} from "react-router-dom";

import UserInput from './components/UserInput';
import Movie from './components/Movie';


function App() {

  return (
    <div className="App">

		<Router>

			<Switch>
				
				<Route exact path="/">
					<UserInput></UserInput>
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
