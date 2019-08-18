import {createStackNavigator, createAppContainer} from "react-navigation"
import firstPage from "./firstPage";
import secondPage from "./secondPage";
import mainPage from "./main/mainPage";
import logIn from "./logIn/logIn";
import restaurantGrid from "./order/restaurantGrid";
import Menu from "./order/menu";
import MenuDetails from "./order/menuDetails";

const App = createStackNavigator(
  {
    Home: { screen: mainPage},
    second: {screen: secondPage},
    main: { screen: mainPage },
    logIn: { screen: logIn},
    restaurantGrid: {screen: restaurantGrid},
    menu: {screen: Menu},
    menuDetails: {screen: MenuDetails}
  },
  {initialRouteName: "Home", headerMode: "none"}
);

export default createAppContainer(App)