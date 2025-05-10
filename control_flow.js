//basic if else
let userRole = "admin";
let accessLevel;
if (userRole == "admin") {
  accessLevel = "full access granted";
} else if (userRole == "manager") {
  accessLevel = "Limit access granted";
} else {
  accessLevel = "No access";
}
console.log("accessLevel = ", accessLevel);

//if bersarang
let isLoggedIn = true;
let userMessage;
if (isLoggedIn) {
  if (userRole == "admin") {
    userMessage = " Welcome, Admin";
  } else {
    userMessage = "welcome, Manager";
  }
} else {
  userMessage = "Please Login to access the system.";
}

console.log("userMessage = ", userMessage);

//switch
let userType = "manager";
let userCategory;
switch (userType) {
  case "admin":
    userCategory = "administrator";
    break;
  case "manager":
    userCategory = "Manager";
    break;
  case "subscriber":
    userCategory = "subscriber";
    break;
  default:
    userCategory = "unknown";
}
console.log("userCategory = ", userCategory);

let isAuthenticated = true;
let authenticationStatus = isAuthenticated ? "authenticated" : "Not aunthenticated";
console.log("authenticationStatus = ", authenticationStatus);