import React, { Component } from "react";
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
import { Header } from "../components";

class Katalog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      isLoading: true,
      keyword: "",
    };
  }

  handleSearch = (keyword) => {
    const filteredData = this.state.data.filter((item) =>
      item.nama.toLowerCase().includes(keyword.toLowerCase())
    );
    this.setState({ keyword, filteredData });
  };

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
        <Header title="Katalog Produk" backButton={true} />
        <ScrollView p={"10px"}>
          <Box py={"10px"} w={"100%"}>
            <Input
              px={"13px"}
              bg="#F1F1F1"
              ml={"8px"}
              w={"97%"}
              h={"45px"}
              borderRadius={"20px"}
              size="s"
              placeholder="Cari Produk"
              onChangeText={this.handleSearch} // Tambahkan ini
              value={this.state.keyword} // Tambahkan ini
            />
          </Box>
          <Box px={"10px"} ml={"2px"} w={"100%"}>
            <HStack py={"2px"} space={"10px"}>
              <Pressable
                bg="#47B04A"
                w={"20%"}
                h={"25px"}
                borderRadius={"100px"}
                onPress={() => navigation.navigate("")}
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
          <FlatGrid
            style={{ flex: 1 }}
            itemDimension={130}
            spacing={15}
            marginTop={10}
            data={this.state.filteredData || this.state.data}
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
                    {item.harga}
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

export default Katalog;
