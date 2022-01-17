class Question {
    constructor(question, wrongAnswers, rightAnswer) {
      this.question = question;
      this.wrongAnswers = wrongAnswers;
      this.rightAnswer = rightAnswer;
      this.points = 0;
    }

    static #getQuestion(questionsArr) {
      let numQuest = questionsArr.length;
      let number = Math.floor(Math.random() * numQuest);
      return number;
    }

    static getPoints(questionsArr, userAnswer, number) {
      if (questionsArr[number].rightAnswer === userAnswer) {
        window.alert("Respuesta correcta!");
        console.log(`Tus puntos son ${this.points}`);
      } else {
        window.alert("Respuesta incorrecta");
        console.log(`Tus puntos son ${this.points}`);
      }
    }

    static showQuestion(questionsArr) {
      let nquestion = [];
      let counter = 0;
      while (counter < questionsArr.length) {
        let number = this.#getQuestion(questionsArr);
        if (nquestion.includes(number)) {
          number = this.#getQuestion(questionsArr);
        } else {
          console.log(questionsArr[number].question);
          let answers = questionsArr[number].wrongAnswers;
          answers.push(questionsArr[number].rightAnswer);
          console.log(`Las opciones son ${answers}`);
          let userAnswer = window.prompt(
            questionsArr[number].question + " " + answers
          );
          console.log(userAnswer);

          this.getPoints(questionsArr, userAnswer, number);
          nquestion.push(number);
          counter++;
        }
      }
      // let number = this.#getQuestion(questionsArr) // Hacer un if para controlar que la pregunta no se repita
    }
  }

  const questions = [
    new Question(
      "Cuantas patas tiene el perro?",
      ["1", "2", "3", "5"],
      "4"
    ),
    new Question("Cuantas patas tiene el gato?", ["1", "2", "3", "5"], "4"),
    new Question(
      "Cuantas patas tiene el pajaro?",
      ["1", "4", "3", "5"],
      "2"
    ),
    new Question(
      "Cuan rapido corre el cheeta?",
      ["120", "115", "80", "95"],
      "110"
    ),
    new Question(
      "Que animal tiene trompa?",
      ["Perro", "Gato", "Ratón", "Pajaro"],
      "Elefante"
    )
  ];

  Question.showQuestion(questions);