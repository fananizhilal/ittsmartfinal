import React from "react";
import { Text, View, HStack, Pressable, Box } from "native-base";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;

const Header = (props) => {
  const navigation = useNavigation();
  return (
    <Box
      bgColor="#ffffff"
      height={"8%"}
      width={"100%"}
      px={"13px"}
      py={"15px"}
      shadow="1"
    >
      <HStack>
        {props.backButton && (
          <Pressable onPress={() => navigation.pop()} pr={"6px"}>
            <Ionicons
              name="chevron-back-circle-outline"
              size={24}
              color="#47B04A"
            />
          </Pressable>
        )}
        <Text
          fontSize={18}
          fontWeight="bold"
          w={windowWidth - 80}
          color="#000000"
        >
          {props.title}
        </Text>
      </HStack>
    </Box>
  );
};

export default Header;
