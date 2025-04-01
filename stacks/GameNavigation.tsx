import React from 'react';
import { GameNavigation as Navigation } from '../types/navigation';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View } from 'react-native';
import { Text } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import Bet from '../screens/Bet';
import Header from '../components/Header';

const Stack = createNativeStackNavigator<Navigation>();

const GameNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ header: () => <Header /> }}>
                <Stack.Screen options={{ headerTitle: "Aposta" }} name='bet' component={Bet} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default GameNavigation;