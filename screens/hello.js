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
} from "native-base";
import { Ionicons } from "@expo/vector-icons";
import Separator from "../components/separator";

class Hello extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <Box flex={1} bg="#FFFFFF" safeArea={true}>
        <ScrollView px={"25px"} py={"35px"}>
          <Text
            fontSize={"36px"}
            color="#404040"
            fontWeight="bold"
            textAlign="left"
          >
            Halo!
          </Text>
          <Text fontSize={"20px"} color="#404040" textAlign="left">
            Selamat Datang
          </Text>
          <Separator height={"10"} />
          <Image
            bg="#F1F1F1"
            w={"280px"}
            h={"200px"}
            borderRadius={"10px"}
            source={require("../assets/login.png")}
          />
          <Separator height={"3"} />
          <Text pt={"5px"} fontSize={"14px"} color="#404040" textAlign="center">
            Silahkan masuk ke akun Anda, pilih media yang terhubung pada akun
            Anda
          </Text>
          <Box px={"45px"} py={"30px"}>
            <HStack space={"2"}>
              <Pressable
                w={"110px"}
                h={"40px"}
                borderWidth="2"
                borderRadius={"30px"}
                borderColor="#47B04A"
                alignSelf="center"
                onPress={() => navigation.navigate("Login")}
              >
                <HStack space={"1"} py={"5px"} px={"17px"}>
                  <Ionicons
                    name="mail"
                    size={22}
                    color="#47B04A"
                  />
                  <Text
                    fontSize={"12px"}
                    color="#000000"
                    textAlign="center"
                    py={"3px"}
                  >
                    Email
                  </Text>
                </HStack>
              </Pressable>
              <Divider mx={1} orientation="vertical" />
              <Pressable
                w={"110px"}
                h={"40px"}
                borderWidth="2"
                borderRadius={"30px"}
                borderColor="#47B04A"
                alignSelf="center"
                onPress={() => navigation.navigate("LostKoneksi")}
              >
                <HStack space={"1"} py={"5px"} px={"17px"}>
                  <Ionicons name="ios-logo-google" size={22} color="#47B04A" />
                  <Text
                    fontSize={"12px"}
                    color="#000000"
                    textAlign="center"
                    py={"3px"}
                  >
                    Google
                  </Text>
                </HStack>
              </Pressable>
            </HStack>
          </Box>
          <Separator height={"15"} />
          <VStack space={"3px"} alignSelf="center">
            <Text fontSize={"12px"} color="#959595" textAlign="center">
              Belum memiliki akun?
            </Text>
            <Pressable onPress={() => navigation.navigate("Register")}>
              <Text
                fontSize={"12px"}
                fontWeight="bold"
                color="#959595"
                textAlign="center"
              >
                Buat Akun?
              </Text>
            </Pressable>
          </VStack>
          <Image
            mt={"80px"}
            w={"150px"}
            h={"60px"}
            alignSelf="center"
            source={require("../assets/ITTSMART.png")}
          />
        </ScrollView>
      </Box>
    );
  }
}

export default Hello;
