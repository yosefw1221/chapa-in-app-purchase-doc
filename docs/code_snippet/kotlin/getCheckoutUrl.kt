val paymentType = BasicPayment(10)
ChapaUtil.getCheckoutUrl(paymentType,object : ChapaGetCheckOutUrlCallBack {
/**
 *
 * @param checkoutUrl chapa checkoutUrl
 */
 override fun onSuccess(checkoutUrl: String?) {
    // the checkout url is returned here
 }
 /**
  * Called when error occurred in getting checkou url
  *
  * @param error [ChapaError]
  */
 override fun onFail(error: ChapaError?) {
       // TODO your code here
 }
})