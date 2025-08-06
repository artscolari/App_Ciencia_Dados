// App.tsx

import React, { useState } from 'react';
import { Text, View, StyleSheet, ScrollView, SafeAreaView } from 'react-native';

// Importando nossos componentes e funções!
import ResultDisplay from './components/ResultDisplay';
import CalculatorControls from './components/CalculatorControls';
import * as stats from './components/Statistics'; 

// Base de Dados
const dadosDaTurma: number[] = [2, 5, 3, 4, 2, 6, 1, 3, 2, 8, 4, 5, 3, 1, 7];


export default function App() {
  const [resultado, setResultado] = useState<number | string>(0);
  const [tituloResultado, setTituloResultado] = useState<string>('Clique em um cálculo');

  // Funções que o App usa para conectar a lógica com a interface
  const handleCalculateMedia = () => {
    setTituloResultado('A média da turma é:');
    setResultado(stats.calcularMedia(dadosDaTurma));
  };

  const handleCalculateMediana = () => {
    setTituloResultado('A mediana da turma é:');
    setResultado(stats.calcularMediana(dadosDaTurma));
  };
  
  const handleCalculateModa = () => {
    setTituloResultado('A moda da turma é:');
    setResultado(stats.calcularModa(dadosDaTurma));
  };

  const handleCalculateDesvioPadrao = () => {
    setTituloResultado('O desvio padrão é:');
    setResultado(stats.calcularDesvioPadrao(dadosDaTurma));
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.title}>Calculadora de Estatísticas da Turma</Text>
        
        <View style={styles.dataContainer}>
          <Text style={styles.dataTitle}>Dados Coletados:</Text>
          <Text style={styles.dataText}>{dadosDaTurma.join(', ')}</Text>
        </View>

        {/* Renderizando nosso componente de resultado */}
        <ResultDisplay title={tituloResultado} value={resultado} />

        {/* Renderizando nosso componente de botões */}
        <CalculatorControls
          onCalculateMedia={handleCalculateMedia}
          onCalculateMediana={handleCalculateMediana}
          onCalculateModa={handleCalculateModa}
          onCalculateDesvioPadrao={handleCalculateDesvioPadrao}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

// Estilos que pertencem apenas ao App.tsx
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f6fa',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#2c3e50',
  },
  dataContainer: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 15,
    marginBottom: 20,
  },
  dataTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  dataText: {
    fontSize: 16,
    color: '#34495e',
    lineHeight: 24,
  },
});