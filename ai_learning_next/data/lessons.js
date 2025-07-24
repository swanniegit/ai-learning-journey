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
    description:
      'Explore conversational AI concepts like chatbots, prompt engineering and language models.',
    questions: [
      {
        question:
          'What is a key technique used to get useful responses from large language models?',
        options: ['Image classification', 'Prompt engineering', 'Backpropagation', 'Gradient descent'],
        answer: 1
      },
      {
        question:
          'Which of the following is not a natural language processing task?',
        options: [
          'Summarization',
          'Image classification',
          'Translation',
          'Question answering'
        ],
        answer: 1
      }
    ]
  },
  {
    id: 2,
    title: 'Vibe Coding',
    description:
      'Learn programming fundamentals and build small AI projects using Python and JavaScript.',
    questions: [
      {
        question:
          'Which Python library is commonly used for building neural networks?',
        options: ['NumPy', 'TensorFlow', 'Flask', 'BeautifulSoup'],
        answer: 1
      },
      {
        question:
          'Which JavaScript runtime is commonly used for server‑side coding?',
        options: ['Node.js', 'React', 'Django', 'Flask'],
        answer: 0
      }
    ]
  },
  {
    id: 3,
    title: 'Build AI Agents',
    description:
      'Construct autonomous agents by combining language models with planning and tool use.',
    questions: [
      {
        question:
          'Which storage mechanism can persist user progress locally in the browser?',
        options: ['localStorage/IndexedDB', 'HTTP cookies only', 'RAM memory', 'CDN cache'],
        answer: 0
      },
      {
        question:
          'Which concept describes an AI agent’s ability to plan steps to achieve a goal?',
        options: ['Overfitting', 'Reinforcement learning', 'Search and planning', 'Data normalization'],
        answer: 2
      }
    ]
  },
  {
    id: 4,
    title: 'Data and Ethics',
    description:
      'Understand data collection, bias, fairness and ethical considerations in AI.',
    questions: [
      {
        question:
          'Which concept deals with ensuring AI systems treat all groups fairly?',
        options: ['Overfitting', 'Bias and fairness', 'Gradient clipping', 'Data augmentation'],
        answer: 1
      },
      {
        question:
          'What term describes built‑in prejudice in training data?',
        options: ['Bias', 'Variance', 'Noise', 'Overfitting'],
        answer: 0
      }
    ]
  },
  {
    id: 5,
    title: 'Capstone Project',
    description:
      'Apply everything you have learned to build and deploy a mini AI agent or model.',
    questions: [
      {
        question: 'Which of the following is an example of deploying an AI model?',
        options: [
          'Editing a spreadsheet',
          'Training a model offline',
          'Building a REST API that serves predictions',
          'Writing HTML only'
        ],
        answer: 2
      },
      {
        question:
          'Which of these is a good practice when releasing a machine learning model?',
        options: [
          'Ignore monitoring',
          'Provide clear documentation and evaluation metrics',
          'Hard‑code weights in the user interface',
          'Use no version control'
        ],
        answer: 1
      }
    ]
  },
  {
    id: 6,
    title: 'Computer Vision',
    description:
      'Explore image recognition, convolutional neural networks, and applications like object detection and segmentation.',
    questions: [
      {
        question: 'Which layer type is fundamental in CNNs?',
        options: ['Convolutional layer', 'Recurrent layer', 'Fully connected layer', 'Embedding layer'],
        answer: 0
      },
      {
        question: 'Which library is widely used for image processing in Python?',
        options: ['Pandas', 'Scikit‑image', 'BeautifulSoup', 'FastAPI'],
        answer: 1
      }
    ]
  },
  {
    id: 7,
    title: 'Reinforcement Learning',
    description:
      'Learn about agents, environments, rewards, policy and value‑based methods.',
    questions: [
      {
        question:
          'What component of reinforcement learning represents the feedback signal for an agent?',
        options: ['Reward', 'Loss', 'Gradient', 'Weight'],
        answer: 0
      },
      {
        question:
          'Which algorithm is used for training RL agents by approximating value functions?',
        options: ['Q‑learning', 'K‑means', 'PCA', 'AdaBoost'],
        answer: 0
      }
    ]
  }
];

export default lessons;