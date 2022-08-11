import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';
import { Provider } from 'react-redux';


import CategoriesScreen from './screens/CategoriesScreen';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealDetailScreen from './screens/MealDetailScreen';
import FavoritesScreen from './screens/FavoritesScreen';
//import FavoritesContextProvider from './store/context/favorites-context';
import {store} from './store/redux/store';


const Stack = createNativeStackNavigator(); 
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
  <Drawer.Navigator
  screenOptions={{
    headerStyle: { backgroundColor: `#808000`},
    headerTintColor:'black',
    sceneContainerStyle: {backgroundColor: `#2f4f4f`},
    drawerContentStyle: { backgroundColor: '#808000'},
    drawerInactiveTintColor: 'white',
    drawerActiveTintColor: '#808000',
    drawerActiveBackgroundColor: `#2f4f4f`
  }}
  >
    <Drawer.Screen  
    name="Categories"  
    component={CategoriesScreen}  
    options={{
    title: 'All Categories',
    drawerIcon: ({color, size}) => (
    <Ionicons name="list" color  = {color} size={size}/>
    ),
       }}
    /> 
    <Drawer.Screen  
    name="Favorites"   
    component={FavoritesScreen}
     options={{
       drawerIcon: ({color, size}) => (
        <Ionicons name="star" color  = {color} size={size}/>
        ),
    }}
    />
  </Drawer.Navigator>
  )
  ;
}

export default function App() {
  return (
    <>
    <StatusBar style = "dark"/>
    {/*<FavoritesContextProvider>*/}
    <Provider store= {store}>
    <NavigationContainer>
      <Stack.Navigator 
      screenOptions={{
        headerStyle: { backgroundColor: `#808000`},
        headerTintColor:'black',
        contentStyle: {backgroundColor: `#2f4f4f`},
      }}
      >
        <Stack.Screen 
        name = "Drawer" 
        component={DrawerNavigator} 
        options={{
          headerShown: false
        }}
        />
        <Stack.Screen 
        name = "MealsOverview" 
        component={MealsOverviewScreen} 
        />
        <Stack.Screen 
        name="MealDetail" 
        component = {MealDetailScreen}
          options={{
          title: 'About the Meal',
          }}
        />
      </Stack.Navigator> 
    </NavigationContainer>
    </Provider>
   {/* </FavoritesContextProvider>*/}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    
  },
});
