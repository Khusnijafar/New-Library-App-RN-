import { createAppContainer, createStackNavigator, createSwitchNavigator } from "react-navigation";

import Login from "../screens/Login";
import Register from "../screens/Register";
import Home from "../screens/Home";
import AddBook from "../screens/Add"

const AuthNavigator = createStackNavigator({
    Login, 
    Register
}, {
    initialRouteName: 'Login',
    headerMode: 'none'
})

const HomeNavigator = createStackNavigator({
    Home,
    AddBook
}, {
    initialRouteName: 'Home',
    headerMode: 'none'
})

const SwitchNavigator = createSwitchNavigator({
    Auth: AuthNavigator,
    Home: HomeNavigator
},{
    initialRouteName: 'Auth',
})

export default createAppContainer(SwitchNavigator)