import React from "react";

import Navigation from "./Navigation";
import { PaperProvider } from "react-native-paper";

const App = () => {
	return (
		<PaperProvider>
			<Navigation />
		</PaperProvider>
	)
}

export default App;