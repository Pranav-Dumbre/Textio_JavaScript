// in js function cannot return multiple values

function getUser() {
  return "name@domain.com", 21, "active";
  // DON'T DO THIS
  // it only returns 'active'
}
console.log(getUser());//active
