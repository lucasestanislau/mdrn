import { StatusBar, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useIsFocused } from "@react-navigation/native";

export default function FocusedStatusBar(props) {
  const isFocused = useIsFocused();

  return isFocused ? <StatusBar animated={true} {...props} /> : null;
}

const styles = StyleSheet.create({});
