const age = parseInt(process.argv[2]);

try {
  if (age <= 0) {
    throw new Error("Age is not a negative number");
  }
  if (age > 0 && age < 18) {
    throw new Error("You are not validate to vote");
  }
  console.log("Your are validate for voting");
} catch (err) {
  console.log(err.message);
  console.log(err.stack);
  console.log(err.name);
} finally {
  console.log("error hok ar nai hok ami print hobo");
}
