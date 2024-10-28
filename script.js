
document.getElementById('upload-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const fileInput = document.getElementById('soil-report');
    const recommendationDiv = document.getElementById('recommendation');

    if (fileInput.files.length === 0) {
        recommendationDiv.innerHTML = `<p>Please upload a soil health report.</p>`;
        return;
    }

    // Simulating analysis and response
    const recommendation = {
        fertilizer_type: "NPK",
        quantity: "50 kg per hectare",
        additional_notes: "Ensure even distribution for best results."
    };

    recommendationDiv.innerHTML = `
        <h2>Fertilizer Recommendation</h2>
        <p><strong>Type:</strong> ${recommendation.fertilizer_type}</p>
        <p><strong>Quantity:</strong> ${recommendation.quantity}</p>
        <p><strong>Notes:</strong> ${recommendation.additional_notes}</p>
    `;
});

