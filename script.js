document.getElementById('userDataForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const formData = {
        name: document.getElementById('name').value,
        age: document.getElementById('age').value,
        monthlySalary: document.getElementById('monthlySalary').value,
        recharge: document.getElementById('recharge').value,
        aadhaarNumber: document.getElementById('aadhaarNumber').value
        // Add more fields as needed
    };

    fetch('http://localhost:3000/submit', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
        alert('Data submitted successfully!');
        console.log(data);
    })
    .catch(error => {
        alert('Error submitting data!');
        console.error('Error:', error);
    });
});
