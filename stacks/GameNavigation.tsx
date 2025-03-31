import React from 'react';
import { GameNavigation } from '../types/navigation';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View } from 'react-native';
import { Text } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import Bet from '../screens/Bet';

const Stack = createNativeStackNavigator<GameNavigation>();

const GameNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='bet' component={Bet}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default GameNavigation;