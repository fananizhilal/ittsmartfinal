import React, { Component } from "react";
import {
  Text,
  Box,
  HStack,
  ScrollView,
  Pressable,
} from "native-base";
import { Header } from "../components";

class VerifikasiPembayaran_2 extends Component {
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
          <Pressable onPress={() => navigation.navigate("VerifikasiSukses")}>
            <HStack py={"25px"} px={"35px"} space={"10px"}>
              <Box
                bg="#F6F7FB"
                w={"40px"}
                h={"75px"}
                py={"10px"}
                borderColor="#000000"
                borderWidth={"1"}
              >
                <Text
                  fontSize={"35px"}
                  color="#000000"
                  fontWeight="bold"
                  textAlign="center"
                >
                  9
                </Text>
              </Box>
              <Box
                bg="#F6F7FB"
                w={"40px"}
                h={"75px"}
                py={"10px"}
                borderColor="#000000"
                borderWidth={"1"}
              >
                <Text
                  fontSize={"35px"}
                  color="#000000"
                  fontWeight="bold"
                  textAlign="center"
                >
                  3
                </Text>
              </Box>
              <Box
                bg="#F6F7FB"
                w={"40px"}
                h={"75px"}
                py={"10px"}
                borderColor="#000000"
                borderWidth={"1"}
              >
                <Text
                  fontSize={"35px"}
                  color="#000000"
                  fontWeight="bold"
                  textAlign="center"
                >
                  6
                </Text>
              </Box>
              <Box
                bg="#F6F7FB"
                w={"40px"}
                h={"75px"}
                py={"10px"}
                borderColor="#000000"
                borderWidth={"1"}
              >
                <Text
                  fontSize={"35px"}
                  color="#000000"
                  fontWeight="bold"
                  textAlign="center"
                >
                  6
                </Text>
              </Box>
              <Box
                bg="#F6F7FB"
                w={"40px"}
                h={"75px"}
                py={"10px"}
                borderColor="#000000"
                borderWidth={"1"}
              >
                <Text
                  fontSize={"35px"}
                  color="#000000"
                  fontWeight="bold"
                  textAlign="center"
                >
                  0
                </Text>
              </Box>
              <Box
                bg="#F6F7FB"
                w={"40px"}
                h={"75px"}
                py={"10px"}
                borderColor="#000000"
                borderWidth={"1"}
              >
                <Text
                  fontSize={"35px"}
                  color="#000000"
                  fontWeight="bold"
                  textAlign="center"
                >
                  2
                </Text>
              </Box>
            </HStack>
          </Pressable>
        </ScrollView>
      </Box>
    );
  }
}

export default VerifikasiPembayaran_2;
