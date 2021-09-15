const input = document.querySelector("#cnp");
const interpretButton = document.querySelector("#interpret-cnp");
const resultList = document.querySelector(".result-list");

function extractGender(cnp) {
  let genderCode = cnp.substring(0, 1);
  genderCode = Number(genderCode);

  if (genderCode === 1) {
    return "masculin";
  } else {
    return "feminin";
  }
}

function extractBirthday(cnp) {
  let year = cnp.substring(1, 3);
  let month = cnp.substring(3, 5);
  let day = cnp.substring(5, 7);

  if (year < 22) {
    year = "20" + year;
  } else {
    year = "19" + year;
  }

  return `${day}/${month}/${year}`;
}

interpretButton.addEventListener("click", function () {
  const cnp = input.value;

  const gender = extractGender(cnp);
  const birthday = extractBirthday(cnp);

  resultList.innerHTML += `
    <li>Genul: ${gender}</li>
    <li>Data nasterii: ${birthday}</li>
  `;
});
