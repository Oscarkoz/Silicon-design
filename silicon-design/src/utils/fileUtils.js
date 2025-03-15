// Här försökte jag skapa en javascript fil som skulle hantera sparandet av användaredata och lösenord i localStorage. 
// Så att användaren skulle kunna logga in och sidan skulle komma ihåg användaren även efter att sidan laddats om eller startas om.
// Låt oss säga att det gick sådär. Jag lyckades inte få det att fungera som jag ville. 
// Så nu har jag en javascripts fil som kanske inte ens gör något, jag vet inte.
export const saveUserData = (email, password) => {
  const userData = { email, password };
  localStorage.setItem("userData", JSON.stringify(userData));
};

// Detta skulle vara en funktion som skulle ladda användardata från localStorage.
// När man startar sidan så skulle sidan komma ihåg användaren och lösenordet. 
export const loadUserData = () => {
  const data = localStorage.getItem("userData");
  return data ? JSON.parse(data) : null;
};

// Här försökte jag skapa en funktion som skulle ta bort användardata från localStorage. 
// Om användaren loggar ut så skulle användardata tas bort från localStorage. 
// Men jag vet inte om det fungerar. Jag ville att sidan skulle komma ihåg användaren.
// Även efter att sidan laddats om eller startats om men även ta bort användardata om användaren loggar ut.
export const deleteUserData = () => {
  localStorage.removeItem("userData");
};
