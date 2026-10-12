import { useColorScheme } from "@/hooks/use-color-scheme";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import "react-native-reanimated";
import "../global.css";

const CustomDarkTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    background: "#171717", // Deep dark background
    card: "#171717", // Header/Navbar backgrounds
    text: "#FFFFFF",
    border: "#262626", // Subtle borders
    primary: "#EAB308", // Gold accent color
  },
};

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider
      value={colorScheme === "dark" ? CustomDarkTheme : DefaultTheme}
    >
      <Stack
        screenOptions={{ animation: "slide_from_right", headerShown: false }}
      >
        <Stack.Screen name="(tabs)" />
        <Stack.Screen
          name="modal"
          options={{
            presentation: "modal",
            animation: "slide_from_bottom", // Modals can have their own specific animation!
          }}
        />
      </Stack>
      <StatusBar style={colorScheme === "dark" ? "light" : "dark"} />
    </ThemeProvider>
  );
}
