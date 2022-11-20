class CustomPaymentType(amount: Float) : PaymentType(amount) {

    // you can define your own variables
    private lateinit var yourVariable : Any

    init {
        // don't forget to set the transaction reference (tx-ref)
        tx_ref = ChapaUtil.generateTransactionRef(30,"Tx-")
        currency = Currency.USD
    }

    // you can define your own methods
    fun youMethod(data: Any){
        yourVariable = data
    }
    /**
     * this method is executed automatically when payment is successful
     */
    override fun onPaymentSuccess() {
        // TODO your code here 
        // save data to remote server or other task based on your need
    }

    /**
     * this method is executed automatically when payment is failed
     */
    override fun onPaymentFail(error: ChapaError?) {
        // TODO your code here
    }

    /**
     * this method is executed automatically when payment is canceled
     */
    override fun onPaymentCancel() {
        // TODO your code here
    }

}