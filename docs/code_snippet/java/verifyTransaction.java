ChapaUtil.verifyTransaction("tx-ref", new ChapaVerifyTransactionCallback() {
    @Override
    public void onResult(boolean verified, @Nullable Transaction transaction) {
        if (verified) {
            // payment is verified
        } else {
            // payment is not verified
        }
    }

    @Override
    public void onError(ChapaError error) {
        // Error occurred in verifying transaction
        // TODO your code here
    }
});