class RockPaperScissors {
  constructor(username) {
    this.username = username;
    this.score = {
      user: 0,
      cpu:0 
    },
    this.gameHistoryLog = [];
  }

  /**
   * RETURN: one of the following values (`rock`, `paper`, `scissors`)
   * using Math.random() method, you should be able to get one of the following values
   */
  generateCPUResponse(){
    const acceptedValues = ['rock', 'paper', 'scissors'];

    // Generate a random index: 0, 1, or 2
    const randomIndex = Math.floor(Math.random() * acceptedValues.length);

    // Get the value at the random index
    const randomValue = acceptedValues[randomIndex];

    console.log(randomValue); // Outputs: 'rock', 'paper', or 'scissors'
  }
  /**
   * returns one of the following values: `win`, `lose`, `tie`
   * tie:
   *     the user selection the same as the CPU
   * win: 
   *    (user is `rock` and cpu is `scissors
   *     OR
   *    (user is `paper` and cpu is `rock`) 
   *     OR 
   *    (user is `scissors` and cpu is `paper`)
   * `lose`:
   *    the opposite case :)
   * @param {string} userSelection user selection. Can only be one of the following values [`rock`, `paper`, `scissors`]
   * @param {string} cpuSelection computer selection. Can only be one of the following values [`rock`, `paper`, `scissors`]
   */
  determineWinner(userSelection, cpuSelection){
    function getResult(userSelection, cpuSelection) {
      if (userSelection === cpuSelection) {
        return 'tie';
      }
    
      if (
        (userSelection === 'rock' && cpuSelection === 'scissors') ||
        (userSelection === 'paper' && cpuSelection === 'rock') ||
        (userSelection === 'scissors' && cpuSelection === 'paper')
      ) {
        return 'win';
      }
    
      return 'lose';
    }
  }

  /**
   * 
   * @param {string} userSelection user selection. Can only be one of the following values [`rock`, `paper`, `scissors`]
   */
  play(userSelection){
    function playRound(userSelection) {
      const cpuSelection = generateCPUResponse();
      const result = determineWinner(userSelection, cpuSelection);
    
      // Update the score tally
      if (!this.score) {
        this.score = { win: 0, lose: 0, tie: 0 };
      }
    
      this.score[result] += 1;
    
      return {
        userSelection,
        cpuSelection,
        result,
        score: this.score
      };
    }
  }

}