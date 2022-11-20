ChapaCheckoutPage(this).processPayment("chapa-checkout-url",object : ChapaCheckoutUrlCallback {

 /**
  * Called when payment is successful
  */
 override fun onSuccess() {
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