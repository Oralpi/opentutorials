let members = ['egoing', 'k8805', 'hoya'];

console.log(members[1]); // k8805

let i = 0;

while(i < members.length) {
  console.log(members[i]);

  i = i + 1;
}

let roles = {
  'programmer': 'egoing',
  'designer': 'k8805',
  'manager': 'hoya'
}

console.log(roles.designer); // k8805
console.log(roles['designer']); // k8805

for(let name in roles) {
  console.log(name, roles[name]);
}