import { View, Text } from "react-native";
import { Stack } from "expo-router";

const AuthLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="signIn" options={{ headerShown: false }} />
      <Stack.Screen name="signUp" />
    </Stack>
  );
};

export default AuthLayout;
