class Automaton {
  constructor() {
    this.states = [];
  }
  readCommands(commands) {
    this.states.push("q1");
    commands.forEach((element) => {
      switch (this.states[this.states.length - 1]) {
        case "q1":
          if (element === "1") {
            this.states.push("q2");
          }
          break;
        case "q2":
          if (element === "0") {
            this.states.push("q3");
          }
          break;
        case "q3":
          if (element === "0" || element === "1") {
            this.states.push("q2");
          }
          break;
      }
    });
    // Return true if we end in our accept state, false otherwise.
    if (this.states[this.states.length - 1] === "q2") {
      return true;
    } else {
      return false;
    }
  }
}

var myAutomaton = new Automaton();

// Do anything necessaryto set up your automaton's states, q1, q2, and q3.

// console.log(myAutomaton.readCommands(["1"])); // true
console.log(myAutomaton.readCommands(["1", "0", "0", "1"])); // true
