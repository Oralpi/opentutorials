let name = 'Kong';
let letter = 'Dear ' + name + '\n\nlorem ' + name + ' ipsum ' + name + '.';
letter = `Dear ${name}

lorem ${name} ipsum ${name}.`;

console.log(letter);