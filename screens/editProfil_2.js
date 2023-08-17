import React, { Component } from "react";
import {
  Text,
  Box,
  ScrollView,
  VStack,
  Pressable,
  Image,
  Input,
} from "native-base";
import { Alert } from "react-native";
import "firebase/firestore";
import firebase from "../firebase";
import { doc, updateDoc } from "firebase/firestore";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Ionicons } from "@expo/vector-icons";
import { Header } from "../components";

class EditProfil_2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      email: "",
      password: "",
      isLoading: false,
      check_textInputChange: false,
      secureTextEntry: true,
    };
  }

  toggleShow = () => {
    this.setState((prevState) => ({
      show: !prevState.show,
    }));
  };

  get = async () => {
    try {
      const email = await AsyncStorage.getItem("email");
      const password = await AsyncStorage.getItem("password");
      if (email !== null && password !== null) {
        this.setState({ email: email, password: password });
      }
    } catch (e) {
      console.error(e);
    }
  };

  componentDidMount() {
    this.get();
  }

  UpdateData = () => {
    var Email = this.state.email;
    var Password = this.state.password;
    updateDoc(doc(firebase, "user", Email), {
      password: Password,
    })
      .then(() => {
        console.log("Password Berhasil DiUpdate");
        Alert.alert("Pemberitahuan", "Password Berhasil DiUpdate");
      })
      .catch((error) => {
        console.log(error);
      });
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
              borderColor: "#ffffff",
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
                <Input
                  w={"100%"}
                  h={"38px"}
                  borderRadius={"30px"}
                  bg="#ffffff"
                  p={"8px"}
                  placeholder=""
                  onChangeText={(email) => this.setState({ email })}
                />
                <Text fontSize={"12px"} color="#ffffff">
                  Password
                </Text>
                <Input
                  w={{
                    base: "100%",
                    md: "25%",
                  }}
                  h={"38px"}
                  borderRadius={"30px"}
                  bg="#ffffff"
                  p={"8px"}
                  alignSelf="center"
                  type={this.state.show ? "text" : "password"}
                  placeholderTextColor="#57D1D1"
                  onChangeText={(password) => this.setState({ password })}
                  InputRightElement={
                    <Pressable onPress={this.toggleShow}>
                      <Ionicons
                        as={Ionicons}
                        name={this.state.show ? "eye" : "eye-off"}
                        size={15}
                        marginRight={15}
                        color="muted.400"
                      />
                    </Pressable>
                  }
                />
              </VStack>
              <Pressable
                w={"90px"}
                h={"40px"}
                borderRadius={"30px"}
                bg="#ffffff"
                alignSelf="center"
                marginTop="15px"
                onPress={() => {
                  this.UpdateData();
                }}
              >
                <Text
                  fontSize={"12px"}
                  color="#47B04A"
                  textAlign="center"
                  fontWeight="bold"
                  py={"10px"}
                >
                  Simpan
                </Text>
              </Pressable>
            </VStack>
          </Box>
        </ScrollView>
      </Box>
    );
  }
}

export default EditProfil_2;
