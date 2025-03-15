// Spara användardata i localStorage
export const saveUserData = (email, password) => {
  const userData = { email, password };
  localStorage.setItem("userData", JSON.stringify(userData));
};

// Ladda användardata från localStorage
export const loadUserData = () => {
  const data = localStorage.getItem("userData");
  return data ? JSON.parse(data) : null;
};

// Radera användardata vid utloggning
export const deleteUserData = () => {
  localStorage.removeItem("userData");
};
