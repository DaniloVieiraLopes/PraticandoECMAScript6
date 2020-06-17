class CustomError extends Error {
  constructor({ message, data }) {
    super(message);
    this.data = data;
  }
}

try {
  const name = "Danilo Vieira";
  const myError = new CustomError({
    message: "Custom message",
    data: {
      type: "Server error",
    },
  });
  throw myError;
} catch (error) {
  console.log(error.message);
  console.log(error.data.type);
} finally {
  console.log("keep going...");
}
