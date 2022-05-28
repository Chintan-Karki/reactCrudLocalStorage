import HomePage from "./Pages/HomePage";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProfilesPage from "./Pages/ProfilesPage";
import EditDataPage from "./Pages/EditDataPage";
import Page404 from "./Pages/Page404";

function App() {
	return (
		<>
			<div className="flex flex-col justify-center items-center">
				<div className="my-2 mt-12 -mb-8 font-bold text-4xl w-4/5 lg:w-3/5">
					React CRUD
				</div>
			</div>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/profiles" element={<ProfilesPage />} />
					<Route path="/edit_detail" element={<EditDataPage />} />
					<Route path="/*" element={<Page404 />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
