import Stack from "./Stack (1).mjs";

let nav = new Stack(4);

nav.push("google");
nav.push("Chatgpt");
nav.push("claude");
nav.push("Edge");

nav.pop();
nav.pop();
nav.pop();

console.log("histórico: ", nav.history())




let limite = new Stack(2);

limite.push("olá")
limite.push("Hello")
limite.push("konnichiwa")


