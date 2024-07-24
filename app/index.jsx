import { View, Text, ScrollView } from "react-native";
import { router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "../components/CustomButton";
import { StatusBar } from "expo-status-bar";

const Welcome = () => {
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="justify-center items-center h-full px-8 gap-4">
          <Text className="text-2xl font-pextrabold text-white text-center">
            WELCOME
          </Text>
          <Text className="italic text-secondary font-pbold text-base">
            Your Trusted and Reliable Loan Partner
          </Text>
        </View>
        <CustomButton
          title="Get Started"
          containerStyles="w-full absolute bottom-[20px]"
          handlePress={() => router.push("/signIn")}
        />
      </ScrollView>
      <StatusBar backgroundColor="#161622" style="light" />
    </SafeAreaView>
  );
};

export default Welcome;
