// get chapa instance
val chapa = Chapa.getInstance()
// setup basic payment type
val basic = BasicPayment( /*amount*/ 9.99)

chapa.pay(/* activityContext */ this, basic, object : ChapaPaymentCallback<BasicPayment> {

 /**
  * Called when payment is successful
  *
  * @param paymentType PaymentType object
  * @param tx_ref      Transaction reference of the payment
  */
 override fun onSuccess(tx_ref: String, paymentType: BasicPayment) {
  // TODO your code here
 }

 /**
  * Called when error occurred in payment
  */
 override fun onError(chapaError: ChapaError) {
  // TODO your code here
 }

 /**
  * Called when payment is canceled
  */
 override fun onCancel() {
  // TODO your code here
 }

})