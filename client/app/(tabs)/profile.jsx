import { ScrollView, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import FormField from "../../components/FormField";
import CustomButton from "../../components/CustomButton";
import { StatusBar } from "expo-status-bar";

const Profile = () => {
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View className="w-full py-6 justify-center px-3 mb">
          <FormField
            title="Full Name"
            placeholder="Full Legal Name"
            otherStyles="mt-7"
          />
          <FormField
            title="Date of Birth"
            placeholder="Date of Birth(as per National ID)"
            otherStyles="mt-7"
          />
          <FormField
            title="National ID Number"
            placeholder="National ID Number"
            otherStyles="mt-7"
          />
          <FormField title="Email" placeholder="Email" otherStyles="mt-7" />
        </View>
        <CustomButton title="Save" />
      </ScrollView>
      <StatusBar backgroundColor="#161622" style="light" />
    </SafeAreaView>
  );
};

export default Profile;
