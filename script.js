// alert("Baaaaaaaaaaaaa! Youre on! 🎇");
// 7324ce539bbd43d0b697ab346261b4f0
const audioElement = document.getElementById("audio");
const button = document.getElementById("button");

function toggleButton() {
  button.disabled = !button.disabled;
}

function tellMe(joke) {
  VoiceRSS.speech({
    key: "7324ce539bbd43d0b697ab346261b4f0",
    src: joke,
    hl: "en-us",
    v: "John",
    r: 0,
    c: "mp3",
    f: "44khz_16bit_stereo",
    ssml: false,
  });
}

async function getJokes() {
  toggleButton();
  let joke = "";
  const jokeUrl =
    " https://v2.jokeapi.dev/joke/Programming,Pun?blacklistFlags=nsfw,religious,political,racist,sexist,explicit";

  try {
    const res = await fetch(jokeUrl);
    const data = await res.json();
    if (data.setup) {
      joke = `${data.setup} ... ${data.delivery}`;
    } else {
      joke = data.joke;
    }
    tellMe(joke);
  } catch (err) {
    console.log("whoops!", err.message);
  }
}
button.addEventListener("click", getJokes);
audioElement.addEventListener("ended", toggleButton);
