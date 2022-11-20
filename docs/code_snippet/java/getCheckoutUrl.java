BasicPayment paymentType = new BasicPayment(10f);
ChapaUtil.getCheckoutUrl(paymentType, new ChapaGetCheckOutUrlCallBack() {
    /**
     *
     * @param checkoutUrl chapa checkoutUrl
     */
    @Override
    public void onSuccess(String checkoutUrl) {
        // the checkout url is returned here
    }

    /**
     * Called when error occurred in getting checkout url
     *
     * @param error [ChapaError]
     */
    @Override
    public void onFail(ChapaError error) {
        // TODO your code here
    }
});