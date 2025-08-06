// components/CalculatorControls.tsx

import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

type CalculatorControlsProps = {
  onCalculateMedia: () => void;
  onCalculateMediana: () => void;
  onCalculateModa: () => void;
  onCalculateDesvioPadrao: () => void;
};

const CalculatorControls = (props: CalculatorControlsProps) => {
  return (
    <View style={styles.buttonContainer}>
      <View style={styles.buttonSpacing}>
        <Button title="Calcular Média" onPress={props.onCalculateMedia} />
      </View>
      <View style={styles.buttonSpacing}>
        <Button title="Calcular Mediana" onPress={props.onCalculateMediana} color="#27ae60"/>
      </View>
      <View style={styles.buttonSpacing}>
        <Button title="Calcular Moda" onPress={props.onCalculateModa} color="#8e44ad" />
      </View>
      <View style={styles.buttonSpacing}>
        <Button title="Calcular Desvio Padrão" onPress={props.onCalculateDesvioPadrao} color="#c0392b" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    buttonContainer: {
        marginTop: 10,
    },
    buttonSpacing: {
        marginBottom: 15,
    },
});

export default CalculatorControls;