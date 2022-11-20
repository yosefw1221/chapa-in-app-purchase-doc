val coin = ItemPayment(/* context */ this,/* amount */ 1.99,/* item key */ "Coin",/* item value */ 100,/* item property */ ItemProperty.ADD)
val disableADS = ItemPayment(this , 5.0, "ads", true) // default itemProperty is REPLACE

// get chapa instance
val chapa = Chapa.getInstance()
// simply call pay method without callback
chapa.pay(this,disableADS)
// or with callback
chapa.pay(this,coin,object : ChapaPaymentCallback<ItemPayment>{
    override fun onSuccess(tx_ref: String, paymentType: ItemPayment) {
        // TODO your code here
    }

    override fun onError(chapaError: ChapaError) {
        // TODO your code here
    }

    override fun onCancel() {
        // TODO your code here
    }
})