import React from "react";
import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";

export default function screen1({ navigation }) {
  var [email,setEmail] = React.useState("")
  var [pass,setPass] = React.useState("")
  var arr =[{
    email:"sonpham28052002@gmail.com",
    password:"123"
  }]
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <View
        style={{
          height: 300,
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 70,
        }}
      >
        <Image
          style={{ height: 100, width: 100, marginBottom: 10 }}
          source={require("../Data/icon.png")}
        />
        <Text style={{ fontSize: 27, fontWeight: "bold" }}>Hello Agian!</Text>
        <Text style={{ color: "gray" }}>Log into your account</Text>
      </View>
      <View
        style={{
          width: "100%",
          alignItems: "center",
        }}
      >
        <View style={{ marginBottom: 20 }}>
          <Image
            style={{
              height: 20,
              width: 25,
              position: "absolute",
              top: 13,
              left: 10,
            }}
            source={require("../Data/Vector.png")}
          />
          <TextInput
            style={{
              height: 45,
              width: 300,
              borderColor: "gray",
              borderWidth: 1,
              borderRadius: 10,
              paddingLeft: 40,
            }}
            value={email}
            onChangeText={setEmail}
            placeholder="Enter your email address"
          />
        </View>
        <View style={{ marginBottom: 10 }}>
          <Image
            style={{
              height: 30,
              width: 30,
              position: "absolute",
              top: 5,
              left: 10,
            }}
            source={require("../Data/lock.png")}
          />
          <TextInput
            style={{
              height: 45,
              width: 300,
              borderColor: "gray",
              borderWidth: 1,
              borderRadius: 10,
              paddingHorizontal: 40,
            }}
            value={pass}
            onChangeText={setPass}
            placeholder="Enter your email address"
          />
          <Image
            style={{
              height: 30,
              width: 30,
              position: "absolute",
              top: 7,
              right: 10,
            }}
            source={require("../Data/eye.png")}
          />
        </View>
        <View
          style={{
            height: 45,
            width: 300,
            flexDirection: "row",
            justifyContent: "flex-end",
          }}
        >
          <Text style={{ color: "#00bdd6" }}>Forgot password?</Text>
        </View>
        <TouchableOpacity
          style={{
            height: 45,
            width: 300,
            backgroundColor: "#00bdd6",
            borderRadius: 10,
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row",
          }}
          onPress={()=>{
            let check = arr.filter((item) => item.email===email&& item.password===pass)
            if(check.length!=0){
              navigation.navigate("screen2")
            }
            }}
        >
          <Text style={{ color: "white", fontWeight: "bold", fontSize: 20 }}>
            Continue
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          paddingHorizontal: 50,
          marginTop: 50,
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <View style={{ height: 1, width: 150, borderWidth: 1 }}></View>
        <Text>or</Text>
        <View style={{ height: 1, width: 150, borderWidth: 1 }}></View>
      </View>
      <View
        style={{
          flexDirection: "row",
          marginTop: 20,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image
          style={{ height: 53, width: 60, marginRight: 10 }}
          source={require("../Data/google.png")}
        />
        <Image
          style={{ height: 53, width: 60, marginRight: 10 }}
          source={require("../Data/face.png")}
        />
        <Image
          style={{ height: 53, width: 60, marginRight: 10 }}
          source={require("../Data/apple.png")}
        />
      </View>
    </View>
  );
}
