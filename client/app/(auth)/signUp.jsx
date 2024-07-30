import { View, Text, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import FormField from "../../components/FormField";
import CustomButton from "../../components/CustomButton";
import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";

const SignUp = () => {
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View className="w-full py-6 justify-center px-3">
          <Text className="text-2xl font-psemibold text-white text-center">
            Sign Up to CoqTel
          </Text>
          <FormField
            title="Full Name"
            placeholder="Full Name"
            otherStyles="mt-7"
          />
          <FormField
            title="Phone Number"
            placeholder="Phone Number"
            otherStyles="mt-7"
            number="+254"
          />
          <FormField title="Email" placeholder="Email" otherStyles="mt-7" />
          <FormField
            title="Password"
            placeholder="Password"
            otherStyles="mt-7"
          />
          <CustomButton title="Sign Up" containerStyles="mt-7" />
          <View className="justify-center pt-5 flex-row gap-2">
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
        </View>
      </ScrollView>
      <StatusBar backgroundColor="#161622" style="light" />
    </SafeAreaView>
  );
};

export default SignUp;
