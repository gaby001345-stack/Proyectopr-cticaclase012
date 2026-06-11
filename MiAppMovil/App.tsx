import { NavigationContainer } from "@react-navigation/native";
import StackNavigator from "./src/navigation/StackNavigator";
import { navigationRef } from "./src/navigation/NavigationService";
import { AuthProvider } from "./src/context/AuthContext";
import { LanguageProvider } from "./src/context/LanguageContext";
import { ThemeProvider } from "./src/context/ThemeContext";
import { Provider } from "react-redux";
import { store } from "./src/store";

export default function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <AuthProvider>
            <Provider store={store}>
              <NavigationContainer ref={navigationRef}>
                <StackNavigator />
              </NavigationContainer>
            </Provider>
        </AuthProvider>
      </LanguageProvider>
    </ThemeProvider>
  );
}