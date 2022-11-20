new ChapaCheckoutPage(this).processPayment("chapa-checkout-url", new ChapaCheckoutUrlCallback() {

    /**
     * Called when payment is successful
     */
    @Override
    public void onSuccess() {
        // TODO your code here
    }

    /**
     * Called when error occurred in payment
     */
    @Override
    public void onError(@NonNull ChapaError chapaError) {
        // TODO your code here
    }

    /**
     * Called when payment is canceled
     */
    @Override
    public void onCancel() {
        // TODO your code here

    }
});
