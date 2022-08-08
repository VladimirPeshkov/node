import minimist from "minimist";
import colors from "colors";

const getPrimeNumbers = () => {
  const argv = process.argv.slice(2);
  const primeNumbers = [];

  if (argv.length === 0) console.log("Выберите диапозон".red);
  else {
    for (let i = Number(argv[0]); i < Number(argv[1]); i++) {
      let flag = true;
      for (let j = 2; j < i; j++) {
        if (i % j == 0) {
          flag = false;
        }
      }
      if (flag) primeNumbers.push(i);
    }
  }
  primeNumbers.forEach((num, i) => {
    // console.log(num,i);
    if (i % 2 === 0) console.log(colors.green(num), i);
    else if (i % 3 === 0) console.log(colors.red(num), i);
    else console.log(num, i);
  });
};

getPrimeNumbers();
