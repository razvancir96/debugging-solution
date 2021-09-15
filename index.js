const input = document.querySelector('#cnp');
const interpretButton = document.querySelector('#interpet-cnp');
const resultList = document.querySelector('#result-list');

function extractGender(cnp) {
    let genderCode = cnp.substring(1);

    if (genderCode === 1) {
        return 'masculin';
    } else {
        return 'feminin';
    }
}

function extractBirthday(cnp) {
    let day = cnp.substring(1, 3);
    let month = cnp.substring(3, 5);
    let year = cnp.substring(5, 7);

    if (year < 22) {
        year = '20' + year;
    } else {
        year = '19' + year;
    }

    return `${day}/${month}/${year}`;
}

interpretButton.addEventListener('click', function () => {
    const inputValue = input.value;

    const gender = extractGender(cnp);
    const birthday = extractBirthday(cnp);
    
    resultList.innerHTML += `
        <li>Genul: ${gender}</li>
        <li>Data nasterii: ${birthday}</li>
    `
})