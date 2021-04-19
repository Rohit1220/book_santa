import { createDrawerNavigator } from "react-navigation-drawer";
import ProfileScreen from "../screens/ProfileScreen";
import { AppTabNavigator } from "./AppTabNavigator";
import SideDrawerMenu from "./SideDrawerMenu";

 export const AppDrawerNavigator = createDrawerNavigator({
     Home:{screen:AppTabNavigator},
    Profile:{screen:ProfileScreen},
 },
 {
 contentComponent:SideDrawerMenu
 },
 {
     initialRouteName:'Home',
 }
 )