const user = {
  name: "Jsingh",
  isActive: false,
};

function createUser({ name: string, isPaid: boolean }) {}

let newUser = { name: "Jsingh", isPaid: false, email: "123@123.com" };

createUser(newUser);

function createCourse(): { name: string; price: number } {
  return { name: "nextjs", price: 1234 };
}
