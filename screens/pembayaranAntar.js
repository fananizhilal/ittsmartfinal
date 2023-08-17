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

class PembayaranAntar extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <Box flex={1} bg="#FFFFFF" safeArea={true}>
        <Header title="Pembayaran" backButton={true} />
        <ScrollView bg="#FFFFFF" px={"10px"}>
          <VStack space={"7px"}>
            <Box
              bg="#FFFFFF"
              w={"100%"}
              h={"60px"}
              shadow="1"
              px={"15px"}
              py={"5px"}
            >
              <HStack space={"10px"}>
                <Box
                  w={"40px"}
                  h={"40px"}
                  borderRadius={"100px"}
                  bg="#FBFFB1"
                  p={"7px"}
                >
                  <Ionicons name="bicycle" size={24} color="#19A7CE" />
                </Box>
                <VStack>
                  <Text
                    fontSize={"16px"}
                    color="#404040"
                    textAlign="center"
                    fontWeight="bold"
                  >
                    Pesan Antar
                  </Text>
                  <Text
                    ml={"5px"}
                    fontSize={"9px"}
                    color="#959595"
                    textAlign="left"
                    fontWeight="bold"
                  >
                    Diantar dalam 30 menit
                  </Text>
                </VStack>
                <Pressable
                  onPress={() => navigation.navigate("PembayaranAmbil")}
                >
                  <Box
                    mt={"10px"}
                    ml={"110px"}
                    w={"54px"}
                    h={"23px"}
                    borderRadius={"30px"}
                    borderColor="#47B04A"
                    borderWidth={"1"}
                    p={"2px"}
                  >
                    <Text fontSize={"10px"} color="#47B04A" textAlign="center">
                      Ganti
                    </Text>
                  </Box>
                </Pressable>
              </HStack>
            </Box>
            <Box
              bg="#FFFFFF"
              w={"100%"}
              h={"100px"}
              shadow="1"
              px={"15px"}
              py={"10px"}
            >
              <HStack space={"60px"}>
                <VStack>
                  <Text fontSize={"10px"} color="#959595" textAlign="left">
                    Alamat Pengantaran
                  </Text>
                  <Text
                    fontSize={"14px"}
                    color="#000000"
                    textAlign="left"
                    fontWeight="bold"
                  >
                    Keputih
                  </Text>
                  <Text fontSize={"10px"} color="#959595" textAlign="left">
                    Sido Mulyo Regency AA-12
                  </Text>
                  <Box
                    mt={"5px"}
                    w={"170px"}
                    h={"19px"}
                    borderRadius={"3px"}
                    bg="#D9D9D9"
                  >
                    <HStack space={"2px"}>
                      <Box bg="#000000" w={"2px"} h={"100%"}></Box>
                      <Text fontSize={"11px"} color="#000000" textAlign="left">
                        Taruh di pagar aja ya
                      </Text>
                    </HStack>
                  </Box>
                </VStack>
                <Pressable onPress={() => navigation.navigate("")}>
                  <Box
                    mt={"10px"}
                    w={"93px"}
                    h={"23px"}
                    borderRadius={"30px"}
                    borderColor="#47B04A"
                    borderWidth={"1"}
                    p={"2px"}
                  >
                    <Text fontSize={"10px"} color="#47B04A" textAlign="center">
                      Ganti alamat
                    </Text>
                  </Box>
                </Pressable>
              </HStack>
            </Box>
            <Box
              bg="#FFFFFF"
              w={"100%"}
              h={"150px"}
              shadow="1"
              px={"15px"}
              py={"10px"}
            >
              <HStack space={"55px"}>
                <VStack>
                  <Text
                    fontSize={"16px"}
                    color="#404040"
                    textAlign="left"
                    fontWeight="bold"
                  >
                    Pisang
                  </Text>
                  <Text fontSize={"10px"} color="#B3B3B3" textAlign="left">
                    450 gr x 3
                  </Text>
                  <Text
                    fontSize={"12px"}
                    color="#000000"
                    textAlign="left"
                    mt={"40px"}
                  >
                    Rp 10.000 x 3
                  </Text>
                  <Box
                    mt={"5px"}
                    w={"170px"}
                    h={"19px"}
                    borderRadius={"3px"}
                    bg="#D9D9D9"
                  >
                    <HStack space={"2px"}>
                      <Box bg="#000000" w={"2px"} h={"100%"}></Box>
                      <Text fontSize={"11px"} color="#000000" textAlign="left">
                        Tolong dibungkus kertas ya kak
                      </Text>
                    </HStack>
                  </Box>
                </VStack>
                <Box py={"5px"}>
                  <Image
                    w={"100px"}
                    h={"100px"}
                    borderRadius={"10px"}
                    source={require("../assets/pisang.jpeg")}
                  />
                </Box>
              </HStack>
            </Box>
            <Box
              bg="#FFFFFF"
              w={"100%"}
              h={"50px"}
              py={"10px"}
              px={"15px"}
              shadow="1"
            >
              <HStack space={"70px"}>
                <Text
                  fontSize={"13px"}
                  color="#000000"
                  textAlign="left"
                  fontWeight="bold"
                >
                  Pesananmu kurang?
                </Text>
                <Pressable onPress={() => navigation.navigate("")}>
                  <Box
                    ml={"35px"}
                    w={"93px"}
                    h={"23px"}
                    borderRadius={"30px"}
                    borderColor="#47B04A"
                    borderWidth={"1"}
                    p={"2px"}
                  >
                    <Text fontSize={"10px"} color="#47B04A" textAlign="center">
                      Tambah
                    </Text>
                  </Box>
                </Pressable>
              </HStack>
            </Box>
            <Box w={"100%"} h={"100px"} shadow="1" ml={"15px"} py={"10px"}>
              <HStack space={"120px"}>
                <VStack space={"5px"}>
                  <Text
                    fontSize={"13px"}
                    color="#000000"
                    textAlign="left"
                    fontWeight="bold"
                  >
                    Ringkasan pembayaran
                  </Text>
                  <Text
                    fontSize={"11px"}
                    color="#959595"
                    textAlign="left"
                    fontWeight="bold"
                  >
                    Harga
                  </Text>
                  <Text
                    fontSize={"11px"}
                    color="#959595"
                    textAlign="left"
                    fontWeight="bold"
                  >
                    Ongkir
                  </Text>
                  <Text
                    fontSize={"11px"}
                    color="#959595"
                    textAlign="left"
                    fontWeight="bold"
                  >
                    Diskon Ongkir
                  </Text>
                  <Text
                    fontSize={"11px"}
                    color="#000000"
                    textAlign="left"
                    fontWeight="bold"
                  >
                    Total Pembayaran
                  </Text>
                </VStack>
                <VStack space={"5px"} mt={"25px"} mr={"5px"}>
                  <Text
                    fontSize={"11px"}
                    color="#959595"
                    textAlign="right"
                    fontWeight="bold"
                  >
                    Rp 30.000
                  </Text>
                  <Text
                    fontSize={"11px"}
                    color="#959595"
                    textAlign="right"
                    fontWeight="bold"
                  >
                    Rp 8.000
                  </Text>
                  <Text
                    fontSize={"11px"}
                    color="#959595"
                    textAlign="right"
                    fontWeight="bold"
                  >
                    -Rp 8.000
                  </Text>
                  <Text
                    fontSize={"11px"}
                    color="#000000"
                    textAlign="right"
                    fontWeight="bold"
                  >
                    Rp 30.000
                  </Text>
                </VStack>
              </HStack>
            </Box>
            <Box
              mt={"80px"}
              w={"100%"}
              h={"100px"}
              borderTopRadius={"30px"}
              shadow="9"
              bg="#FFFFFF"
              px={"15px"}
              py={"10px"}
            >
              <HStack px={"20px"} ml={"200px"} space={"10px"}>
                <Text
                  mt={"1px"}
                  fontSize={"13px"}
                  color="#000000"
                  textAlign="right"
                  fontWeight="bold"
                >
                  bayarnya pakai
                </Text>
                <Pressable
                  onPress={() => navigation.navigate("PembayaranAntar_2")}
                >
                  <Ionicons
                    name="ellipsis-horizontal-circle-sharp"
                    size={20}
                    color="#47B04A"
                  />
                </Pressable>
              </HStack>
              <Pressable
                onPress={() => navigation.navigate("PembayaranAntar_2")}
              >
                <Box
                  mt={"10px"}
                  w={"100%"}
                  h={"40px"}
                  borderRadius={"30px"}
                  bg="#47B04A"
                  p={"5px"}
                >
                  <Text
                    fontSize={"17px"}
                    color="#FFFFFF"
                    textAlign="center"
                    fontWeight="bold"
                  >
                    Pesan sekarang
                  </Text>
                </Box>
              </Pressable>
            </Box>
          </VStack>
        </ScrollView>
      </Box>
    );
  }
}

export default PembayaranAntar;
