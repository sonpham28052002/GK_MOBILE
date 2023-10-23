import React from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from "react-native";

export default function screen2({navigation}) {
  var Data = [
    {
      id: 1,
      name: "Lap",
      image: "1.png",
    },
    {
      id: 2,
      name: "SmartPhone",
      image: "2.png",
    },
    {
      id: 3,
      name: "Ipad",
      image: "3.png",
    },
    {
      id: 4,
      name: "SmartPhone",
      image: "4.png",
    },
  ];
  var [list, setList] = React.useState(Data);
  console.log(list);
  return (
    <View style={{ flex: 1, paddingHorizontal: 15, backgroundColor: "white" }}>
      <View
        style={{
          flexDirection: "row",
          marginTop: 20,
          justifyContent: "space-between",
        }}
      >
        <View>
          <Image
            style={{
              height: 20,
              width: 20,
              position: "absolute",
              top: 5,
              left: 10,
            }}
            source={require("../Data/search.png")}
          />
          <TextInput
            placeholder="Search"
            style={{
              height: 30,
              width: 300,
              backgroundColor: "#f3f4f6",
              paddingLeft: 40,
            }}
          />
        </View>
        <View
          style={{
            borderRadius: 10,
            backgroundColor: "#f3f4f6",
            height: 30,
            width: 30,
          }}
        ></View>
      </View>
      <View style={{ marginTop: 20 }}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={{ fontWeight: "bold", fontSize: 20 }}>Categories</Text>
          <Text>See all {">"}</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 20,
          }}
        >
          <TouchableOpacity
            style={{
              backgroundColor: "#d9cbf6",
              borderRadius: 10,
              borderColor: "#9167e5",
              borderWidth: 1,
              height: 120,
              width: 120,
              justifyContent: "center",
              alignItems: "center",
            }}
            onPress={() => {
              list = Data.filter((item) => item.name === "SmartPhone");
              setList(list);
            }}
          >
            <Image
              style={{ height: 100, width: 100 }}
              source={require("../Data/smart.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: "#c5d1f7",
              borderRadius: 10,
              height: 120,
              width: 120,
              justifyContent: "center",
              alignItems: "center",
            }}
            onPress={() => {
              list = Data.filter((item) => item.name === "Ipad");
              setList(list);
            }}
          >
            <Image
              style={{ height: 90, width: 90 }}
              source={require("../Data/ipad.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: "#f9d8c0",
              borderRadius: 10,
              height: 120,
              width: 120,
              justifyContent: "center",
              alignItems: "center",
            }}
            onPress={() => {
              list = Data.filter((item) => item.name === "Lap");
              setList(list);
            }}
          >
            <Image
              style={{ height: 100, width: 100 }}
              source={require("../Data/macbook.png")}
            />
          </TouchableOpacity>
        </View>
        <View style={{ marginTop: 20, flexDirection: "row" }}>
          <TouchableOpacity
            style={{
              height: 30,
              backgroundColor: "#ebfdff",
              justifyContent: "center",
              alignItems: "center",
              width: 130,
              borderRadius: 100,
            }}
          >
            <Text
              style={{ color: "#0dc1d8", fontSize: 15, fontWeight: "bold" }}
            >
              Best Seller
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              height: 30,
              justifyContent: "center",
              alignItems: "center",
              width: 130,
            }}
          >
            <Text style={{ fontSize: 15 }}>Best Matched</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              height: 30,
              justifyContent: "center",
              alignItems: "center",
              width: 130,
            }}
          >
            <Text style={{ fontSize: 15 }}>Popular</Text>
          </TouchableOpacity>
        </View>
        <View style={{ width: "100%" }}>
          <ScrollView>
            <FlatList
              data={list}
              renderItem={({ item }) => {
                return (
                  <View
                    style={{
                      height: 80,
                      width: "100%",
                      marginTop: 10,
                      flexDirection: "row",
                      alignItems: "center",
                      borderWidth: 1,
                      borderRadius: 10,
                    }}
                  >
                    <Image
                      style={{ height: 50, width: 80 }}
                      source={require(`../Data/${item.image}`)}
                    />
                    <View
                      style={{ marginLeft: 20, justifyContent: "space-around" }}
                    >
                      <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                        {item.name}
                      </Text>
                      <Image
                        style={{ height: 15, width: 80, marginTop: 30 }}
                        source={require("../Data/Rating 5.png")}
                      />
                    </View>
                  </View>
                );
              }}
            />
          </ScrollView>
        </View>
        <View>
          <TouchableOpacity
            style={{
              height: 40,
              backgroundColor: "#f3f4f6",
              justifyContent: "center",
              alignItems: "center",
              marginTop:20
            }}
            onPress={()=>{
                list = Data
                setList(list)
            }}
          >
            <Text>See All</Text>
          </TouchableOpacity>
          <Image
            style={{
              height: 100,
              width: "100%",
              borderRadius: 10,
              marginVertical: 30,
            }}
            source={require("../Data/banner.png")}
          />
        </View>
      </View>
    </View>
  );
}
