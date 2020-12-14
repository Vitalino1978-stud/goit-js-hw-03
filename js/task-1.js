const user = {

  name: 'Mango',
  age: 20,
  hobby: 'html',
  premium: true,
};
console.log(user);

  user.mood = `happy`

console.table(user);

const newUsersHobby = function (user, newHobby) {
  user.hobby = newHobby;
}
newUsersHobby(user, `skydiving`);

console.table(user);

const newUserPremium = function (user, newPremium) {
  user.premium = newPremium;
}
newUserPremium(user, false);

console.table(user);

const keys = Object.keys(user);

for (const key of keys) {

  console.log(`${key}: ${user[key]}`);

}