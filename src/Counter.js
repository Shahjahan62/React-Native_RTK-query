import React, { useEffect } from "react";
import { View, Button, Text, TouchableOpacity } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, setName } from "./counterSlice";
import {
  useGetPokemonByNameQuery,
  useGetallMutation,
} from "./services/pokeman";

export function Counter() {
  const count = useSelector((state) => state.counter.value);
  const roll = useSelector((state) => state.counter.Rollno);

  const { data, error, isLoading } = useGetPokemonByNameQuery();
  // var [getall, { data }] = useGetallMutation();
  // useEffect(() => {
  //   getall({});
  // }, []);
  console.log(data);

  const dispatch = useDispatch();

  return (
    <View style={{ marginTop: 50, flex: 1 }}>
      <View style={{ backgroundColor: "red", flex: 0.5 }}>
        {data.map((item, index) => (
          <>
            <Text key={index}>{item.attendence}</Text>
            <Text>{item._id}</Text>
          </>
        ))}
      </View>

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
            dispatch(setName("32"));
          }}
        >
          <Text>Change name</Text>
        </TouchableOpacity>

        <Text>{roll}</Text> */}
      </View>
    </View>
  );
}
