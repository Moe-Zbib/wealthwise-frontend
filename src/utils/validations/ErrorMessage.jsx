class ErrorMessage {
  static required() {
    return "This Field is required";
  }

  static emailFormat() {
    return "Please enter a valid email format";
  }

  static usernameLength() {
    return "Username must at least be 4 characters";
  }

  static usernameExists() {
    return "Username already exists";
  }

  static emailRegex() {
    return "Please enter a valid email";
  }

  static passwordFormat() {
    return "Password format is incorrect";
  }
}

export default ErrorMessage;
