const quizData = {
  title: 'LEAPing into Mathematics: Number Systems',
  description:
    'Number systems is the mathematical notation of representing numbers that provides a unique representation of every number and represents the arithmetic and algebraic structure of the figures. This interactive, multiple-choice quiz is great to test your knowledge in a fun way.  Press START to LEAP into the fun!',
  img: 'leap-orange-navy-brand.png',
  questions: [
    {
      id: 1,
      text: 'Evaluate: the expression above:',
      img: 'question1.png',
      alternatives: [
        {
          id: 1,
          text: '60',
          isCorrect: false,
        },
        {
          id: 2,
          text: '-128',
          isCorrect: false,
        },
		{
          id: 3,
          text: '-60',
          isCorrect: true,
        },
		{
          id: 4,
          text: '64',
          isCorrect: false,
        },
      ],
    },
    {
      id: 2,
      text: 'Evaluate the expression above:',
      img: 'question2.png',
      alternatives: [
        {
          id: 1,
          text: '28',
          isCorrect: true,
        },
        {
          id: 2,
          text: '4',
          isCorrect: false,
        },        
		{
          id: 3,
          text: '-4',
          isCorrect: false,
        },
		        {
          id: 4,
          text: '-28',
          isCorrect: false,
        },
      ],
    },
    {
      id: 3,
      text: 'Evaluate the expression above:',
      img: 'question3.png',
      alternatives: [
        {
          id: 1,
          text: '7/6',
          isCorrect: false,
        },
        {
          id: 2,
          text: '13/6',
          isCorrect: false,
        },
        {
          id: 3,
          text: '3/4',
          isCorrect: false,
        },
        {
          id: 4,
          text: '-13/6',
          isCorrect: true,
        },
      ],
    },
    {
      id: 4,
      text: 'Solve for x',
      img: 'question4.png',
      alternatives: [
        {
          id: 1,
          text: 'x = 6',
          isCorrect: false,
        },
        {
          id: 2,
          text: 'x = -9',
          isCorrect: true,
        },
        {
          id: 3,
          text: 'x = 9',
          isCorrect: false,
        },
        {
          id: 4,
          text: 'x = 5',
          isCorrect: false,
        },      
      ],
    },
	{
      id: 5,
      text: 'Evaluate the expression above:',
      img: 'question5.png',
      alternatives: [
        {
          id: 1,
          text: '-8/3',
          isCorrect: false,
        },
        {
          id: 2,
          text: '3/8',
          isCorrect: true,
        },
        {
          id: 3,
          text: '-3/8',
          isCorrect: false,
        },
        {
          id: 4,
          text: '7/8',
          isCorrect: false,
        },
      ],
    },
	{
      id: 6,
      text: 'Evaluate the expression above:',
      img: 'question6.png',
      alternatives: [
        {
          id: 1,
          text: '0',
          isCorrect: false,
        },
        {
          id: 2,
          text: 'undefined',
          isCorrect: true,
        },
		{
          id: 3,
          text: '12',
          isCorrect: false,
        },
		{
          id: 4,
          text: '1',
          isCorrect: false,
        },
      ],
    },
	{
      id: 7,
      text: 'Which of the following is a correct interpretation of the expression -3 + (-8)?',
      img: 'numberLine.png',
      alternatives: [
        {
          id: 1,
          text: 'The number that is 3 to the left of the 8 on the number line',
          isCorrect: false,
        },
        {
          id: 2,
          text: 'The number that is 3 to the right of the 8 on the number line',
          isCorrect: false,
        },
		{
          id: 3,
          text: 'The number that is 8 to the left of the -3 on the number line',
          isCorrect: true,
        },
		{
          id: 4,
          text: 'The number that is 8 to the right of -3 on the number line',
          isCorrect: false,
        },
      ],
    },
	{
      id: 8,
      text: 'Select the best interpretation of the inequality above:',
      img: 'question8.png',
      alternatives: [
        {
          id: 1,
          text: 'The distance between -4.5 and x is greater than 3',
          isCorrect: true,
        },
        {
          id: 2,
          text: 'The distance between -4.5 and -x is greater than 3',
          isCorrect: false,
        },
		{
          id: 3,
          text: 'The distance between 3 and -4.5 is greater than x',
          isCorrect: false,
        },
		{
          id: 4,
          text: 'The distance between -4.5 and x is equal to 3',
          isCorrect: false,
        },
      ],
    },
	{
      id: 9,
      text: 'Solve for x:',
      img: 'question9.png',
      alternatives: [
        {
          id: 1,
          text: 'x = 6.8',
          isCorrect: false,
        },
        {
          id: 2,
          text: 'x = 5.4',
          isCorrect: false,
        },
		{
          id: 3,
          text: 'x = -11.2',
          isCorrect: true,
        },
		{
          id: 4,
          text: 'x = 11.2',
          isCorrect: false,
        },
      ],
    },
	{
      id: 10,
      text: 'Evaluate expression where a = -10, b = 6, and c = -4.',
      img: 'question10.png',
      alternatives: [
        {
          id: 1,
          text: '15',
          isCorrect: false,
        },
        {
          id: 2,
          text: '-15',
          isCorrect: true,
        },
		{
          id: 3,
          text: '4',
          isCorrect: false,
        },
		{
          id: 4,
          text: '-20',
          isCorrect: false,
        },
      ],
    },
  ],
  results: [
    {
      id: 1,
      range: {
        from: 0,
        to: 6,
      },
      title: 'You only got a few questions right.',
      description:
        'Please restart the Quiz to achieve 70% or higher.',
	  img: 'result-example.jpg',
    },
	{
      id: 2,
      range: {
        from: 7,
        to: 7,
      },
      title: 'Congratulations, you scored 70%!',
      description:
        'Please accelerate to the next quiz.',
	  img: 'result-example.jpg',
    },
	{
      id: 3,
      range: {
        from: 8,
        to: 8,
      },
      title: 'Congratulations, you scored 80%!',
      description:
        'Please accelerate to the next quiz.',
	  img: 'result-example.jpg',
    },
    {
      id: 4,
      range: {
        from: 9,
        to: 9,
      },
      title: 'Congratulations, you scored 90%!',
      description:
        'Please accelerate to the next quiz.',
	  img: 'result-example.jpg',
    },
    {
      id: 5,
      range: {
        from: 10,
        to: 10,
      },
      title: 'Congratulations, you got everything right!',
      description:
        'Please accelerate to the next quiz.',
      img: 'result-example.jpg',
    },
  ],
};

export default quizData;