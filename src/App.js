import UserForm from "./Components/UserForm";
import UserDetailsTable from './Components/UserDetailsTable';

function App() {
	return (
		<div className="App flex items-center justify-center  flex-col">
			
			<UserForm />
      <UserDetailsTable/>
		</div>
	);
}

export default App;
