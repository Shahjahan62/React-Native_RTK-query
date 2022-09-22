import React, { useEffect, useState } from "react";
import {
  View,
  Button,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, setName } from "./counterSlice";
import {
  useGetPokemonByNameQuery,
  useGetallMutation,
  useAddRecordMutation,
} from "./services/pokeman";

export function Counter() {
  const count = useSelector((state) => state.counter.value);
  const roll = useSelector((state) => state.counter.Rollno);

  // const { data, error, isLoading } = useGetPokemonByNameQuery();
  var [getall, { data }] = useGetallMutation();
  const [value, setValue] = useState("");

  const record = {
    attendence: value,
  };

  var [getall, { data }] = useGetallMutation();

  useEffect(() => {
    getall({});
  }, []);

  const [AddData, { data: post, isSuccess, error }] = useAddRecordMutation();
  const AddRecordHandler = async () => {
    await AddData(record);
    getall({});
  };

  console.log(error);

  const dispatch = useDispatch();

  return (
    <View style={{ padding: 20, marginTop: 50, flex: 1 }}>
      <ScrollView style={{ backgroundColor: "white", flex: 0.5 }}>
        <TextInput
          style={{
            paddingLeft: 20,
            borderRadius: 10,
            borderWidth: 1,
            height: 50,
            width: "100%",
          }}
          value={value}
          onChangeText={setValue}
          placeholder="Enter name"
        />
        <TouchableOpacity
          onPress={() => AddRecordHandler()}
          style={{
            width: 100,
            marginTop: 20,
            height: 50,
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 20,
            backgroundColor: "lime",
            alignSelf: "center",
          }}
        >
          <Text style={{ fontWeight: "bold" }}>Add</Text>
        </TouchableOpacity>

        {data ? (
          data.map((item, index) => <Text>{item.attendence}</Text>)
        ) : (
          <Text>{error}</Text>
        )}
        {/* {data.map((item, index) => (
          <View>
            <Text key={index}>{item.attendence}</Text>
            <Text>{item._id}</Text>
          </View>
        ))} */}
      </ScrollView>

      <View>
        {/*  {error ? (
          <Text style={{ color: "red", fontSize: 30 }}>Error</Text>
        ) : isLoading ? (
          <Text>Loading...</Text>
        ) : data ? (
          <Text style={{ fontSize: 20, color: "black" }}>
            {data.attendence}
          </Text>
        ) : null} */}
        {/* <Button title="Increment" onClick={() => dispatch(increment())}>
          Increment
        </Button>
        <Text style={{ fontSize: 50 }}>{count}</Text>
        <Button title="Decrement" onClick={() => dispatch(decrement())}>
          Decrement
        </Button>
        <TouchableOpacity
          onPress={() => {
            dispatch(setRoll("32"));
          }}
        >
          <Text>Change name</Text>
        </TouchableOpacity>

        <Text>{roll}</Text> */}
      </View>
    </View>
  );
}
