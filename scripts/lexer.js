function Lexer(text) {
  this.text = text;
  this.pos = 0;
  this.current_char = this.text[this.pos];

  this.char_error = function (text) {
    throw new Error(text);
  }

  this.advance_pointer = function () {
    this.pos++;
    if (this.pos > this.text.length - 1) {
      this.current_char = null
    }
    else {
      this.current_char = this.text[this.pos];
    }
  }

  this.get_digit = function () {
    let number = '';
    while (this.current_char != null && !isNaN(this.current_char)) {
      number += this.current_char;
      this.advance_pointer();
    }
    return parseInt(number);
  }

  this.skip_whitespace = function () {
    while (this.current_char != null && this.current_char === ' ') {
      this.advance_pointer();
    }
  }

  this.get_next_token = function () {
    while (this.current_char != null) {
      if (this.current_char === ' ') {
        this.skip_whitespace();
        continue;
      }
      if (!isNaN(this.current_char)) {
        token = new Token(tokenTypes.INTEGER, this.get_digit());
        return token;
      }
      if (this.current_char === '+') {
        token = new Token(tokenTypes.PLUS, '+');
        this.advance_pointer();
        return token;
      }
      if (this.current_char === '-') {
        token = new Token(tokenTypes.MINUS, '-');
        this.advance_pointer();
        return token;
      }
      if (this.current_char === '*') {
        token = new Token(tokenTypes.MULT, '*');
        this.advance_pointer();
        return token;
      }
      if (this.current_char === '/') {
        token = new Token(tokenTypes.DIV, '/');
        this.advance_pointer();
        return token;
      }
      if (this.current_char === '(') {
        token = new Token(tokenTypes.LPARAN, '(');
        this.advance_pointer();
        return token;
      }
      if (this.current_char === ')') {
        token = new Token(tokenTypes.RPARAN, ')');
        this.advance_pointer();
        return token;
      }
      this.char_error("Invalid character found");
    }
    return new Token(tokenTypes.EOF, this.current_char);
  }
}