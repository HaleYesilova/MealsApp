import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import CategoriesScreen from './screens/CategoriesScreen';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealDetailScreen from './screens/MealDetailScreen';


const Stack = createNativeStackNavigator(); 

export default function App() {
  return (
    <>
    <StatusBar style = "dark"/>
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerStyle: { backgroundColor: `#808000`},
        headerTintColor:'black',
        contentStyle: {backgroundColor: `#2f4f4f`}
      }}
      >
        <Stack.Screen 
        name = "MealsCategories" 
        component={CategoriesScreen} 
        options={{
          title: 'All Categories',
        }}
        />
        <Stack.Screen 
        name = "MealsOverview" 
        component={MealsOverviewScreen} 
        //options={({route , navigation}) => {
          //const catId = route.params.categoryId;
          //return {
            //title: catId,
          //};
        //}}
        />

        <Stack.Screen name="MealDetail" component = {MealDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    
  },
});
