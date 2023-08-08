const prompt = require("prompt-sync")({ sigint: true });

const a = prompt();
if (a < 0) {
  console.log("Tidak bisa input bilangan negatif");
} else if (a % 2 != 0) {
  console.log("Tidak bisa input bilangan ganjil");
} else {
  console.log(a);
}
