import * as React from "react";
import {
  Animated
} from "react-native";
import { TabView, SceneMap } from "react-native-tab-view";
import {
  Pressable,
  Flex,
  Box,
  Text,
  VStack,
  Image,
  HStack,
} from "native-base";


const FirstRoute = () => (
  <Box flex={1} bg={"#FFFFFF"} safeArea={true}>
    <Box flex={1} py={"10px"}>
      <Text fontSize={"14px"} color="#000000" textAlign="center" p={"8px"}>
        Tidak ada transaksi diproses
      </Text>
      <Pressable
        w={"300px"}
        h={"40px"}
        borderRadius={"30px"}
        bg="#47B04A"
        alignSelf="center"
        onPress={() => navigation.navigate("Katalog")}
      >
        <Text fontSize={"14px"} color="#FFFFFF" textAlign="center" p={"8px"}>
          Belanja Sekarang
        </Text>
      </Pressable>
    </Box>
  </Box>
);
const SecondRoute = () => (
  <Box flex={1} bg={"#FFFFFF"} safeArea={true}>
    <Box w={"100%"} h={"140px"} py={"20px"} px={"30px"} shadow="1">
      <VStack>
        <HStack space={"20px"}>
          <Image
            bg="#F1F1F1"
            w={"60px"}
            h={"60px"}
            borderRadius={"10px"}
            source={require("../assets/pisang.jpeg")}
          />
          <Box>
            <VStack space={"2px"}>
              <Text
                fontSize={"16px"}
                color="#404040"
                fontWeight="bold"
                textAlign="left"
              >
                Pisang
              </Text>
              <Text fontSize={"12px"} color="#B3B3B3" textAlign="left">
                3 barang
              </Text>
            </VStack>
          </Box>
          <Box>
            <Pressable
              ml={"100px"}
              w={"68px"}
              h={"19px"}
              borderRadius={"30px"}
              bg="#FF6464"
              alignSelf="center"
              onPress={() => navigation.navigate("")}
            >
              <Text
                fontSize={"10px"}
                color="#B30000"
                textAlign="center"
                p={"1px"}
              >
                Diproses
              </Text>
            </Pressable>
          </Box>
        </HStack>
        <HStack py={"10px"} space={"43%"}>
          <VStack>
            <Text
              fontSize={"12px"}
              color="#959595"
              textAlign="left"
              fontWeight="bold"
            >
              Total Harga
            </Text>
            <Text
              fontSize={"14px"}
              color="#000000"
              textAlign="left"
              fontWeight="bold"
            >
              Rp 30.000
            </Text>
          </VStack>
          <Pressable
            w={"113px"}
            h={"25px"}
            borderRadius={"30px"}
            bg="#47B04A"
            alignSelf="center"
            onPress={() => navigation.navigate("Katalog")}
          >
            <Text
              fontSize={"13px"}
              color="#FFFFFF"
              textAlign="center"
              p={"2px"}
            >
              Beli lagi
            </Text>
          </Pressable>
        </HStack>
      </VStack>
    </Box>
  </Box>
);

export default class Pesanan extends React.Component {
  state = {
    index: 0,
    routes: [
      { key: "first", title: "First" },
      { key: "second", title: "Second" },
    ],
  };

  _handleIndexChange = (index) => this.setState({ index });

  _renderTabBar = (props) => {
    const inputRange = props.navigationState.routes.map((x, i) => i);

    return (
      <Flex direction="row" safeArea={true}>
        {props.navigationState.routes.map((route, i) => {
          const opacity = props.position.interpolate({
            inputRange,
            outputRange: inputRange.map((inputIndex) =>
              inputIndex === i ? 1 : 0.5
            ),
          });

          return (
            <Pressable
              flex={"1"}
              alignItems="center"
              p={"16px"}
              bg={"#FFFFFF"}
              cursor="pointer"
              onPress={() => this.setState({ index: i })}
            >
              <Animated.Text style={{ opacity }}>{route.title}</Animated.Text>
            </Pressable>
          );
        })}
      </Flex>
    );
  };

  _renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
  });

  render() {
    const { navigation } = this.props;
    return (
      <TabView
        navigationState={this.state}
        renderScene={this._renderScene}
        renderTabBar={this._renderTabBar}
        onIndexChange={this._handleIndexChange}
      />
    );
  }
}
