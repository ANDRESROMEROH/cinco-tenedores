import React from 'react'
import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Restaurants from '../screens/Restaurants';
import Account from '../screens/Account';
import Favorites from '../screens/Favorites';
import Search from '../screens/Search';
import TopRestaurants from '../screens/TopRestaurants';

const Tab = createBottomTabNavigator();

const Navigation = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name='restaurants' component={Restaurants} options={{ title: 'Resturantes' }} />
                <Tab.Screen name='account' component={Account} options={{ title: 'Cuenta' }} />
                <Tab.Screen name='favorites' component={Favorites} options={{ title: 'Favoritos' }} />
                <Tab.Screen name='search' component={Search} options={{ title: 'Buscar' }} />
                <Tab.Screen name='top-restaurants' component={TopRestaurants} options={{ title: 'Top 5' }} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default Navigation
