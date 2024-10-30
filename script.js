function handlePurchase(event) {
    event.preventDefault();
    alert("Thank you for your purchase! We'll send you a confirmation email shortly.");
    document.querySelector('.purchase-form').reset();
}
