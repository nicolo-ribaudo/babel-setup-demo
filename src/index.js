try {
  throw new Error();
} catch {
  console.log("e is not used");
}