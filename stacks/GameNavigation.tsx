import React from 'react';
import { GameNavigation } from '../types/navigation';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View } from 'react-native';
import { Text } from 'react-native-paper';

const Stack = createNativeStackNavigator<GameNavigation>();

const GameNavigation = () => {
    return (
        <View>
            <Text>Sei n</Text>
        </View>
    );
};

export default GameNavigation;