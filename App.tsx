import React from "react";

import { PaperProvider } from "react-native-paper";
import { GameProvider } from "./context/GameContext"

import Index from "./Index";

const App = () => {
	return (
		<PaperProvider>
			<GameProvider>
				<Index />
			</GameProvider>
		</PaperProvider>
	)
}

export default App;