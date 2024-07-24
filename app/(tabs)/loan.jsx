import { View, Text, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "../../components/CustomButton";

const Loan = () => {
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View className="pt-20 pb-4">
          <Text className="font-pbold text-center text-white text-[18px]">
            So sorry! We can't offer you a loan right now.
          </Text>
          <Text className="font-pregular text-center text-gray-100">
            Please try again in 8 days
          </Text>
        </View>
        <View>
          <Text className="text-center font-pregular text-white">
            Our system has reviewed your application and unfortunately, you do
            not qualify for a loan at this time.
          </Text>
          <Text className="font-pregular text-gray-100 mx-2 my-4">
            Learn about eligibility criteria
          </Text>
        </View>
        <CustomButton title="Apply again" />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Loan;
