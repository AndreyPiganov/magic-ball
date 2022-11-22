const Magic = () => {
  const answers = ['да', 'нет', 'возможно', 'категорически нет', 'категорически да', 'наверное', 'точно нет', 'точно да', 'определенно нет', 'определенно да', 'я не буду на это отвечать', 'звезды говорят нет', 'сфокусируйся и спроси снова', 'на вопрос нет ответа', 'скорее нет чем да'];
  const getRandomElement = (min, max, arr) => arr[Math.floor(Math.random() * (max - min + 1)) + min];
  return getRandomElement(0, answers.length - 1, answers);
};
export default Magic;
