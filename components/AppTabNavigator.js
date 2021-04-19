import BookRequest from '../screens/BookRequest';
import BookDonate from '../screens/BookDonate';
import {createBottomTabNavigator} from 'react-navigation-tabs';

export const AppTabNavigator = createBottomTabNavigator({
    BookDonate:{screen:BookDonate},
    BookRequest:{screen:BookRequest},
})