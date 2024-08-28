document.getElementById('generate').addEventListener('click', generateString);

function generateString() {
    const length = parseInt(document.getElementById('length').value);
    const includeNumbers = document.getElementById('include-numbers').checked;
    const includeUpper = document.getElementById('include-upper').checked;
    const includeLower = document.getElementById('include-lower').checked;
    
    const numbers = '0123456789';
    const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowerCase = 'abcdefghijklmnopqrstuvwxyz';

    let characterPool = '';

    if (includeNumbers) {
        characterPool += numbers;
    }
    if (includeUpper) {
        characterPool += upperCase;
    }
    if (includeLower) {
        characterPool += lowerCase;
    }

    if (characterPool === '') {
        alert('Пожалуйста, выберите хотя бы одну категорию символов.');
        return;
    }

    let randomString = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characterPool.length);
        randomString += characterPool[randomIndex];
    }

    document.getElementById('output').value = randomString;
}
