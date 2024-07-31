import { View, Text, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import FormField from "../../components/FormField";
import CustomButton from "../../components/CustomButton";
import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";
import axios from "axios";
import { useState } from "react";
const navigation = useNavigation();

const SignUp = () => {
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSignUp = async () => {
    try {
      const response = await axios.post(
        "http://192.168.100.116/api/users/register",
        {
          fullName,
          phoneNumber,
          email,
          password,
        }
      );

      if (response.status === 201) {
        Alert.alert("Success", "You have signed up successfully!");
        navigation.navigate("home");
      } else {
        Alert.alert("Error", "Something went wrong. Please try again.");
      }
    } catch (error) {
      Alert.alert(
        "Error",
        error.response?.data?.message || "An error occurred. Please try again."
      );
    }
  };
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
            value={fullName}
            onChange={setFullName}
          />
          <FormField
            title="Phone Number"
            placeholder="Phone Number"
            otherStyles="mt-7"
            number="+254"
            value={phoneNumber}
            onChange={setPhoneNumber}
          />
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
          <CustomButton
            title="Sign Up"
            containerStyles="mt-7"
            onPress={handleSignUp}
          />
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
