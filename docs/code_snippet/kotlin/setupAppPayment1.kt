// create your own app plan
val premiumPlan = AppPayment(/* activity context */ this,/* amount */ 19.99, "Premium", MainActivity::class.java)
val chapa = Chapa.getInstance()
// simply call pay method without callback
chapa.pay(this,premiumPlan)
// or with callback
//chapa.pay(this,premiumPlan,object : ChapaPaymentCallback<AppPayment>{
//    override fun onSuccess(tx_ref: String, paymentType: AppPayment) {
//        // TODO your code here
//    }

//    override fun onError(chapaError: ChapaError) {
//        // TODO your code here
//    }

//    override fun onCancel() {
//        // TODO your code here
//    }
//})