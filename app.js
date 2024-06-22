let user = prompt(`username`)
if(user == `` || user == null){
  alert(`username is required`)
}
else{
let password = prompt(`password`)
if(password == `` || password == null){
  alert(`password is required`)
}
else if (user == `admin` && password == 1234 || user == `John` && password == `qwerty`){
  alert(`Hello, ${user}`)
}
else {
  alert(`Invalid username or password`)
}
}
