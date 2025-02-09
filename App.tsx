import React from "react";

import { MD3DarkTheme, PaperProvider } from "react-native-paper";
import { GameProvider } from "./context/GameContext"

import Main from "./Main";

const App = () => {
	return (
		<PaperProvider theme={MD3DarkTheme}>
			<GameProvider>
				<Main />
			</GameProvider>
		</PaperProvider>
	)
}

export default App;