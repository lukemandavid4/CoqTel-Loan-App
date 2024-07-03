import { useEffect, useState } from "react";
import { View, Text, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "../../components/CustomButton";
import { Link } from "expo-router";

const Home = () => {
  const [time, setTime] = useState("");
  const date = new Date();
  const hour = date.getHours();
  useEffect(() => {
    if (hour >= 5 && hour < 12) {
      setTime("Morning");
    } else if (hour >= 12 && hour < 17) {
      setTime("Afternoon");
    } else {
      setTime("Evening");
    }
  }, []);
  return (
    <SafeAreaView>
      <ScrollView>
        <View className="px-4 py-4">
          <Text className="font-psemibold text-xl">Good {time}!</Text>
          <Text className="font-pmedium">Welcome to CoqTel</Text>
        </View>
        <View className="m-2 py-4">
          <Text className="font-psemibold text-lg">Borrow your way</Text>
          <Text className="font-pmedium">
            Apply one and get access to cash every time you need it.
          </Text>
          <CustomButton title="Apply now" containerStyles="self-start px-6" />
        </View>
        <View className="m-2 py-4">
          <Text className="font-psemibold text-lg">Earn Ksh 500</Text>
          <Text className="font-pmedium">Invite a friend to get KSh 500</Text>
          <Link href="/home" className="text-secondary font-pmedium">
            Get Started
          </Link>
        </View>
        <View className="m-2 py-4">
          <Text className="font-psemibold text-lg">Need help?</Text>
          <Text className="font-pmedium">Get answers to your questions</Text>
          <Link href="/home" className="text-secondary font-pmedium">
            View FAQ
          </Link>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
