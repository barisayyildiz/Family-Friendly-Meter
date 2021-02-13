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
import User from './components/User';


function App() {

  return (
    <div className="App">

		<Router>

			<Switch>
				
				<Route exact path="/">
					<Input></Input>
				</Route>

				<Route path="/:id">
					<User></User>
				</Route>
			
			</Switch>




		</Router>



		
    </div>
  );
}

export default App;
