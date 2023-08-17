import React, { useState, useEffect } from "react";
import { NativeBaseProvider } from "native-base";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Ionicons } from "@expo/vector-icons";
import { View, Image } from "react-native";
import {
  Beranda,
  Katalog,
  Keranjang,
  Pesanan,
  DashboardAkun,
  DetailProduk,
  KeranjangBelanja,
  PembayaranAntar,
  PembayaranAntar_2,
  PembayaranAmbil,
  PembayaranAmbil_2,
  VerifikasiPembayaran,
  VerifikasiPembayaran_2,
  VerifikasiSukses,
  DetailPesanan,
  Hello,
  LostKoneksi,
  Login,
  EditProfil,
  EditProfil_2,
  Register,
} from "./screens";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const BottomNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={() => ({
        tabBarActiveTintColor: "#47B04A",
        tabBarInactiveTintColor: "#959595",
        tabBarStyle: { height: "10%", backgroundColor: "#FFFFFF", shadow: "9" },
        tabBarIconStyle: { marginTop: 10 },
        tabBarLabelStyle: {
          fontSize: 12,
          marginBottom: 10,
        },
        headerShown: false,
        unmountOnBlur: true,
      })}
    >
      <Tab.Screen
        name="Beranda"
        component={Beranda}
        options={{
          tabBarLabel: "Beranda",
          tabBarIcon: ({ color }) => {
            return <Ionicons name="ios-home" size={25} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Katalog"
        component={Katalog}
        options={{
          tabBarIcon: ({ color }) => {
            return (
              <Ionicons name="md-folder-open-outline" size={25} color={color} />
            );
          },
        }}
      />
      <Tab.Screen
        name="Keranjang"
        component={Keranjang}
        options={{
          tabBarLabel: "Keranjang",
          tabBarIcon: ({ color }) => {
            return (
              <Ionicons name="ios-basket-outline" size={25} color={color} />
            );
          },
        }}
      />
      <Tab.Screen
        name="Pesanan"
        component={Pesanan}
        options={{
          tabBarLabel: "Pesanan",
          tabBarIcon: ({ color }) => {
            return <Ionicons name="reader-outline" size={25} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="DashboardAkun"
        component={DashboardAkun}
        options={{
          tabBarLabel: "Akun",
          tabBarIcon: ({ color }) => {
            return (
              <Ionicons name="person-circle-outline" size={25} color={color} />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

const App = () => {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowSplash(false);
    }, 5000);
  }, []);

  if (showSplash) {
    return (
      <View>
        <Image source={require("./assets/splashsc.png")} />
      </View>
    );
  }

  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Hello"
            component={Hello}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Login"
            component={Login}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Register"
            component={Register}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="LostKoneksi"
            component={LostKoneksi}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Berandas"
            component={BottomNavigator}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="DetailProduk"
            component={DetailProduk}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="KeranjangBelanja"
            component={KeranjangBelanja}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="PembayaranAntar"
            component={PembayaranAntar}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="PembayaranAntar_2"
            component={PembayaranAntar_2}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="PembayaranAmbil"
            component={PembayaranAmbil}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="PembayaranAmbil_2"
            component={PembayaranAmbil_2}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="VerifikasiPembayaran"
            component={VerifikasiPembayaran}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="VerifikasiPembayaran_2"
            component={VerifikasiPembayaran_2}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="VerifikasiSukses"
            component={VerifikasiSukses}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="DetailPesanan"
            component={DetailPesanan}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="EditProfil"
            component={EditProfil}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="EditProfil_2"
            component={EditProfil_2}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
};

export default App;
