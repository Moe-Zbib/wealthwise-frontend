class Validate {
  static required(value) {
    if (value) {
      return true;
    }
    return false;
  }

  static usernameLength(value) {
    if (value.length < 4) {
      return true;
    }
    return false;
  }

  static emailRegex(value) {
    if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      return false;
    }
    return true;
  }

  static passwordLength(value) {
    if (value.length < 8) {
      return true;
    }
    return false;
  }
}

export default Validate;
