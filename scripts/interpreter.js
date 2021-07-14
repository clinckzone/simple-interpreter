function Interpreter(parser) {
    NodeVisitor.call(this);
    this.parser = parser;
    
    this.interpret = function() {
        result = this.visit(parser.parse());
        return result;
    }

    this.visit_BinaryOperator = function(node) {
        if(node.op.type === tokenTypes.PLUS) {
            return this.visit(node.left) + this.visit(node.right);
        }
        if(node.op.type === tokenTypes.MINUS) {
            return this.visit(node.left) - this.visit(node.right);
        }
        if(node.op.type === tokenTypes.MULT) {
            return this.visit(node.left) * this.visit(node.right);
        }
        if(node.op.type === tokenTypes.DIV) {
            return this.visit(node.left) / this.visit(node.right);
        }
    }

    this.visit_Number = function(node) {
        return node.value;
    }

    this.visit_UnaryOperator = function(node) {
        if(node.op.type === tokenTypes.PLUS) {
            return this.visit(node.expr);
        }
        if(node.op.type === tokenTypes.MINUS) {
            return -1*this.visit(node.expr);
        }
    }
}