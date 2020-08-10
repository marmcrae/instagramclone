import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  Dimensions,
  ScrollView
} from "react-native";

import config from "../../config";

class Profile extends Component {
  constructor() {
    super();
  }


  render() {

      return (
      <ScrollView>
        <View
          style={{
            height: 100 + "%",
            width: 100 + "%",
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            paddingTop: 20
          }}
        >
          <View style={styles.profile}>
            <View style={{ flexDirection: "row", width: 100 + "%" }}>
              <View
                style={{
                  flex: 3,
                  height: 100,
                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                <Image
                  style={styles.user}
                  source={{
                    uri:
                      "https://lh3.googleusercontent.com/W2XuTZdCzj6kTvwgwDRPzcTGiogHMXsZh2cwf5LdiCG7UWZRTqOZpGbeyuleQpIMdS9bkvUES1bvzF8PoLon48tG5kc"
                  }}
                />
              </View>
              <View style={{ flex: 7, height: 100 }}>
                <View style={{ flexDirection: "row", flex: 1 }}>
                  <View style={styles.statCol}>
                    <Text>100</Text>
                    <Text>Posts</Text>
                  </View>
                  <View style={styles.statCol}>
                    <Text>100</Text>
                    <Text>Followers</Text>
                  </View>
                  <View style={styles.statCol}>
                    <Text>100</Text>
                    <Text>Following</Text>
                  </View>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    width: 100 + "%",
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "rgb(239,239,239)"
                  }}
                >
                  <Text>Edit Profile</Text>
                </View>
              </View>
            </View>
            <View style={{ flexDirection: "column", width: 100 + "%" }}>
              <Text style={styles.fontBold}>Mar McRae</Text>
              <Text style={styles.fontSm}>
                User Pics Here
              </Text>
            </View>
          </View>
          <View style={styles.topBar}>
            <View style={styles.topBarIcon} />
            <View style={styles.topBarIcon} />
            <View style={styles.topBarIcon} />
            <View style={styles.topBarIcon} />
            <View style={styles.topBarIcon} />
          </View>
          
         
          </View>
      
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
 
  profile: {
    width: 100 + "%",
    display: "flex",
    flexDirection: "column",
    paddingVertical: 20
  },
  fontSm: {
    fontSize: 16
  },
  fontBold: {
    fontSize: 16,
    fontWeight: "bold"
  },
  user: {
    height: 80,
    borderRadius: 40,
    width: 80
  },
  statCol: {
    flexDirection: "column",
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  topBar: {
    height: config.styleConstants.rowHeight,
    width: 100 + "%",
    borderTopWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: "rgb(239,239,239)",
    flexDirection: "row"
  },
  topBarIcon: {
    borderLeftWidth: StyleSheet.hairlineWidth,
    borderRightWidth: StyleSheet.hairlineWidth,
    borderColor: "rgb(239,239,239)",
    flex: 1
  }
});


export default Profile;
