import React, { Component } from "react";
import {
  Text,
  Box,
  HStack,
  ScrollView,
  VStack,
  Pressable,
  Image,
  Divider,
  Spinner,
} from "native-base";
import "firebase/firestore";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Ionicons } from "@expo/vector-icons";
import { Header } from "../components";

class DashboardAkun extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      email: "",
      isLoading: false,
      check_textInputChange: false,
      secureTextEntry: true,
    };
  }

  logOut = async () => {
    const { navigation } = this.props;

    try {
      this.setState({ isLoading: true });
      await AsyncStorage.clear();

      setTimeout(() => {
        this.setState({ isLoading: false });
        navigation.navigate("Login");
      }, 1000);
    } catch (error) {
      console.log(error);
      this.setState({ isLoading: false });
    }
  };

  updateSecureTextEntry() {
    this.setState({
      ...this.state,
      secureTextEntry: !this.state.secureTextEntry,
    });
  }

  render() {
    const { navigation } = this.props;
    return (
      <Box flex={1} bg="#FFFFFF" safeArea={true}>
        <Header title="Profil" backButton={true} />
        <ScrollView w={"100%"}>
          <Pressable
            bg="#47B04A"
            w={"100%"}
            h={"82px"}
            p={"15px"}
            onPress={() => navigation.navigate("EditProfil")}
          >
            <HStack space={"10px"}>
              <Image
                source={require("../assets/foto.jpg")}
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: 500,
                  borderWidth: 2,
                  borderColor: "#ffffff",
                  marginLeft: 10,
                }}
                alt="Thumbnail foto profil"
              />
              <VStack space={"2px"}>
                <Text fontSize={"18px"} color="#ffffff">
                  Farhan Muzakki
                </Text>
                <Text fontSize={"12px"} color="#ffffff">
                  0812-3456-7890
                </Text>
              </VStack>
              <Pressable
                py={"15px"}
                ml={"92px"}
                onPress={() => navigation.navigate("EditProfil")}
              >
                <Ionicons
                  name="chevron-forward-circle-outline"
                  size={22}
                  color="#ffffff"
                />
              </Pressable>
            </HStack>
          </Pressable>
          <Box
            px={"30px"}
            py={"10px"}
            mt={"20px"}
            ml={"18px"}
            shadow="1"
            w={"90%"}
            h={"75px"}
            borderRadius={"20px"}
            bg="#ffffff"
          >
            <HStack space={"5px"} py={"15px"} w={"100%"} h={"100%"}>
              <HStack space={"5px"} >
                <Ionicons name="cash-outline" size={24} color="#47B04A" />
                <Text fontSize={"12px"} color="#000000" py={"4px"}>
                  Voucher{" "}
                </Text>
              </HStack>
              <Divider mx={1} orientation="vertical" />
              <HStack space={"5px"}>
                <Ionicons name="logo-bitcoin" size={24} color="#47B04A" />
                <Text fontSize={"12px"} color="#000000" py={"4px"}>
                  ITTSpoin{" "}
                </Text>
              </HStack>
              <Divider mx={1} orientation="vertical" />
              <HStack space={"5px"}>
                <Ionicons name="ios-gift-outline" size={24} color="#47B04A" />
                <Text fontSize={"12px"} color="#000000" py={"4px"}>
                  Referral{" "}
                </Text>
              </HStack>
            </HStack>
          </Box>
          <Box p={"25px"}>
            <Text fontSize={"12px"} color="#535353">
              Dompet DIgital
            </Text>
            <HStack mt={"10px"} space={"8px"}>
              <Box w={"56px"} h={"56px"} borderRadius={"100px"} bg="#F6F7FB">
                <Image
                  px={"10px"}
                  mt={"10px"}
                  w={"25px"}
                  h={"25px"}
                  alignSelf="center"
                  source={require("../assets/gopay.png")}
                />
                <Text fontSize={"10px"} color="#000000" alignSelf="center">
                  Gopay
                </Text>
              </Box>
              <Box w={"56px"} h={"56px"} borderRadius={"100px"} bg="#F6F7FB">
                <Image
                  px={"10px"}
                  mt={"10px"}
                  w={"25px"}
                  h={"25px"}
                  alignSelf="center"
                  borderRadius={"100px"}
                  source={require("../assets/LinkAja.png")}
                />
                <Text fontSize={"10px"} color="#000000" alignSelf="center">
                  Link Aja
                </Text>
              </Box>
              <Box w={"56px"} h={"56px"} borderRadius={"100px"} bg="#F6F7FB">
                <Image
                  px={"10px"}
                  mt={"10px"}
                  w={"25px"}
                  h={"25px"}
                  alignSelf="center"
                  source={require("../assets/ovo.jpeg")}
                />
                <Text fontSize={"10px"} color="#000000" alignSelf="center">
                  Ovo
                </Text>
              </Box>
              <Box w={"56px"} h={"56px"} borderRadius={"100px"} bg="#F6F7FB">
                <Image
                  px={"10px"}
                  mt={"10px"}
                  w={"25px"}
                  h={"25px"}
                  alignSelf="center"
                  source={require("../assets/dana.png")}
                />
                <Text fontSize={"10px"} color="#000000" alignSelf="center">
                  Dana
                </Text>
              </Box>
              <Box w={"56px"} h={"56px"} borderRadius={"100px"} bg="#F6F7FB">
                <Image
                  px={"10px"}
                  mt={"10px"}
                  w={"25px"}
                  h={"25px"}
                  alignSelf="center"
                  borderRadius={"100px"}
                  source={require("../assets/shopeepay.png")}
                />
                <Text fontSize={"10px"} color="#000000" alignSelf="center">
                  Spay
                </Text>
              </Box>
            </HStack>
          </Box>
          <VStack space={"10px"} mt={"1px"} ml={"16px"} w={"100%"}>
            <Pressable
              w={"100%"}
              h={"25px"}
              bg="#FFFFFF"
              onPress={() => navigation.navigate("")}
            >
              <Text fontSize={"12px"} color="#535353" py={"5px"} px={"8px"}>
                Pesan
              </Text>
              <Divider mt={"5px"} ml={"8px"} width={"87%"} bg="#D9D9D9" />
            </Pressable>
            <Pressable
              w={"100%"}
              h={"31px"}
              bg="#FFFFFF"
              onPress={() => navigation.navigate("")}
            >
              <Text fontSize={"12px"} color="#535353" py={"5px"} px={"8px"}>
                Rekening
              </Text>
              <Divider mt={"5px"} ml={"8px"} width={"87%"} bg="#D9D9D9" />
            </Pressable>
            <Pressable
              w={"100%"}
              h={"31px"}
              bg="#FFFFFF"
              onPress={() => navigation.navigate("")}
            >
              <Text fontSize={"12px"} color="#535353" py={"5px"} px={"8px"}>
                Alamat Tersimpan
              </Text>
              <Divider mt={"5px"} ml={"8px"} width={"87%"} bg="#D9D9D9" />
            </Pressable>
            <Pressable
              w={"100%"}
              h={"31px"}
              bg="#FFFFFF"
              onPress={() => navigation.navigate("")}
            >
              <Text fontSize={"12px"} color="#535353" py={"5px"} px={"8px"}>
                Tentang Kami
              </Text>
              <Divider mt={"5px"} ml={"8px"} width={"87%"} bg="#D9D9D9" />
            </Pressable>
            <Pressable
              w={"100%"}
              h={"31px"}
              bg="#FFFFFF"
              onPress={() => navigation.navigate("")}
            >
              <Text fontSize={"12px"} color="#535353" py={"5px"} px={"8px"}>
                Syarat & Ketentuan
              </Text>
              <Divider mt={"5px"} ml={"8px"} width={"87%"} bg="#D9D9D9" />
            </Pressable>
            <Pressable
              w={"100%"}
              h={"31px"}
              bg="#FFFFFF"
              onPress={() => navigation.navigate("")}
            >
              <Text fontSize={"12px"} color="#535353" py={"5px"} px={"8px"}>
                Kebijakan Privasi
              </Text>
              <Divider mt={"5px"} ml={"8px"} width={"87%"} bg="#D9D9D9" />
            </Pressable>
          </VStack>
          <Pressable px={"15px"} onPress={this.logOut}>
            <Box
              mt={"25px"}
              w={"95%"}
              h={"40px"}
              alignSelf="center"
              borderRadius={"30px"}
              borderColor="#47B04A"
              borderWidth={"1"}
              py={"7px"}
            >
              {this.state.isLoading ? (
                <Spinner size="small" color="#47B04A" />
              ) : (
                <Text
                  fontSize={"14px"}
                  color="#47B04A"
                  textAlign="center"
                  fontWeight="bold"
                >
                  Keluar
                </Text>
              )}
            </Box>
          </Pressable>
        </ScrollView>
      </Box>
    );
  }
}

export default DashboardAkun;
