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

type User = {
  name: string;
  email: string;
  isActive: boolean;
};

function crtUser(user: User): User {
  return { name: "", email: "", isActive: true };
}

crtUser({ name: "", email: "", isActive: true });

type stUser = {
  readonly _id: string;
  name: string;
  email: string;
  isActive: boolean;
  credNumber?: number;
};

let myUser: stUser = {
  _id: "123",
  name: "js",
  email: "j@j",
  isActive: true,
};

// type t3 = t1 & t2 (t -> type we defined earlier)

export {};
