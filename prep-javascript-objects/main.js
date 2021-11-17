var person = {
  firstName: 'Paul ',
  lastName: 'Glorioso',
  hobby: 'Video Games'
};
console.log(person);

var fullName = "The person's full name is:" + person.firstName + person.lastName;
console.log(fullName);

person.job = 'NEET';
console.log("The person's job is:", person.job);

person.previousJob = 'Security Guard';
console.log("The person's previous job was:", person.previousJob);

console.log(person);
