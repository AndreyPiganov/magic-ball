import readlineSync from 'readline-sync';

const UserQuestion = () => {
  return readlineSync.question('Ask me any question and the magic ball will try to find the answer: ');
}

const Magic = () => {
  const answers = ['Yes', 'No', 'Maybe', 'Categorically no', 'Categorically yes', 'Probably', 'Definitely no', 'Definitely yes', 'Definitely no', 'Definitely yes', 'I will not answer that', 'Stars say no', 'Focus and ask again', 'No answer to the question', 'Rather no than yes'];
  const getRandomElement = (min, max, arr) => arr[Math.floor(Math.random() * (max - min + 1)) + min];
  return getRandomElement(0, answers.length - 1, answers);
};

export  {Magic, UserQuestion};
