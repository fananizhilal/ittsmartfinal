import React, { Component } from "react";
import {
  Text,
  Box,
  ScrollView,
  VStack,
  Pressable,
  Image,
} from "native-base";
import { Header } from "../components";

class Keranjang extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <Box flex={1} bg="#FFFFFF" safeArea={true}>
        <Header title="Keranjang" backButton={true} />
        <ScrollView p={"10px"}>
          <VStack space={"10px"}>
            <Image
              mt={"60px"}
              bg="#F1F1F1"
              w={"250px"}
              h={"250px"}
              alignSelf="center"
              alignItems="center"
              source={require("../assets/shopping.png")}
            />
            <Text fontSize={"14px"} color="#000000" textAlign="center">
              Yaah... keranjangmu kosong
            </Text>
            <Pressable
              w={"250px"}
              h={"40px"}
              borderRadius={"30px"}
              bg="#47B04A"
              alignSelf="center"
              onPress={() => navigation.navigate("Katalog")}
            >
              <Text
                fontSize={"14px"}
                color="#FFFFFF"
                textAlign="center"
                p={"8px"}
              >
                Belanja Sekarang
              </Text>
            </Pressable>
          </VStack>
        </ScrollView>
      </Box>
    );
  }
}

export default Keranjang;
