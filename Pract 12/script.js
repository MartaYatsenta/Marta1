document.getElementById('submitBtn').addEventListener('click', function() {
    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var meal = document.querySelector('input[name="meal"]:checked');
    var dishes = document.querySelectorAll('input[name="dish"]:checked');
    var comment = document.getElementById('comment').value;
    var resultDiv = document.getElementById('result');

    if (username === '' || email === '' || meal === null || dishes.length === 0 || comment === '') {
        alert('Будь ласка, заповніть усі поля');
        return;
    }

    var mealValue = meal.value;
    var dishValues = [];
    dishes.forEach(function(checkbox) {
        dishValues.push(checkbox.value);
    });

    var resultText = `${username} (${email}) з'їв на ${mealValue} ${dishValues.join(', ')} та залишив такий коментар: "${comment}"`;
    resultDiv.textContent = resultText;
});
