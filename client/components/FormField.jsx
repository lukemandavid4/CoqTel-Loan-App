import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import { icons } from "../constants";

const FormField = ({
  title,
  placeholder,
  otherStyles,
  number,
  value,
  onChange,
  length,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <View className={`space-y-2 ${otherStyles}`}>
      <Text className="text-base text-gray-100 font-pmedium">{title}</Text>
      <View className="border-2 w-full border-black-200 h-16 px-4 bg-black-100 rounded-2xl focus:border-secondary items-center flex-row gap-1 justify-center">
        <Text className="text-white font-psemibold text-base">{number}</Text>
        <TextInput
          className="flex-1 text-white font-psemibold text-base"
          placeholder={placeholder}
          placeholderTextColor="#7b7b8b"
          secureTextEntry={title === "Password" && !showPassword}
          value={value}
          onChangeText={onChange}
          maxLength={length}
        />
        {title === "Password" && (
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Image
              source={!showPassword ? icons.eye : icons.eyeHide}
              className="w-6 h-6"
              resizeMode="contain"
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default FormField;
