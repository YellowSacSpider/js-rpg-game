// Algorytmy matematyczne
export {getRandomNumber}

function getRandomNumber(min, max) {
  min = Math.ceil(min); // Zwraca namniejszą liczbę całkowitą większą lub równą danej np. jak 4 to zwróci 4, jak 0.95 to zwróci 1, jak 7.004 to zwróci 8.
  max = Math.floor(max); // Zwraca największą liczbę całkowitą mniejszą od lub równą danej. Np. 45.95 zwróci 45, jak -45.95 zwróci 46.
  return Math.floor(Math.random() * (max - min + 1)) + min; //losuje liczbe z przedziału max i min włączając te obie wartości.
}