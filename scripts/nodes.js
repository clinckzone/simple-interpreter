function AST() {
  //Parent Object
}

function Number(token) {
  AST.call(this);
  this.token = token;
  this.value = token.value;
}

function BinaryOperator(left, op, right) {
  AST.call(this);
  this.left = left; //Left Node
  this.op = op; //Operator Token
  this.right = right; //Right Node
}

function UnaryOperator(op, expr) {
  AST.call(this);
  this.op = op //Operator Token
  this.expr = expr; //Connected node
}