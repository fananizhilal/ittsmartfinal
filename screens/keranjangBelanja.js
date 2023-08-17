import React, { Component } from "react";
import {
  Text,
  Box,
  HStack,
  ScrollView,
  VStack,
  Pressable,
  Image,
  Modal,
  Center
} from "native-base";
import { Ionicons } from "@expo/vector-icons";
import { Header } from "../components";

class KeranjangBelanja extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      showModal2: false,
      count: 0,
      
    };
  }

  setCount = () => {
    this.setState((prevState) => ({
      ...prevState,
      count: this.state.count + 1,
    }));
  };

  setCount2 = () => {
    this.setState((prevState) => ({
      ...prevState,
      count: this.state.count - 1,
    }));
  };

  resetCount = () => {
    this.setState({ count: 0 });
  };

  toggleModal = (modalName) => {
    this.setState((prevState) => ({ [modalName]: !prevState[modalName] }));
  };

  closeModal = () => {
    this.setState({ showModal: false });
  };

  navigateToNextPage = () => {
    this.closeModal();
    this.props.navigation.navigate("pembayaranAntar");
  };

  render() {
    const { route } = this.props;
    const data = route.params.data;
    const { navigation } = this.props;
    const { count } = this.state;
    const { showModal, showModal2 } = this.state;

    return (
      <Box flex={1} bg="#FFFFFF" safeArea={true}>
        <Header title="Keranjang" backButton={true} />
        <ScrollView>
          <Box bg="#FFFFFF" w={"100%"} h={"160px"} p={"20px"} shadow="1">
            <HStack space={"30px"}>
              <Image
                bg="#F1F1F1"
                w={"120px"}
                h={"120px"}
                borderRadius={"10px"}
                source={{ uri: data.gambar }}
              />
              <Box>
                <VStack space={"5px"}>
                  <Text
                    fontSize={"16px"}
                    color="#404040"
                    fontWeight="bold"
                    textAlign="left"
                  >
                    {data.nama}
                  </Text>
                  <Text fontSize={"10px"} color="#B3B3B3" textAlign="left">
                    {data.berat}
                  </Text>
                  <Text
                    fontSize={"13px"}
                    color="#000000"
                    fontWeight="bold"
                    textAlign="left"
                  >
                    {data.harga}
                  </Text>
                </VStack>
                <HStack space={"20px"} mt={"20px"}>
                  <Pressable onPress={this.resetCount}>
                    <Ionicons name="trash" size={20} color="#000000" />
                  </Pressable>
                  <Pressable onPress={this.setCount2}>
                    <Ionicons
                      name="remove-circle-outline"
                      size={20}
                      color="#1FCC79"
                    />
                  </Pressable>
                  <Box>
                    <Text
                      fontSize={"15px"}
                      color="#000000"
                      textAlign="center"
                      fontWeight="bold"
                    >
                      {count}
                    </Text>
                  </Box>
                  <Pressable onPress={this.setCount}>
                    <Ionicons
                      name="ios-add-circle-outline"
                      size={20}
                      color="#1FCC79"
                    />
                  </Pressable>
                </HStack>
              </Box>
            </HStack>
          </Box>
          <Box>
            <Center>
              <Box py={"10px"}>
                <Pressable
                  px={"20px"}
                  w={"100%"}
                  h={"40px"}
                  borderRadius={"30px"}
                  borderColor="#47B04A"
                  borderWidth="2"
                  alignSelf="center"
                  onPress={() => this.toggleModal("showModal")}
                >
                  <HStack py={"7px"} px={"2px"} space={"35%"}>
                    <Text
                      fontSize={"14px"}
                      color="#000000"
                      textAlign="center"
                      fontWeight="bold"
                    >
                      Pilih Opsi Pengiriman
                    </Text>
                    <Ionicons
                      name="chevron-forward-circle-outline"
                      size={19}
                      color="#959595"
                    />
                  </HStack>
                </Pressable>
              </Box>
              <Modal isOpen={showModal} size="lg">
                <Modal.Content maxWidth="90%">
                  <Modal.Header>
                    <HStack space={"10"}>
                      <Text fontSize={"16px"} color="#000000" fontWeight="bold">
                        Opsi Pengiriman
                      </Text>
                      <Pressable onPress={this.navigateToNextPage}>
                        <Box
                          w={"54px"}
                          h={"23px"}
                          borderRadius={"30px"}
                          bg="#47B04A"
                          p={"2px"}
                        >
                          <Text
                            fontSize={"10px"}
                            color="#ffffff"
                            textAlign="center"
                            fontWeight="bold"
                            py={"2px"}
                          >
                            Pilih
                          </Text>
                        </Box>
                      </Pressable>
                    </HStack>
                  </Modal.Header>
                  <Modal.Body bg="#FFFFFF">
                    <HStack space={"3"} py={"3px"}>
                      <Box
                        w={"40px"}
                        h={"40px"}
                        borderRadius={"100px"}
                        bg="#FBFFB1"
                        p={"7px"}
                      >
                        <Ionicons name="bicycle" size={24} color="#19A7CE" />
                      </Box>
                      <Text
                        fontSize={"14px"}
                        color="#000000"
                        fontWeight="bold"
                        textAlign="center"
                        py={"7px"}
                      >
                        Pesan Antar
                      </Text>
                      <Pressable
                        ml={"8"}
                        onPress={() => {
                          this.toggleModal("showModal2");
                        }}
                      >
                        <Box
                          mt={"10px"}
                          w={"54px"}
                          h={"23px"}
                          borderRadius={"30px"}
                          borderColor="#47B04A"
                          borderWidth={"1"}
                          p={"2px"}
                        >
                          <Text
                            fontSize={"10px"}
                            color="#47B04A"
                            textAlign="center"
                          >
                            Ganti
                          </Text>
                        </Box>
                      </Pressable>
                    </HStack>
                    <VStack py={"10px"} space={"10px"}>
                      {/* ... (kode selanjutnya) */}
                    </VStack>
                  </Modal.Body>
                </Modal.Content>
              </Modal>

              <Modal isOpen={showModal2} size="lg">
                {/* ... (kode selanjutnya) */}
              </Modal>
            </Center>
            <Box
              py={"10px"}
              px={"20px"}
              alignItems="center"
              justifyContent="center"
            >
              <Pressable
                px={"20px"}
                w={"99%"}
                h={"42px"}
                borderRadius={"30px"}
                bg="#47B04A"
                alignSelf="center"
                onPress={() => navigation.navigate("PembayaranAntar")}
              >
                <HStack
                  py={"9px"}
                  px={"2px"}
                  alignItems="center"
                  justifyContent="center"
                >
                  <Text
                    fontSize={"14px"}
                    color="#FFFFFF"
                    textAlign="center"
                    fontWeight="bold"
                  >
                    Belanja Sekarang
                  </Text>
                </HStack>
              </Pressable>
            </Box>
          </Box>
        </ScrollView>
      </Box>
    );
  }
}

export default KeranjangBelanja;
