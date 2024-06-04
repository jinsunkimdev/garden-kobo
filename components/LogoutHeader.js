import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const LogoutHeader = ({ navigation }) => {
  return (
    <View style={styles.header}>
      {/* <Image style={styles.profileImage} source={{ uri: 'https://example.com/user.jpg' }} /> */}
      <Ionicons
        name="person-circle-outline"
        size={40}
        style={styles.profileImage}
      />
      <View style={styles.userInfo}>
        <Text style={styles.userName}>Guest</Text>
      </View>
      <View style={styles.icons}>
        <TouchableOpacity
          style={styles.iconButton}
          onPress={() => {
            /* location button action */
          }}
        >
          <Text style={{fontSize:17}}>Join</Text>
          <Ionicons name="log-in-outline" size={30} color="black" />
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
  },
});

export default LogoutHeader;
