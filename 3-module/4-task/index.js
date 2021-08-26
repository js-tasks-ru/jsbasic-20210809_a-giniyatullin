function showSalary(users, age) {
  let allowedUsers = users.filter(item => item.age <= age);
  return allowedUsers.map(item => item.name + ", " + item.balance).join("\n");
}
