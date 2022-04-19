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
    const use_symbols = configs.symbols;
    const use_uppercase = configs.uppercase;
    const use_lowercase = configs.lowercase;
    const use_numbers = configs.numbers;

    const lowercase = "abcdefghijklmnopqrstuvwxyz";
    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const symbols = "!@#$%^&*()_+{}[]|:;<>?/";
    const numbers = "0123456789";

    let fullChars = "";
    let password = "";

    if (use_lowercase) {
      fullChars += lowercase;
    }
    if (use_uppercase) {
      fullChars += uppercase;
    }
    if (use_symbols) {
      fullChars += symbols;
    }
    if (use_numbers) {
      fullChars += numbers;
    }
    console.log(fullChars);

    for (let i = 0; i < length; i++) {
      password += fullChars.charAt(
        Math.floor(Math.random() * fullChars.length)
      );
    }
    console.log(password);

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
