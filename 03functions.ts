function addTwo(num: number): number {
  return num + 2;
  // return "Hello";
}
addTwo(2);

function getUpper(val: string) {
  return val.toUpperCase();
}
getUpper("JSingh");

function signUp(name: string, email: string, isPaid: boolean) {}

let loginUser = (name: string, email: string, isPaid: boolean = false) => {};
loginUser("j", "j@j.com");

function error(errmsg: string): never {
  throw new Error(errmsg);
}

export {};
