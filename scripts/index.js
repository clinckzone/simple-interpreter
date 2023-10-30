function calculate() {
  const text = document.getElementById("inputText").value;
  const lexer = new Lexer(text);
  const parser = new Parser(lexer);
  const interpreter = new Interpreter(parser);
  const result = interpreter.interpret();

  element = document.getElementById("result");
  element.innerHTML = result;
}