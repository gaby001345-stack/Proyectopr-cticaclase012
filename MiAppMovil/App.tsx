import { NavigationContainer } from "@react-navigation/native";
import StackNavigator from "./src/navigation/StackNavigator";
import { navigationRef } from "./src/navigation/NavigationService";
import { AuthProvider } from "./src/context/AuthContext";
import { LanguageProvider } from "./src/context/LanguageContext";
import { SkincareProvider } from "./src/context/SkincareContext";
import { ThemeProvider } from "./src/context/ThemeContext";

export default function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <AuthProvider>
          <SkincareProvider>
            <NavigationContainer ref={navigationRef}>
              <StackNavigator />
            </NavigationContainer>
          </SkincareProvider>
        </AuthProvider>
      </LanguageProvider>
    </ThemeProvider>
  );
}
