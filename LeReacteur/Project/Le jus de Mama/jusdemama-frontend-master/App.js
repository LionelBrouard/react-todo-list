import React, { useState, useEffect } from "react";
import { AsyncStorage, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  Ionicons,
  FontAwesome,
  Entypo,
  AntDesign,
  SimpleLineIcons,
  EvilIcons,
  Feather,
  View
} from "@expo/vector-icons";
import ProductsScreen from "./containers/ProductsScreen";
import ProfileScreen from "./containers/ProfileScreen";
import SignInScreen from "./containers/SignInScreen";
import SignUpScreen from "./containers/SignUpScreen";

import FavScreen from "./containers/FavScreen";
import MapScreen from "./containers/MapScreen";
import BasketScreen from "./containers/BasketScreen";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [userToken, setUserToken] = useState(null);

  const setToken = async token => {
    if (token) {
      AsyncStorage.setItem("userToken", token);
    } else {
      AsyncStorage.removeItem("userToken");
    }

    setUserToken(token);
  };

  useEffect(() => {
    // Fetch the token from storage then navigate to our appropriate place
    const bootstrapAsync = async () => {
      // We should also handle error for production apps
      const userToken = await AsyncStorage.getItem("userToken");

      // This will switch to the App screen or Auth screen and this loading
      // screen will be unmounted and thrown away.
      setIsLoading(false);
      setUserToken(userToken);
    };

    bootstrapAsync();
  }, []);

  return (
    <NavigationContainer>
      {isLoading ? null : userToken === null ? ( // We haven't finished checking for the token yet
        // No token found, user isn't signed in
        <Stack.Navigator>
          <Stack.Screen
            name="SignIn"
            options={{ header: () => null, animationEnabled: false }}
          >
            {() => <SignInScreen setToken={setToken} />}
          </Stack.Screen>
          <Stack.Screen
            name="SignUp"
            options={{ header: () => null, animationEnabled: false }}
          >
            {() => <SignUpScreen setToken={setToken} />}
          </Stack.Screen>
        </Stack.Navigator>
      ) : (
        // User is signed in
        <Stack.Navigator>
          <Stack.Screen
            name="Tab"
            options={{ header: () => null, animationEnabled: false }}
          >
            {() => (
              <Tab.Navigator
                tabBarOptions={{
                  activeTintColor: "#4B3B0E",
                  inactiveTintColor: "#FEBE3D"
                }}
              >
                <Tab.Screen
                  name="Products"
                  options={{
                    tabBarLabel: "Products",
                    tabBarIcon: ({ color, size }) => (
                      <AntDesign name={"home"} size={size} color={color} />
                    )
                  }}
                >
                  {() => (
                    <Stack.Navigator>
                      <Stack.Screen
                        name="Products"
                        options={{
                          title: "Le jus de Mama",
                          headerStyle: { backgroundColor: "#FEBE3D" },
                          headerTitleStyle: { color: "#4B3B0E" }
                        }}
                      >
                        {() => <ProductsScreen />}
                      </Stack.Screen>

                      <Stack.Screen
                        name="Profile"
                        options={{
                          title: "User Profile"
                        }}
                      >
                        {() => <ProfileScreen />}
                      </Stack.Screen>
                    </Stack.Navigator>
                  )}
                </Tab.Screen>

                <Tab.Screen
                  name="Map"
                  options={{
                    tabBarLabel: "Map",
                    tabBarIcon: ({ color, size }) => (
                      <Feather name={"map"} size={size} color={color} />
                    )
                  }}
                >
                  {() => (
                    <Stack.Navigator>
                      <Stack.Screen
                        name="Map"
                        options={{
                          title: "Map",
                          headerStyle: { backgroundColor: "#FEBE3D" },
                          headerTitleStyle: { color: "#4B3B0E" }
                        }}
                      >
                        {() => <MapScreen setToken={setToken} />}
                      </Stack.Screen>
                    </Stack.Navigator>
                  )}
                </Tab.Screen>
                <Tab.Screen
                  name="Basket"
                  options={{
                    tabBarLabel: "Panier",
                    tabBarIcon: ({ color, size }) => (
                      <SimpleLineIcons
                        name={"handbag"}
                        size={size}
                        color={color}
                      />
                    )
                  }}
                >
                  {() => (
                    <Stack.Navigator>
                      <Stack.Screen
                        name="Panier"
                        options={{
                          title: "Mon Panier",

                          headerStyle: { backgroundColor: "#FEBE3D" },
                          headerTitleStyle: { color: "#4B3B0E" }
                        }}
                      >
                        {() => <BasketScreen setToken={setToken} />}
                      </Stack.Screen>
                    </Stack.Navigator>
                  )}
                </Tab.Screen>
                <Tab.Screen
                  name="Profil"
                  options={{
                    tabBarIcon: ({ color, size }) => (
                      <FontAwesome
                        name={"user-circle-o"}
                        size={size}
                        color={color}
                      />
                    )
                  }}
                >
                  {() => (
                    <Stack.Navigator>
                      <Stack.Screen
                        name="Profil"
                        options={{
                          title: "MON COMPTE",
                          headerStyle: { backgroundColor: "white" },
                          headerTitleStyle: { color: "#4B3B0E" }
                        }}
                      >
                        {() => <ProfileScreen />}
                      </Stack.Screen>
                      <Stack.Screen
                        name="SignIn"
                        options={{
                          header: () => null,
                          animationEnabled: false
                        }}
                      >
                        {() => <SignInScreen setToken={setToken} />}
                      </Stack.Screen>
                      <Stack.Screen
                        name="SignUp"
                        options={{
                          header: () => null,
                          animationEnabled: false
                        }}
                      >
                        {() => <SignUpScreen setToken={setToken} />}
                      </Stack.Screen>
                    </Stack.Navigator>
                  )}
                </Tab.Screen>
              </Tab.Navigator>
            )}
          </Stack.Screen>
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
