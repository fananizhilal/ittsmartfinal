import React, { Component } from "react";
import { Alert } from "react-native";
import "firebase/firestore";
import { doc, setDoc } from "firebase/firestore";
import firebase from "../firebase";
import {
  Text,
  Box,
  HStack,
  ScrollView,
  VStack,
  Pressable,
  Image,
  Input,
  Spinner,
} from "native-base";
import { Ionicons } from "@expo/vector-icons";
import Separator from "../components/separator";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      email: "",
      password: "",
      check_textInputChange: false,
      secureTextEntry: true,
      confirmSecureTextEntry: true,
      isLoading: false,
    };
  }

  toggleShow = () => {
    this.setState((prevState) => ({
      show: !prevState.show,
    }));
  };

  InsertRecord = () => {
    var Email = this.state.email;
    var Password = this.state.password;

    if (Email.length == 0) {
      alert("Harap isi email dan password terlebih dahulu");
      this.setState({ isLoading: false }); // Menghentikan spinner
    } else if (!this.isValidEmail(Email)) {
      alert("Email yang Anda masukkan tidak sesuai. Silakan coba lagi");
      this.setState({ isLoading: false }); // Menghentikan spinner
    } else {
      this.setState({ isLoading: true }); // Memulai spinner sebelum cek email pada database

      // Cek email pada database
      setDoc(doc(firebase, "user", Email), {
        email: Email,
        password: Password,
      })
        .then(() => {
          // Jika login berhasil maka masuk halaman login
          console.log("data berhasil submit");
          this.setState({ isLoading: false }); // Menghentikan spinner
          Alert.alert("Data Berhasil Disimpan!");
          this.props.navigation.navigate("Login");
        })
        .catch((error) => {
          // Jika mengambil data gagal, akan tampil error
          this.setState({ isLoading: false }); // Menghentikan spinner
          setError(error.message);
        });
    }
  };

  isValidEmail = (email) => {
    // Format validasi email menggunakan regular expression
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
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
      <Box bg="#FFFFFF" safeArea={true}>
        <Image
          w={"100%"}
          h={"250px"}
          alignSelf="center"
          source={require("../assets/bg.jpg")}
        />
        <ScrollView py={"20px"} px={"25px"} h={"100%"}>
          <Text
            fontSize={"30px"}
            color="#404040"
            fontWeight="bold"
            textAlign="left"
          >
            Buat Akun
          </Text>
          <Separator height={"2"} />
          <VStack>
            <Text
              p={"5px"}
              fontSize={"14px"}
              color="#404040"
              fontWeight="bold"
              textAlign="left"
            >
              Email
            </Text>
            <Input
              w={"100%"}
              h={"40px"}
              borderWidth="2"
              borderRadius={"30px"}
              borderColor="#47B04A"
              alignSelf="center"
              placeholder="Masukkan Email"
              onChangeText={(email) => this.setState({ email })}
            />
            <Text
              p={"5px"}
              fontSize={"14px"}
              color="#404040"
              fontWeight="bold"
              textAlign="left"
            >
              Password
            </Text>
            <Input
              w={{
                base: "100%",
                md: "25%",
              }}
              h={"40px"}
              borderWidth="2"
              borderRadius={"30px"}
              borderColor="#47B04A"
              alignSelf="center"
              placeholder="Masukkan password"
              onChangeText={(password) => this.setState({ password })}
              type={this.state.show ? "text" : "password"}
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
          <Separator height={"70"} />
          <Pressable
            w={"100%"}
            h={"40px"}
            borderRadius={"30px"}
            bg="#47B04A"
            alignSelf="center"
            onPress={() => {
              this.InsertRecord();
            }}
          >
            {this.state.isLoading ? (
              <Spinner
                color="white"
                size="small"
                style={{
                  position: "absolute",
                  left: "50%",
                  top: "50%",
                  transform: [{ translateX: -12 }, { translateY: -12 }],
                }}
              />
            ) : (
              <Text
                fontSize={"12px"}
                color="#FFFFFF"
                textAlign="center"
                py={"8px"}
              >
                Buat Akun
              </Text>
            )}
          </Pressable>
          <Separator height={"30"} />
          <HStack space={"3px"} alignSelf="center">
            <Text fontSize={"12px"} color="#959595" textAlign="center">
              Sudah memiliki akun?
            </Text>
            <Pressable onPress={() => navigation.navigate("Login")}>
              <Text
                fontSize={"12px"}
                fontWeight="bold"
                color="#959595"
                textAlign="center"
              >
                Login
              </Text>
            </Pressable>
          </HStack>
          <Image
            mt={"10px"}
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

export default Register;
