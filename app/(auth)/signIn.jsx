import { View, Text, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import FormField from "../../components/FormField";
import CustomButton from "../../components/CustomButton";
import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";

const SignIn = () => {
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View className="w-full min-h-[60vh] justify-center px-3">
          <Text className="text-2xl font-psemibold text-white text-center">
            Log in to CoqTel
          </Text>
          <FormField title="Email" placeholder="Email" otherStyles="mt-7" />
          <FormField
            title="Password"
            placeholder="Password"
            otherStyles="mt-7"
          />
          <CustomButton title="Sign In" containerStyles="mt-7" />
          <View className="justify-center pt-5 flex-row gap-2">
            <Text className="text-lg text-gray-100 font-pregular">
              Don't have an Account?
            </Text>
            <Link
              href="/signUp"
              className="text-lg font-psemibold text-secondary"
            >
              Sign Up
            </Link>
            <Link
              href="/home"
              className="text-lg font-psemibold text-secondary"
            >
              Home
            </Link>
          </View>
        </View>
      </ScrollView>
      <StatusBar backgroundColor="#161622" style="light" />
    </SafeAreaView>
  );
};

export default SignIn;
