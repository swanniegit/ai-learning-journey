/**
 * Defines the available lessons for the AI learning journey. Each lesson has
 * an id, title, description and an optional quiz. The quiz contains a
 * question, array of options and the index of the correct answer.
 *
 * If you want to add more lessons, simply append to this array and create
 * corresponding markdown or content in the `[id].js` dynamic route.
 */
const lessons = [
  {
    id: 1,
    title: 'Just Chatting',
    description: 'Explore conversational AI concepts like chatbots, prompt engineering and language models.',
    quiz: {
      question: 'What is a key technique used to get useful responses from large language models?',
      options: ['Image classification', 'Prompt engineering', 'Backpropagation', 'Gradient descent'],
      answer: 1
    }
  },
  {
    id: 2,
    title: 'Vibe Coding',
    description: 'Learn programming fundamentals and build small AI projects using Python and JavaScript.',
    quiz: {
      question: 'Which Python library is commonly used for building neural networks?',
      options: ['NumPy', 'TensorFlow', 'Flask', 'BeautifulSoup'],
      answer: 1
    }
  },
  {
    id: 3,
    title: 'Build AI Agents',
    description: 'Construct autonomous agents by combining language models with planning and tool use.',
    quiz: {
      question: 'Which storage mechanism can persist user progress locally in the browser?',
      options: ['localStorage/IndexedDB', 'HTTP cookies only', 'RAM memory', 'CDN cache'],
      answer: 0
    }
  }
];

export default lessons;