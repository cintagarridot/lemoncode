console.log("************** DELIVERABLE 05 *********************");

class SlothMachine {

    coins;

    constructor() {
        this.coins = 0;
    }
    
    play() {
        this.coins += 1;
        const roulette1 = Math.random() < 0.5;
        const roulette2 = Math.random() < 0.5;
        const roulette3 = Math.random() < 0.5;
        if (roulette1 && roulette2 && roulette3) {
            const result = `Congratulations!!!. You won ${this.coins} coins!!`;
            this.coins = 0;
            return result;
        }

        return "Good luck next time!!";
    }
}
  
  const machine1 = new SlothMachine();
  console.log('machine1.play()', machine1.play());
  console.log('machine1.play()', machine1.play());
  console.log('machine1.play()', machine1.play());
  console.log('machine1.play()', machine1.play());
  console.log('machine1.play()', machine1.play());
  console.log('machine1.play()', machine1.play());
  console.log('machine1.play()', machine1.play());
  console.log('machine1.play()', machine1.play());
  console.log('machine1.play()', machine1.play());
  console.log('machine1.play()', machine1.play());
  console.log('machine1.play()', machine1.play());
  console.log('machine1.play()', machine1.play());
  console.log('machine1.play()', machine1.play());
  console.log('machine1.play()', machine1.play());


