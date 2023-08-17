import React, { Component } from "react";
import {
  Text,
  Box,
  Pressable,
  Image,
} from "native-base";
import { Header } from "../components";

class DetailProduk extends Component {
  render() {
    const { route } = this.props;
    const data = route.params.data;

    return (
      <Box flex={1} bg="#FFFFFF" safeArea={true}>
        <Header title="Detail Produk" backButton={true} />
        <Box
          mt={"10px"}
          bg="#FFFFFF"
          borderTopRadius={"30px"}
          p={"20px"}
          shadow="9"
          w={"100%"}
          h={"100%"}
        >
          <Image
            bg="#F1F1F1"
            w={"100%"}
            h={"345px"}
            borderRadius={"30px"}
            source={{ uri: data.gambar }}
          />
          <Box px={"10px"} py={"10px"}>
            <Text
              fontSize={"30px"}
              color="#404040"
              fontWeight="bold"
              textAlign="left"
            >
              {data.nama}
            </Text>
            <Text fontSize={"15px"} color="#B3B3B3" textAlign="left">
              {data.berat}
            </Text>
            <Box h={"30%"}>
              <Text fontSize={"15px"} color="#000000" textAlign="left">
               {data.detail}
              </Text>
            </Box>
            <Text
              py={"10px"}
              fontSize={"20px"}
              color="#404040"
              fontWeight="bold"
              textAlign="left"
            >
              Rp{data.harga}
            </Text>
            <Box mt={"5px"}>
              <Pressable
                w={"100%"}
                h={"40px"}
                borderRadius={"30px"}
                bg="#47B04A"
                alignSelf="center"
                onPress={() =>
                  this.props.navigation.navigate("KeranjangBelanja", {
                    data: data,
                  })
                }
              >
                <Text
                  fontSize={"14px"}
                  color="#FFFFFF"
                  textAlign="center"
                  p={"8px"}
                >
                  Tambah ke Keranjang
                </Text>
              </Pressable>
            </Box>
          </Box>
        </Box>
      </Box>
    );
  }
}

export default DetailProduk;
