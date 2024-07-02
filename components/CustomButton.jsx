import { TouchableOpacity, Text } from "react-native";

const CustomButton = ({ title, containerStyles, handlePress }) => {
  return (
    <TouchableOpacity
      className={`bg-secondary rounded-xl min-h-[50px] justify-center items-center ${containerStyles}`}
      onPress={handlePress}
    >
      <Text className="text-primary font-psemibold">{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
