import React, { Component } from "react";
import {
  Text,
  Box,
  ScrollView,
  Pressable,
} from "native-base";
import { Ionicons } from "@expo/vector-icons";
import { Header } from "../components";

class VerifikasiSukses extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <Box flex={1} bg="#FFFFFF" safeArea={true}>
        <Header title="Verifikasi Pembayaran" backButton={true} />
        <ScrollView py={"200px"}>
          <Pressable onPress={() => navigation.navigate("DetailPesanan")}>
            <Box
              w={"200px"}
              h={"200px"}
              bg="#47B04A"
              borderRadius="full"
              alignSelf="center"
              py={"30px"}
              px={"40px"}
            >
              <Ionicons name="checkmark-sharp" size={130} color="#FFFFFF" />
            </Box>
            <Text
              mt={"20px"}
              fontSize={"19px"}
              color="#000000"
              fontWeight="bold"
              textAlign="center"
            >
              Pembayaran Terverifikasi
            </Text>
          </Pressable>
        </ScrollView>
      </Box>
    );
  }
}

export default VerifikasiSukses;
