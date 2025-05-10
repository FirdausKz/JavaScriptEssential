var globalVar = "saya ada di variabel global";
let globalLet = "saya juga di global tetapi di batasi dengan let";
const globalConst = "saya adalah konstanta global";

{
  var blockVar = "Saya adalah var yang dibatasi blok";
  let blockLet = "Saya adalah let yang dibatasi blok";
  const blockConst = "Saya adalah const yang dibatasi blok";

  console.log(blockVar);
  console.log(blockLet);
}

// Lingkup global
console.log(globalVar); // Output: "Saya adalah variabel global"
console.log(globalLet); // Output: "Saya juga global, tetapi terikat dengan let"
console.log(globalConst); // Output: "Saya adalah konstanta global"
