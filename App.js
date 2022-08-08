// Import the screens
import Login from './components/Login';
import CreateAccount from './components/CreateAccount';
import Chat from './components/Chat';
// Import React Navigation
import { createStackNavigator, StackNavigator } from 'react-navigation'

// Create the navigator
const App = StackNavigator({
  Login: {
    screen: Login,
    navigationOptions: ({ navigation }) => ({
      header: null,
    })
  },
  CreateAccount: {
    screen: CreateAccount,
    navigationOptions: ({ navigation }) => ({
      header: null,
    })
  },
  Chat: {
    screen: Chat,
    navigationOptions: ({ navigation }) => ({
      header: null,
    })
  },
},
{
    initialRouteName: 'Login',
}
);

// Export it as the root component
export default App;