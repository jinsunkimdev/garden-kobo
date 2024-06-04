import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Ionicons,Feather } from "@expo/vector-icons";

const LoginHeader = ({ navigation }) => {
  return (
    <View style={styles.header}>
      {/* <Image style={styles.profileImage} source={{ uri: 'https://example.com/user.jpg' }} /> */}
      <Ionicons name="person-circle" size={40} style={styles.profileImage} />
      <View style={styles.userInfo}>
        <Text style={styles.userName}>Mila</Text>
        <View
          style={{ flexDirection: "row", alignItems: "center", marginTop: 5 }}
        >
          <Ionicons name="location" size={17} color={"#EE731B"} />
          <Text style={styles.userLocation}>Coventry, UK</Text>
        </View>
      </View>
      <View style={styles.icons}>
      {/* 로그아웃은 일단 임시  */}
        <TouchableOpacity
          style={styles.iconButton}
          onPress={() => {
            /* location button action */
          }}
        >
          {/* <Text>LogOut</Text> */}
          <Ionicons name="log-out-outline" size={30} color="black" />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.iconButton}
          onPress={() => {
            /* notifications button action */
          }}
        >
          <Feather name="shopping-bag" size={30} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 25,
    paddingBottom: 10,
    paddingHorizontal: 15,
    backgroundColor: "#D3D3D3",
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  userInfo: {
    marginLeft: 10,
    flexDirection: "column",
  },
  userName: {
    fontWeight: "bold",
  },
  userLocationContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },
  icons: {
    flexDirection: "row",
    marginLeft: "auto",
  },
  iconButton: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 15,
  },
});

export default LoginHeader;
