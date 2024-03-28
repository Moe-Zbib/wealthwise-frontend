export const validateField = (name, value, rules, setErrors) => {
  let hasError = false;
  let errorMessage = "";

  if (rules.required && !value.trim()) {
    errorMessage = "This field is required";
    hasError = true;
  } else if (rules.email && value && !/\S+@\S+\.\S+/.test(value)) {
    errorMessage = "Invalid email format";
    hasError = true;
  } else if (rules.minLength && value && value.length < rules.minLength) {
    errorMessage = `Must be at least ${rules.minLength} characters`;
    hasError = true;
  }

  setErrors((prev) => ({
    ...prev,
    [name]: errorMessage,
  }));

  return !hasError;
};
