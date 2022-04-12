(function () {
  console.log("Init");

  // AddEventListener to Button - Click
  // When clicked, the button will call the function "generatePasswords"
  document
    .getElementById("generate")
    .addEventListener("click", generatePasswords);

  function generatePasswords() {
    console.log("generating...");
    const configs = getConfigs();
    console.log(configs);
    //get passwords
  }

  function getConfigs() {
    //get configs from select fields
    let configs = {};
    configs.length = document.getElementById("length").value;
    configs.symbols = document.getElementById("symbols").checked;
    configs.uppercase = document.getElementById("uppercase").checked;
    configs.lowercase = document.getElementById("lowercase").checked;
    return configs;
  }

  function insertPasswords() {
    //insert passwords into text fields
  }
})();
