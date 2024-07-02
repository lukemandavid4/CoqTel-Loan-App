import { View, Text, SafeAreaView } from "react-native";
import { Link } from "expo-router";

const Welcome = () => {
  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-primary">
      <Text className="text-lg font-extrabold">
        WELCOME TO COQTEL MOBILE LOANS
      </Text>
      <Text className="italic">Your Trusted and Reliable Loan Partner</Text>
      <Link href="home">Home</Link>
    </SafeAreaView>
  );
};

export default Welcome;
