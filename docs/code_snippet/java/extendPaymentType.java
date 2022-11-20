public class CustomPaymentType extends PaymentType {
    
    // you can define your own variables
    private Object yourVariable;

    public CustomPaymentType(float amount) {
        super(amount);
        // don't forget to set the transaction reference (tx-ref)
        setTx_ref(ChapaUtil.generateTransactionRef(30, "Tx-"));
        setCurrency(Currency.USD);
    }

    // you can define your own methods
    public <T> void yourMethod(T data) {
        
    }

    /**
     * this method is executed automatically when payment is successful
     */
    @Override
    public void onPaymentSuccess() {

    }

    /**
     * this method is executed automatically when payment is failed
     *
     * @param error chapaError
     */
    @Override
    public void onPaymentFail(ChapaError error) {

    }

    /**
     * this method is executed automatically when payment is canceled
     */
    @Override
    public void onPaymentCancel() {

    }
}
