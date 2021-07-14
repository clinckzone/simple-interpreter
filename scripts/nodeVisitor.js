function NodeVisitor() {
    this.visit = function(node) {
        const visitor = `visit_${node.constructor.name}`;
        if(this[visitor]) {
            return this[visitor](node);
        }
        else {
            throw new Error(`No method found for type ${node.constructor.name}`);
        }
    }
}