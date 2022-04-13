(function () {
  console.log("Init");

  // AddEventListener to Button - Click
  // When clicked, the button will call the function "generatePasswords"
  document
    .getElementById("generate")
    .addEventListener("click", generatePasswords);

  function generatePasswords() {
    const configs = getConfigs();
    //use configs to generate passwords
    const length = configs.length;
    const use_symbols = configs.use_symbols;
    const use_uppercase = configs.use_uppercase;
    const use_lowercase = configs.use_lowercase;

    const lowercase = "abcdefghijklmnopqrstuvwxyz";
    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const symbols = "!@#$%^&*()_+{}[]|:;<>?/";
    const numbers = "0123456789";

    insertPasswords(password);
  }

  function getConfigs() {
    //get configs from select fields
    let configs = {};
    configs.length = document.getElementById("length").value;
    configs.symbols = document.getElementById("symbols").checked;
    configs.uppercase = document.getElementById("uppercase").checked;
    configs.lowercase = document.getElementById("lowercase").checked;
    configs.numbers = document.getElementById("numbers").checked;
    return configs;
  }

  function insertPasswords(password) {
    //insert passwords into text fields
    document.getElementById("password").value = password;
  }
})();
