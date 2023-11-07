import React from "react";
import { View, Text } from "react-native";

import styles from "./specifics.style";

const Specifics = ({ title, info }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.pointWrapper}>
        <Text style={styles.pointText}>{info}</Text>
      </View>
    </View>
  );
};

export default Specifics;
