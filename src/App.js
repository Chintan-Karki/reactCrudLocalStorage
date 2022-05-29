import { BrowserRouter, Routes, Route } from "react-router-dom";
// pages
import HomePage from "./Pages/HomePage";
import ProfilesPage from "./Pages/ProfilesPage";
import EditDataPage from "./Pages/EditDataPage";
import Page404 from "./Pages/Page404";

// components
import Footer from "./Components/Footer";
import Header from "./Components/Header";

function App() {
	return (
		<>
			<BrowserRouter>
				<Header />
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="profiles" element={<ProfilesPage />} />
					<Route path="edit_detail" element={<EditDataPage />} />
					<Route path="*" element={<Page404 />} />
				</Routes>
			</BrowserRouter>
			<Footer />
		</>
	);
}

export default App;
