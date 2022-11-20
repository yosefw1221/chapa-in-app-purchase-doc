ChapaUtil.verifyTransaction("tx_ref", object : ChapaVerifyTransactionCallback {
/**
 * verify transaction
 *
 * @param verified    true if transaction is verified otherwise false
 * @param transaction if verified [Transaction] otherwise null
 */
 override fun onResult(verified: Boolean, transaction: Transaction?) {
    if (verified) {
        // payment is verified
    } else {
        // payment is not verified
    }
 }

 override fun onError(error: ChapaError?) {
    // Error occurred in verifying transaction
    // TODO your code here
 }
})