const userOrAdmin = () => {
  let typeOfUser = prompt(
    "Hello, are you admin or user? Type admin if you are or you will be a user by default."
  );
  typeOfUser === "admin"
    ? console.log("soy admin")
    : console.log("soy usuario");
};

userOrAdmin("user");
