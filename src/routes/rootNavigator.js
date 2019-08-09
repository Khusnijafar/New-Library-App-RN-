import { createAppContainer, createStackNavigator, createSwitchNavigator } from "react-navigation";

import Login from "../screens/Login";
import Register from "../screens/Register";
import Home from "../screens/Home";
import AddBook from "../screens/Add"
import Loan from "../screens/Loan"
import BookDetail from "../screens/BookDetail" 
 

const AuthNavigator = createStackNavigator({
    Login, 
    Register
}, {
    initialRouteName: 'Login',
    headerMode: 'none'
})

const HomeNavigator = createStackNavigator({
    Home,
    AddBook,
    // Loan,
    BookDetail
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