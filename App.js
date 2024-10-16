import React, { useState } from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from '@react-navigation/native';
import { PaperProvider, MD3DarkTheme, MD3LightTheme } from 'react-native-paper';
import AddExercise from "./components/AddExercise";
import Home from "./components/Home";
import ShowExercises from "./components/ShowExercises";
import { useFonts } from "expo-font";


const Drawer = createDrawerNavigator();



export default function App() {

  const [loaded] = useFonts({
    QuicksandFont: require('./assets/fonts/Quicksand-VariableFont_wght.ttf'),
  });

  const [exerciseList, setExerciseList] = useState([]);
  const [currentUnit, setCurrentUnit] = useState('km');

  const addNewExercise = (exercise) => {
    setExerciseList((prevList) => [...prevList, exercise]);
  };


  const theme = {
    ...MD3LightTheme,
    roundness: 3,
    colors: {
      ...MD3LightTheme.colors,
      primary: '#6e6e6eff',
      onPrimary: '#ffffff',
    }
  };

  if (!loaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <PaperProvider theme={theme}>
        <Drawer.Navigator>
          <Drawer.Screen name="Home" component={Home} />
          <Drawer.Screen name="Add Exercises"
            children={(props) => (
              <AddExercise
                {...props}
                addNewExercise={addNewExercise}
                setCurrentUnit={setCurrentUnit}
                currentUnit={currentUnit}
              />
            )}
          />
          <Drawer.Screen name="Show Exercises"
            children={(props) => (
              <ShowExercises
                {...props}
                exerciseList={exerciseList}
                currentUnit={currentUnit}
              />
            )}
          />
        </Drawer.Navigator>
      </PaperProvider>
    </NavigationContainer>
  );
}
