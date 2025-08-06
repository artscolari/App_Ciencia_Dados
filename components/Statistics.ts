// components/statistics.ts

// Funções puras que recebem os dados e retornam um resultado.

export const calcularMedia = (dados: number[]): number => {
  const soma = dados.reduce((acc, valor) => acc + valor, 0);
  return soma / dados.length;
};

export const calcularMediana = (dados: number[]): number => {
  const dadosOrdenados = [...dados].sort((a, b) => a - b);
  const meio = Math.floor(dadosOrdenados.length / 2);
  if (dadosOrdenados.length % 2 !== 0) {
    return dadosOrdenados[meio];
  }
  return (dadosOrdenados[meio - 1] + dadosOrdenados[meio]) / 2;
};

export const calcularModa = (dados: number[]): number | string => {
  const contagem: { [key: number]: number } = {};
  dados.forEach(numero => {
    contagem[numero] = (contagem[numero] || 0) + 1;
  });

  let moda: number | string = 'Não há moda';
  let maxContagem = 1;

  for (const numero in contagem) {
    if (contagem[numero] > maxContagem) {
      maxContagem = contagem[numero];
      moda = Number(numero);
    }
  }
  return moda;
};

export const calcularDesvioPadrao = (dados: number[]): number => {
  const n = dados.length;
  const media = calcularMedia(dados);
  const somaDiferencasQuadrado = dados.reduce((acc, valor) => acc + Math.pow(valor - media, 2), 0);
  const variancia = somaDiferencasQuadrado / n;
  return Math.sqrt(variancia);
};