import React, { Component } from "react";
import {
  Text,
  Box,
  ScrollView,
  Pressable,
  Image,
} from "native-base";


class LostKoneksi extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <Box flex={1} bg="#FFFFFF" safeArea={true}>
        <ScrollView px={"25px"} py={"35px"}>
          <Box py={"150px"}>
            <Image
              w={"150px"}
              h={"200px"}
              alignSelf="center"
              source={require("../assets/lost.png")}
            />
            <Text
              pt={"5px"}
              fontSize={"14px"}
              color="#404040"
              textAlign="center"
            >
              Koneksi internet tidak tersedia.Pastikan internet kamu
              terkoneksi,lalu tutup dan buka kembali aplikasi ITTSMART.
            </Text>
          </Box>
          <Pressable
            w={"300px"}
            h={"40px"}
            borderWidth="2"
            borderRadius={"30px"}
            borderColor="#47B04A"
            alignSelf="center"
            onPress={() => navigation.navigate("Login")}
          >
            <Text
              fontSize={"12px"}
              color="#000000"
              textAlign="center"
              p={"8px"}
            >
              Coba lagi . . .
            </Text>
          </Pressable>
        </ScrollView>
      </Box>
    );
  }
}

export default LostKoneksi;
