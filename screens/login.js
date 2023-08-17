import React, { Component } from "react";
import "firebase/firestore";
import { Alert } from "react-native";
import { getDocs, query, collection, where } from "firebase/firestore";
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
  Divider,
  Spinner
} from "native-base";
import { Ionicons } from "@expo/vector-icons";
import Separator from "../components/separator";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      email: "",
      password: "",
      dbusername: "",
      dbpassword: "",
      isLoading: false,
      check_textInputChange: false,
    };
  }

  toggleShow = () => {
    this.setState((prevState) => ({
      show: !prevState.show,
    }));
  };

  readData = () => {
    var Email = this.state.email;
    var Password = this.state.password;
    this.setState({ isLoading: true });

    if (Email.length === 0 || Password.length === 0) {
      alert("Harap isi email dan password terlebih dahulu");
      this.setState({ isLoading: false }); // Menghentikan spinner
    } else if (!this.isValidEmail(Email)) {
      alert("Email yang Anda masukkan tidak sesuai. Silakan coba lagi");
      this.setState({ isLoading: false }); // Menghentikan spinner
    } else if (
      this.state.email === "Guest" &&
      this.state.password === "Guest"
    ) {
      this.setState({ isLoading: false });
      this.props.navigation.navigate("Berandas");
    } else {
      this.setState({ isLoading: true }); // Memulai spinner sebelum melakukan query pada database

      getDocs(
        query(collection(firebase, "user"), where("email", "==", Email))
      ).then((docSnap) => {
        this.setState({ isLoading: false }); // Menghentikan spinner setelah query selesai
        if (docSnap.empty) {
          alert(
            "Email yang Anda masukkan salah. Silakan coba lagi atau daftar terlebih dahulu."
          );
        } else {
          let users = [];
          docSnap.forEach((doc) => {
            users.push({ ...doc.data(), id: doc.id });
          });
          this.setState({
            dbpassword: users[0].password,
            dbemail: users[0].email,
          });
          this.validasi();
        }
      });
    }
  };

  isValidEmail = (email) => {
    // Format validasi email menggunakan regular expression
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
  };

  validasi = () => {
    console.log(this.state.email);
    console.log(this.state.password);

    if (this.state.email === "Guest" && this.state.password === "Guest") {
      this.props.navigation.navigate("Berandas");
    } else {
      if (
        this.state.email === this.state.dbemail &&
        this.state.password === this.state.dbpassword
      ) {
        console.log("Login Berhasil");
        this.props.navigation.navigate("Berandas");
      } else {
        Alert.alert(
          "Login Gagal",
          "Email atau password salah. Silakan coba lagi"
        );
      }
    }
  };

  validasiDB = () => {};

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
        <ScrollView py={"25px"} px={"25px"} h={"100%"}>
          <Text
            fontSize={"30px"}
            color="#404040"
            fontWeight="bold"
            textAlign="left"
          >
            Masuk
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
              placeholder="Masukkan email"
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
              type={this.state.show ? "text" : "password"}
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
          <Separator height={"70"} />
          <Pressable
            w={"100%"}
            h={"40px"}
            borderRadius={"30px"}
            bg="#47B04A"
            alignSelf="center"
            disabled={this.state.isLoading}
            onPress={() => {
              this.readData();
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
                Masuk
              </Text>
            )}
          </Pressable>
          <Box py={"10px"} px={"20px"}>
            <HStack space={"3"}>
              <Divider mt={"10px"} w={"26%"} bg="#959595" />
              <Text fontSize={"12px"} color="#959595">
                Atau masuk dengan
              </Text>
              <Divider mt={"10px"} w={"26%"} bg="#959595" />
            </HStack>
          </Box>
          <Separator height={"2"} />
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
          <Separator height={"30"} />
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

export default Login;
