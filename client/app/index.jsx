import { View, Text, ScrollView } from "react-native";
import { router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "../components/CustomButton";
import { StatusBar } from "expo-status-bar";
import { Link } from "expo-router";

const Welcome = () => {
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="justify-center items-center h-full px-8 gap-4">
          <Text className="text-2xl font-pextrabold text-white">WELCOME</Text>
          <Text className="italic text-secondary font-pbold text-base">
            Your Trusted and Reliable Loan Partner
          </Text>
        </View>
        <View className="absolute bottom-[60px] w-full">
          <CustomButton
            title="Get Started"
            containerStyles="w-full"
            handlePress={() => router.push("/signUp")}
          />
        </View>
        <View className="flex-row gap-2 absolute bottom-6 mx-auto">
          <Text className="text-lg text-gray-100 font-pregular">
            Already have an Account?
          </Text>
          <Link
            href="/signIn"
            className="text-lg font-psemibold text-secondary"
          >
            Sign In
          </Link>
        </View>
      </ScrollView>
      <StatusBar backgroundColor="#161622" style="light" />
    </SafeAreaView>
  );
};

export default Welcome;
