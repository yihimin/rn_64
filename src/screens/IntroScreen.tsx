import React, { useRef, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Animated,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import * as Haptics from "expo-haptics";

const TOTAL_STICKS = 12;

export default function IntroScreen() {
  const navigation = useNavigation<any>();
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const dropAnim = useRef(new Animated.Value(0)).current;

  const handleSelect = (index: number) => {
    setSelectedIndex(index);
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium); // 💥 여기서 진동!

    Animated.timing(dropAnim, {
      toValue: -100,
      duration: 700,
      useNativeDriver: true,
    }).start(() => {
      setTimeout(() => navigation.navigate("Result"), 400);
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        궁금한 점을 차분히 생각하며
        {"\n"}
        손택의 괘를 뽑아보세요.
      </Text>

      <View style={styles.stickContainer}>
        {Array.from({ length: TOTAL_STICKS }).map((_, index) => (
          <TouchableOpacity key={index} onPress={() => handleSelect(index)}>
            <Animated.View
              style={[
                styles.stick,
                {
                  backgroundColor: selectedIndex === index ? "#f5a" : "#ccc",
                  transform:
                    selectedIndex === index ? [{ translateY: dropAnim }] : [],
                },
              ]}
            />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#111",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    color: "#fff",
    fontSize: 18,
    marginBottom: 40,
    textAlign: "center",
  },
  stickContainer: {
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "center",
  },
  stick: {
    width: 8,
    height: 100,
    borderRadius: 4,
    marginHorizontal: 4,
  },
});
