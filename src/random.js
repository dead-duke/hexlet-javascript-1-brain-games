const getRandomNumber = (min, max) => {
  const numb = min + Math.random() * (max + 1 - min);
  return Math.floor(numb);
};

export default getRandomNumber;
