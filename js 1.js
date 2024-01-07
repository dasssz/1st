document.addEventListener('DOMContentLoaded', function() {

function sendMoney() {
    var budget1 = parseInt(document.querySelector('#budget1').textContent);
    var budget2 = parseInt(document.querySelector('#budget2').textContent);

    if (budget1 >= 5) {
        budget1 -= 5;
        budget2 += 5;
    } else {
        alert("Insufficient budget on First Website.");
    }

    document.querySelector('#budget1').textContent = budget1;
    document.querySelector('#budget2').textContent = budget2;
}

function sendMoney() {
    
}
});

function sendMoney() {
    
    fetch('https://dasssz.github.io/2nd/html2.html', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ amount: 5 }) 
    })
    .then(response => {
        if (response.ok) {
            
            console.log('Transaction successful');
        } else {
            
            console.error('Transaction failed');
        }
    })
    .catch(error => {
        
        console.error('Error:', error);
    });
}
