function displayFacts(response) {
  new Typewriter("#facts-search", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}
function generateFacts(event) {
  event.preventDefault();

  let userCommand = document.querySelector("#user-command");
  let apiKey = "0b6410a3b1bfe35o6c4e94f90d43bt09";
  let context =
    "You are knowledgeable about facts of the world concerning any topic. please generate a fun, important, interesting and very short fact  about any subject and sign the fact with the origin in <strong>. make sure to follow the User guide below.";
  let prompt = `User guide: Did you know that ${userCommand.value}`;
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let factsElement = document.querySelector("#facts-search");
  factsElement.classList.remove("hidden");
  factsElement.innerHTML = `<div class="generating">⏳ Generating a fact about ${userCommand.value}...<div>`;

  axios.get(apiURL).then(displayFacts);
}
let factsGeneratorElement = document.querySelector("#facts-check");
factsGeneratorElement.addEventListener("submit", generateFacts);
