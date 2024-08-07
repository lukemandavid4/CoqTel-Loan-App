import { View, Text, ScrollView, Alert } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import FormField from "../../components/FormField";
import CustomButton from "../../components/CustomButton";
import { Link } from "expo-router";
import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import axios from "axios";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [generalError, setGeneralError] = useState("");
  const handleSignIn = async () => {
    setPasswordError("");
    setGeneralError("");
    try {
      const response = await axios.post(
        "http://192.168.100.116:3000/api/user/login",
        {
          email,
          password,
        }
      );

      if (response.status === 200) {
        Alert.alert("Success", "You have signed in successfully!");
        router.push("/home");
      } else {
        Alert.alert("Error", "Invalid credentials. Please try again.");
      }
    } catch (error) {
      if (error.response && error.response.data) {
        const errorMessage = error.response.data.message;
        if (errorMessage.includes("password")) {
          setPasswordError(errorMessage);
        } else {
          setGeneralError(errorMessage);
        }
      } else {
        setGeneralError("An error occurred. Please try again.");
      }
    }
  };
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View className="w-full min-h-[60vh] justify-center px-3">
          <Text className="text-2xl font-psemibold text-white text-center">
            Log in to CoqTel
          </Text>
          <FormField
            title="Email"
            placeholder="Email"
            otherStyles="mt-7"
            value={email}
            onChange={setEmail}
          />
          <FormField
            title="Password"
            placeholder="Password"
            otherStyles="mt-7"
            value={password}
            onChange={setPassword}
          />
          {passwordError ? (
            <Text className="text-red-500 mt-1 font-pbold">
              {passwordError}
            </Text>
          ) : null}
          {generalError ? (
            <Text className="text-red-500 mt-3 text-center font-pbold">
              {generalError}
            </Text>
          ) : null}
          <CustomButton
            title="Sign In"
            containerStyles="mt-7"
            handlePress={handleSignIn}
          />
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
          </View>
        </View>
      </ScrollView>
      <StatusBar backgroundColor="#161622" style="light" />
    </SafeAreaView>
  );
};

export default SignIn;
