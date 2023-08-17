import React, { Component, useState, useEffect } from "react";
import {
  Text,
  Box,
  HStack,
  ScrollView,
  Pressable,
  Image,
  Input,
} from "native-base";
import { FlatGrid } from "react-native-super-grid";
import { Ionicons } from "@expo/vector-icons";
import Separator from "../components/separator";


class Beranda extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      isLoading: true,
    };
  }

  onRefresh() {
    this.setState({ isFetching: true }, () => {
      this.getkategoriProduk();
    });
  }

  async getNews() {
    try {
      const response = await fetch(
        `https://raw.githubusercontent.com/fananizhilal/APIProduk/main/produkittsmart`
      );
      const json = await response.json();
      this.setState({ data: json.produk });
    } catch (error) {
      console.error(error);
    } finally {
      this.setState({ isLoading: false });
    }
  }
  componentDidMount() {
    this.getNews();
  }

  render() {
    const { navigation } = this.props;
    return (
      <Box flex={1} bg="#FFFFFF" safeArea={true}>
        <ScrollView p={"8px"} w={"100%"}>
          <Input
            px={"13px"}
            bg="#F1F1F1"
            ml={"8px"}
            w={"97%"}
            h={"45px"}
            borderRadius={"20px"}
            size="s"
            placeholder="Cari Produk"
          />
          <Box w={"340px"} h={"175px"}>
            <HStack p={"10px"} space={"10px"}>
              <Image
                w={"275px"}
                h={"150px"}
                borderRadius={"20px"}
                shadow="4"
                source={require("../assets/Slide1.jpg")}
              />
              <Image
                w={"275px"}
                h={"150px"}
                borderRadius={"20px"}
                shadow="4"
                source={require("../assets/Slide2.jpg")}
              />
            </HStack>
          </Box>
          <Box pt={"15px"} px={"10px"} ml={"2px"} w={"100%"}>
            <HStack py={"2px"} space={"10px"}>
              <Pressable
                bg="#47B04A"
                w={"20%"}
                h={"25px"}
                borderRadius={"100px"}
              >
                <Text
                  fontSize={"10px"}
                  color="#FFFFFF"
                  textAlign="center"
                  p={"3px"}
                >
                  Semua
                </Text>
              </Pressable>
              <Pressable
                w={"20%"}
                h={"25px"}
                borderRadius={"100px"}
                borderWidth={"1"}
                borderColor="#47B04A"
                onPress={() => navigation.navigate("")}
              >
                <Text
                  fontSize={"10px"}
                  color="#47B04A"
                  textAlign="center"
                  p={"3px"}
                >
                  Buah
                </Text>
              </Pressable>
              <Pressable
                w={"20%"}
                h={"25px"}
                borderRadius={"100px"}
                borderWidth={"1"}
                borderColor="#47B04A"
                onPress={() => navigation.navigate("")}
              >
                <Text
                  fontSize={"10px"}
                  color="#47B04A"
                  textAlign="center"
                  p={"3px"}
                >
                  Makanan
                </Text>
              </Pressable>
              <Pressable
                w={"20%"}
                h={"25px"}
                borderRadius={"100px"}
                borderWidth={"1"}
                borderColor="#47B04A"
                onPress={() => navigation.navigate("")}
              >
                <Text
                  fontSize={"10px"}
                  color="#47B04A"
                  textAlign="center"
                  p={"3px"}
                >
                  Minuman
                </Text>
              </Pressable>
              <Pressable
                w={"20%"}
                h={"25px"}
                borderRadius={"100px"}
                borderWidth={"1"}
                borderColor="#47B04A"
                onPress={() => navigation.navigate("")}
              >
                <Text
                  fontSize={"10px"}
                  color="#47B04A"
                  textAlign="center"
                  p={"3px"}
                >
                  Sayur
                </Text>
              </Pressable>
            </HStack>
          </Box>
          <Separator height={"3"} />

          <Box pt={"15px"} px={"10px"} ml={"5px"} w={"100%"}>
            <HStack>
              <Text
                fontSize={"19px"}
                color="#000000"
                fontWeight="bold"
                textAlign="left"
              >
                Hot Deals <Ionicons name="flame" size={22} color="#47B04A" />
              </Text>
              <Pressable onPress={() => navigation.navigate("Katalog")}>
                <Text
                  ml={"167 px"}
                  py={"5px"}
                  fontSize={"12px"}
                  color="#000000"
                  textAlign="right"
                >
                  See all
                </Text>
              </Pressable>
            </HStack>
          </Box>

          <FlatGrid
            style={{ flex: 1 }}
            itemDimension={130}
            spacing={15}
            data={this.state.data}
            renderItem={({ item }) => (
              <Pressable
                style={{ backgroundColor: "#FFFFFF" }}
                h={"229px"}
                borderRadius={"10px"}
                shadow="2"
                elevation="3"
                onPress={() =>
                  this.props.navigation.navigate("DetailProduk", {
                    data: item,
                  })
                }
              >
                <Image
                  bg="#F1F1F1"
                  w={"100%"}
                  h={"153px"}
                  borderRadius={"10px"}
                  source={{ uri: item.gambar }}
                />
                <Box px={"10px"} py={"10px"}>
                  <Text
                    fontSize={"14px"}
                    color="#404040"
                    fontWeight="bold"
                    textAlign="left"
                  >
                    {item.nama}
                  </Text>
                  <Text fontSize={"9px"} color="#B3B3B3" textAlign="left">
                    {item.berat}
                  </Text>
                  <Text
                    fontSize={"10px"}
                    color="#000000"
                    fontWeight="bold"
                    textAlign="left"
                  >
                    Rp{item.harga}
                  </Text>
                </Box>
              </Pressable>
            )}
          />
        </ScrollView>
      </Box>
    );
  }
}

export default Beranda;
