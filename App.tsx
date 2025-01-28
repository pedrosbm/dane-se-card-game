import React from "react";

import { PaperProvider } from "react-native-paper";
import { GameProvider } from "./context/GameContext"

import Navigation from "./Navigation";

const App = () => {
	return (
		<PaperProvider>
			<GameProvider>
				<Navigation />
			</GameProvider>
		</PaperProvider>
	)
}

export default App;