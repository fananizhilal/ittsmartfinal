import React, { Component } from "react";
import {
  Text,
  Box,
  HStack,
  ScrollView,
  Pressable,
} from "native-base";
import { Header } from "../components";

class VerifikasiPembayaran extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <Box flex={1} bg="#FFFFFF" safeArea={true}>
        <Header title="Verifikasi Pembayaran" backButton={true} />
        <ScrollView py={"20px"}>
          <Text
            mt={"20px"}
            fontSize={"19px"}
            color="#000000"
            fontWeight="bold"
            textAlign="center"
          >
            Masukkan PIN
          </Text>
          <Pressable
            onPress={() => navigation.navigate("VerifikasiPembayaran_2")}
          >
            <HStack py={"20px"} px={"35px"} space={"10px"}>
              <Box
                bg="#F6F7FB"
                w={"40px"}
                h={"75px"}
                borderColor="#000000"
                borderWidth={"1"}
              ></Box>
              <Box
                bg="#F6F7FB"
                w={"40px"}
                h={"75px"}
                borderColor="#000000"
                borderWidth={"1"}
              ></Box>
              <Box
                bg="#F6F7FB"
                w={"40px"}
                h={"75px"}
                borderColor="#000000"
                borderWidth={"1"}
              ></Box>
              <Box
                bg="#F6F7FB"
                w={"40px"}
                h={"75px"}
                borderColor="#000000"
                borderWidth={"1"}
              ></Box>
              <Box
                bg="#F6F7FB"
                w={"40px"}
                h={"75px"}
                borderColor="#000000"
                borderWidth={"1"}
              ></Box>
              <Box
                bg="#F6F7FB"
                w={"40px"}
                h={"75px"}
                borderColor="#000000"
                borderWidth={"1"}
              ></Box>
            </HStack>
          </Pressable>
        </ScrollView>
      </Box>
    );
  }
}

export default VerifikasiPembayaran;
