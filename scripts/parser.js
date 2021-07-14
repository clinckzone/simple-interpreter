function Parser(lexer) {
    this.lexer = lexer;
    this.current_token = this.lexer.get_next_token();

    this.token_error = function(text) {
        throw new Error(text);
    }

    this.eat = function(token_type) {
        if(this.current_token.type == token_type) {
            this.current_token = this.lexer.get_next_token();
        }
        else {
            this.token_error("Invalid token detected");        
        }
    }

    this.factor = function() {
        const token = new Token(this.current_token.type, this.current_token.value);
        if(token.type === tokenTypes.PLUS) {
            this.eat(tokenTypes.PLUS);
            node = new UnaryOperator(token, this.factor());
            return node;
        }
        if(token.type === tokenTypes.MINUS) {
            this.eat(tokenTypes.MINUS);
            node = new UnaryOperator(token, this.factor());
            return node;
        }
        if(token.type === tokenTypes.INTEGER) {
            this.eat(tokenTypes.INTEGER);
            node = new Number(token);
            return node;
        }
        if(token.type === tokenTypes.LPARAN) {
            this.eat(tokenTypes.LPARAN);
            node = this.expr();
            this.eat(tokenTypes.RPARAN);
            return node;
        }
    }

    this.term = function() {
        node = this.factor();
        while(this.current_token.type === tokenTypes.MULT || this.current_token.type === tokenTypes.DIV) {
            const token = new Token(this.current_token.type, this.current_token.value);
            if(token.type === tokenTypes.MULT) {
                this.eat(tokenTypes.MULT);
            }
            else if(token.type === tokenTypes.DIV) {
                this.eat(tokenTypes.DIV);
            }
            node = new BinaryOperator(node, token, this.factor());
        }
        return node;
    }

    this.expr = function() {
        node = this.term();
        while(this.current_token.type === tokenTypes.PLUS || this.current_token.type === tokenTypes.MINUS) {
            const token = new Token(this.current_token.type, this.current_token.value);
            if(token.type === tokenTypes.PLUS) {
                this.eat(tokenTypes.PLUS);
            }
            else if(token.type === tokenTypes.MINUS) {
                this.eat(tokenTypes.MINUS);
            }
            node = new BinaryOperator(node, token, this.term());
        }
        return node;
    }

    this.parse = function() {
        ast = this.expr();
        return ast;
    }
}