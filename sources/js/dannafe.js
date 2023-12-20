// Updated list of words (feel free to add more)
const words = [
    "Chocolate", "Adventure", "Umbrella", "Serendipity", "Symphony", 
    "Galaxy", "Code", "Elephant", "Sunshine", "Harmony", "Radiant"
  ];
  
  let currentWord, scrambledWord;
  
  function generateScrambledWord(word) {
      // Convert the word to lowercase before shuffling
      const lowercasedWord = word.toLowerCase();
      
      // Shuffle the characters of the word
      const shuffled = lowercasedWord.split('').sort(() => Math.random() - 0.5).join('');
      
      return shuffled;
  }
  
  function generateWord() {
      // Get a random word from the words array
      currentWord = words[Math.floor(Math.random() * words.length)];
  
      // Generate a scrambled version of the word
      scrambledWord = generateScrambledWord(currentWord);
  
      // Display the scrambled word
      document.getElementById('scrambled-word').innerText = scrambledWord;
  
      // Clear the user input and result
      document.getElementById('user-input').value = '';
      document.getElementById('result').innerText = '';
  }
  
  function checkGuess() {
      // Get the user's guess and convert it to lowercase
      const userGuess = document.getElementById('user-input').value.toLowerCase();
  
      // Check if the guess is correct (case-insensitive)
      if (userGuess === currentWord.toLowerCase()) {
          document.getElementById('result').innerText = 'Correct! Well done!';
      } else {
          document.getElementById('result').innerText = 'Incorrect. Try again!';
      }
  }
  
