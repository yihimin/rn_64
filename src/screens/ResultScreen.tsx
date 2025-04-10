import React, { useMemo } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { usePurchaseStore } from "../store/usePurchaseStore";
import fortuneData from "../constants/fortuneData";
import { useHistoryStore } from "../store/useHistoryStore";

const ResultScreen = ({ navigation }: any) => {
  const purchased = usePurchaseStore((state) => state.purchased);
  const fortune = useMemo(() => {
    return fortuneData[Math.floor(Math.random() * fortuneData.length)];
  }, []);

  return (
    <View style={styles.container}>
      {purchased ? (
        <>
          <Text style={styles.title}>
            {fortune.name} {fortune.symbol}
          </Text>
          <Text style={styles.text}>{fortune.meaning}</Text>
          <Text style={styles.text}>{fortune.detail}</Text>
        </>
      ) : (
        <>
          <Text style={styles.locked}>🔒 잠긴 점괘입니다.</Text>
          <Button
            title="결제하기 (가짜)"
            onPress={() => usePurchaseStore.getState().purchase()}
          />
        </>
      )}
      <Button title="돌아가기" onPress={() => navigation.goBack()} />
      <Button
        title="기억하기 📝"
        onPress={() => {
          useHistoryStore.getState().addToHistory(fortune);
          alert("기록되었어요!");
        }}
      />
    </View>
  );
};

export default ResultScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#111",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 26,
    color: "#fff",
    marginBottom: 12,
  },
  text: {
    fontSize: 16,
    color: "#ccc",
    marginBottom: 8,
    textAlign: "center",
  },
  locked: {
    fontSize: 20,
    color: "#ff6666",
    marginBottom: 20,
  },
});
