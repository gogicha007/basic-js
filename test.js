function calculateHanoi(disksNumber, turnsSpeed) {
  const result = Math.pow(2, disksNumber) - 1;
  return { turns: result, seconds: Math.floor(result / (turnsSpeed / 3600)) };
}

console.log(calculateHanoi(5, 4074));
