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

class Pembayaran extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <Box flex={1} bg="#FFFFFF" safeArea={true}>
        <Header title="Pembayaran" backButton={true} />
        <ScrollView bg="#FFFFFF">
          <VStack space={"7px"}>
            <Box bg="#FFFFFF" w={"100%"} h={"12%"} shadow="1" p={"15px"}>
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
                <Pressable onPress={() => navigation.navigate("Ambil")}>
                  <Box
                    mt={"10px"}
                    ml={"70px"}
                    w={"54px"}
                    h={"23px"}
                    borderRadius={"30px"}
                    borderColor="#FF0000"
                    borderWidth={"1"}
                    p={"2px"}
                  >
                    <Text fontSize={"10px"} color="#FF0000" textAlign="center">
                      Ganti
                    </Text>
                  </Box>
                </Pressable>
              </HStack>
            </Box>
            <Box
              bg="#FFFFFF"
              w={"100%"}
              h={"19%"}
              shadow="1"
              px={"15px"}
              py={"10px"}
            >
              <HStack space={"5px"}>
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
                    ml={"20px"}
                    w={"93px"}
                    h={"23px"}
                    borderRadius={"30px"}
                    borderColor="#FF0000"
                    borderWidth={"1"}
                    p={"2px"}
                  >
                    <Text fontSize={"10px"} color="#FF0000" textAlign="center">
                      Ganti alamat
                    </Text>
                  </Box>
                </Pressable>
              </HStack>
            </Box>
            <Box
              bg="#FFFFFF"
              w={"100%"}
              h={"27%"}
              shadow="1"
              px={"15px"}
              py={"10px"}
            >
              <HStack space={"5px"}>
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
                <Box py={"5px"} ml={"10px"}>
                  <Image
                    w={"110px"}
                    h={"110px"}
                    borderRadius={"10px"}
                    source={require("../assets/pisang.jpeg")}
                  />
                </Box>
              </HStack>
            </Box>
            <Box
              bg="#FFFFFF"
              w={"100%"}
              h={"8%"}
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
                    w={"93px"}
                    h={"23px"}
                    borderRadius={"30px"}
                    borderColor="#FF0000"
                    borderWidth={"1"}
                    p={"2px"}
                  >
                    <Text fontSize={"10px"} color="#FF0000" textAlign="center">
                      Tambah
                    </Text>
                  </Box>
                </Pressable>
              </HStack>
            </Box>
            <Box w={"100%"} h={"25%"} shadow="1" px={"15px"} py={"10px"}>
              <HStack space={"90px"}>
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
                <VStack space={"5px"} mt={"25px"}>
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
              shadow="1"
              mt={"10px"}
              w={"100%"}
              borderTopRadius={"30px"}
              px={"15px"}
              py={"10px"}
            >
              <HStack ml={"170px"} space={"10px"}>
                <Text
                  mt={"1px"}
                  fontSize={"13px"}
                  color="#000000"
                  textAlign="right"
                  fontWeight="bold"
                >
                  bayarnya pakai
                </Text>
                <Pressable onPress={() => navigation.navigate("")}>
                  <Ionicons
                    name="ellipsis-horizontal-circle-sharp"
                    size={20}
                    color="#FF0000"
                  />
                </Pressable>
              </HStack>
              <Pressable onPress={() => navigation.navigate("")}>
                <Box
                  mt={"10px"}
                  w={"300px"}
                  h={"40px"}
                  borderRadius={"30px"}
                  borderColor="#959595"
                  borderWidth={"1"}
                  p={"5px"}
                >
                  <Text
                    fontSize={"17px"}
                    color="#959595"
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

export default Pembayaran;
