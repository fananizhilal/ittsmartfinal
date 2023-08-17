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
  Alert,
} from "native-base";
import "firebase/firestore";
import { Ionicons } from "@expo/vector-icons";
import { Header } from "../components";

class EditProfil extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  handleDeleteAccount = () => {
    Alert.alert("Konfirmasi", "Apakah Anda yakin ingin menghapus akun?", [
      {
        text: "Batal",
        style: "cancel",
      },
      {
        text: "Hapus",
        style: "destructive",
        onPress: () => {
          // Kode untuk menghapus akun
          console.log("Akun telah dihapus");
        },
      },
    ]);
  };

  render() {
    const { navigation } = this.props;
    return (
      <Box flex={1} bg="#FFFFFF" safeArea={true}>
        <Header title="Akun" backButton={true} />
        <ScrollView px={"20px"} py={"70px"}>
          <Image
            source={require("../assets/foto.jpg")}
            zIndex={1}
            position="absolute"
            style={{
              marginTop: 25,
              width: 110,
              height: 110,
              borderRadius: 500,
              borderWidth: 2,
              borderColor: "#FFFFFF",
              alignSelf: "center",
            }}
            alt="Thumbnail foto profil"
          />
          <Box bg="#47B04A" w={"100%"} h={"440px"} borderRadius={"15px"}>
            <VStack space={"20px"} px={"20px"} mt={"160px"}>
              <Text fontSize={"18px"} textAlign="center" color="#ffffff">
                Farhan Muzakki
              </Text>
              <VStack space={"5px"}>
                <Text fontSize={"12px"} color="#ffffff">
                  Email
                </Text>
                <Box
                  w={"100%"}
                  h={"38px"}
                  borderWidth="2"
                  borderRadius={"30px"}
                  borderColor="#ffffff"
                  p={"8px"}
                >
                  <Text fontSize={"12px"} color="#ffffff">
                    {this.state.email}
                  </Text>
                </Box>
                <Text fontSize={"12px"} color="#ffffff">
                  Password
                </Text>
                <Box
                  w={"100%"}
                  h={"38px"}
                  borderWidth="2"
                  borderRadius={"30px"}
                  borderColor="#ffffff"
                  p={"8px"}
                >
                  <Text fontSize={"12px"} color="#ffffff">
                    {this.state.password}
                  </Text>
                </Box>
              </VStack>
              <HStack mt={"10px"} space={"2"} alignSelf="center">
                <Pressable
                  w={"130px"}
                  h={"40px"}
                  borderRadius={"30px"}
                  bg="#ffffff"
                  alignSelf="center"
                  onPress={this.handleDeleteAccount}
                >
                  <HStack space={"1"} py={"8px"} px={"17px"}>
                    <Ionicons name="md-trash" size={22} color="#47B04A" />
                    <Text
                      fontSize={"12px"}
                      color="#47B04A"
                      textAlign="center"
                      py={"3px"}
                    >
                      Hapus Akun
                    </Text>
                  </HStack>
                </Pressable>
                <Divider mx={1} orientation="vertical" />
                <Pressable
                  w={"90px"}
                  h={"40px"}
                  borderRadius={"30px"}
                  bg="#ffffff"
                  alignSelf="center"
                  onPress={() => navigation.navigate("EditProfil_2")}
                >
                  <HStack space={"1"} py={"8px"} px={"17px"}>
                    <Ionicons
                      name="ios-pencil-sharp"
                      size={20}
                      color="#47B04A"
                    />
                    <Text
                      fontSize={"12px"}
                      color="#47B04A"
                      textAlign="center"
                      py={"3px"}
                    >
                      Edit
                    </Text>
                  </HStack>
                </Pressable>
              </HStack>
              <HStack></HStack>
            </VStack>
          </Box>
        </ScrollView>
      </Box>
    );
  }
}

export default EditProfil;
