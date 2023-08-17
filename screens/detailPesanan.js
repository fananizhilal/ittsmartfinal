import React, { Component } from "react";
import {
  Text,
  Box,
  HStack,
  ScrollView,
  VStack,
  Pressable,
  Image,
} from "native-base";
import { Ionicons } from "@expo/vector-icons";
import { Header } from "../components";

class DetailPesanan extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <Box flex={1} bg="#FFFFFF" safeArea={true}>
        <Header title="Detail Pesanan" backButton={true} />
        <ScrollView p={"10px"}>
          <Box bg="#FFFFFF" w={"100%"} h={"100px"} shadow="1" py={"5px"}>
            <VStack space={"10px"}>
              <Text
                fontSize={"16px"}
                color="#000000"
                textAlign="left"
                fontWeight="bold"
              >
                Akan diikirim
              </Text>
              <HStack space={"10px"}>
                <Text
                  fontSize={"9px"}
                  color="#959595"
                  textAlign="left"
                  fontWeight="bold"
                >
                  IVR/20220812/XXII/VII/1279803495
                </Text>
                <Ionicons name="copy-outline" size={10} color="black" />
                <Text
                  fontSize={"9px"}
                  color="#47B04A"
                  textAlign="left"
                  fontWeight="bold"
                >
                  Lihat Detail
                </Text>
              </HStack>
              <HStack>
                <Text
                  fontSize={"9px"}
                  color="#959595"
                  textAlign="left"
                  fontWeight="bold"
                >
                  Tanggal Transaksi
                </Text>
                <Text
                  fontSize={"9px"}
                  color="#000000"
                  textAlign="left"
                  fontWeight="bold"
                >
                  23 Mei 2023 11:43 WIB
                </Text>
              </HStack>
            </VStack>
          </Box>
          <Box bg="#FFFFFF" w={"100%"} h={"170px"} shadow="1" py={"5px"}>
            <VStack space={"10px"}>
              <Text
                fontSize={"14px"}
                color="#000000"
                textAlign="left"
                fontWeight="bold"
              >
                Detail Produk
              </Text>
              <Box h={"120px"} bg="#F6F7FB" borderRadius={"10px"} p={"10px"}>
                <VStack>
                  <HStack space={"15px"}>
                    <Image
                      bg="#F1F1F1"
                      w={"60px"}
                      h={"60px"}
                      borderRadius={"10px"}
                      source={require("../assets/pisang.jpeg")}
                    />
                    <VStack space={"5px"} mt={"20px"}>
                      <Text
                        fontSize={"12px"}
                        color="#000000"
                        textAlign="left"
                        fontWeight="bold"
                      >
                        Pisang
                      </Text>
                      <Text
                        fontSize={"10px"}
                        color="#B3B3B3"
                        textAlign="left"
                        fontWeight="bold"
                      >
                        3 x Rp 10.000
                      </Text>
                    </VStack>
                  </HStack>
                  <Text
                    fontSize={"10px"}
                    color="#B3B3B3"
                    textAlign="left"
                    fontWeight="bold"
                  >
                    Total Harga
                  </Text>
                  <HStack>
                    <Text
                      fontSize={"13px"}
                      color="#000000"
                      textAlign="left"
                      fontWeight="bold"
                    >
                      Rp 30.000
                    </Text>
                    <Pressable onPress={() => navigation.navigate("")}>
                      <Box
                        ml={"130px"}
                        w={"76px"}
                        h={"18px"}
                        borderRadius={"30px"}
                        bg="#47B04A"
                        p={"2px"}
                      >
                        <Text
                          fontSize={"10px"}
                          color="#FFFFFF"
                          textAlign="center"
                        >
                          Beli Lagi
                        </Text>
                      </Box>
                    </Pressable>
                  </HStack>
                </VStack>
              </Box>
            </VStack>
          </Box>
          <Box w={"100%"} h={"130px"} shadow="1" px={"15px"} py={"10px"}>
            <HStack space={"40px"}>
              <VStack space={"5px"}>
                <Text
                  fontSize={"14px"}
                  color="#000000"
                  textAlign="left"
                  fontWeight="bold"
                >
                  Info pembayaran
                </Text>
                <Text
                  fontSize={"9px"}
                  color="#959595"
                  textAlign="left"
                  fontWeight="bold"
                >
                  Kurir
                </Text>
                <Text
                  fontSize={"9px"}
                  color="#959595"
                  textAlign="left"
                  fontWeight="bold"
                >
                  No Resi{" "}
                  <Ionicons name="copy-outline" size={10} color="black" />
                </Text>
                <Text
                  fontSize={"9px"}
                  color="#959595"
                  textAlign="left"
                  fontWeight="bold"
                >
                  Alamat
                </Text>
              </VStack>
              <VStack space={"5px"} mt={"25px"}>
                <Text fontSize={"9px"} color="#000000" textAlign="left">
                  Gosend - Reguler
                </Text>
                <Text fontSize={"9px"} color="#000000" textAlign="left">
                  10078945782201
                </Text>
                <VStack>
                  <Text fontSize={"9px"} color="#000000" textAlign="left">
                    Andi Hendrawan
                  </Text>
                  <Text fontSize={"9px"} color="#000000" textAlign="left">
                    6281234567890
                  </Text>
                  <Text fontSize={"9px"} color="#000000" textAlign="left">
                    Sido Mulyo Regency AA-12 Keputih 61282
                  </Text>
                </VStack>
              </VStack>
            </HStack>
          </Box>
          <Box w={"100%"} h={"100px"} shadow="1" ml={"15px"} py={"10px"}>
            <HStack space={"140px"}>
              <VStack space={"5px"}>
                <Text
                  fontSize={"14px"}
                  color="#000000"
                  textAlign="left"
                  fontWeight="bold"
                >
                  Rincian Pembayaran
                </Text>
                <Text
                  fontSize={"9px"}
                  color="#959595"
                  textAlign="left"
                  fontWeight="bold"
                >
                  Metode Pembayaran
                </Text>
                <Text
                  fontSize={"9px"}
                  color="#959595"
                  textAlign="left"
                  fontWeight="bold"
                >
                  Total Harga (3 Barang)
                </Text>
                <Text
                  fontSize={"9px"}
                  color="#959595"
                  textAlign="left"
                  fontWeight="bold"
                >
                  Total Ongkos kirim (1350 gr)
                </Text>
                <Text
                  fontSize={"9px"}
                  color="#959595"
                  textAlign="left"
                  fontWeight="bold"
                >
                  Diskon Ongkos Kirim
                </Text>
                <Text
                  fontSize={"9px"}
                  color="#000000"
                  textAlign="left"
                  fontWeight="bold"
                >
                  Total Belanja
                </Text>
              </VStack>
              <VStack space={"5px"} mt={"25px"}>
                <Text fontSize={"9px"} color="#000000" textAlign="right">
                  Gopay
                </Text>
                <Text fontSize={"9px"} color="#000000" textAlign="right">
                  Rp 30.000
                </Text>
                <Text fontSize={"9px"} color="#000000" textAlign="right">
                  Rp 8.000
                </Text>
                <Text fontSize={"9px"} color="#000000" textAlign="right">
                  -Rp 8.000
                </Text>
                <Text
                  fontSize={"9px"}
                  color="#000000"
                  textAlign="right"
                  fontWeight="bold"
                >
                  Rp 30.000
                </Text>
              </VStack>
            </HStack>
          </Box>
          <Box mt={"30px"}>
            <Pressable
              w={"100%"}
              h={"40px"}
              borderRadius={"10px"}
              bg="#47B04A"
              alignSelf="center"
              mt={"40px"}
              onPress={() => navigation.navigate("Beranda")}
            >
              <Text
                fontSize={"14px"}
                color="#FFFFFF"
                textAlign="center"
                p={"8px"}
                fontWeight="bold"
              >
                Selesai
              </Text>
            </Pressable>
          </Box>
        </ScrollView>
      </Box>
    );
  }
}

export default DetailPesanan;
