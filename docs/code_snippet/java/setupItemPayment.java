try {
    ItemPayment coin = new ItemPayment(this, 1.99, "Coin", 100, ItemProperties.ADD);
    ItemPayment disableADS = new ItemPayment(this, 5.0, "disableAds", true); // default itemProperty is REPLACE
    Chapa chapa = Chapa.getInstance();
    // simply call pay method without callback
    chapa.pay(this, disableADS);
    // or with callback
    chapa.pay(this, coin, new ChapaPaymentCallback<ItemPayment>() {
        @Override
        public void onSuccess(@NonNull String tx_ref, @NonNull ItemPayment paymentType) {
            // TODO your code here
        }

        @Override
        public void onError(@NonNull ChapaError chapaError) {
            // TODO your code here
        }

        @Override
        public void onCancel() {
            // TODO your code here
        }
    });
} catch (ChapaError e) {
    // throws UNSUPPORTED_DATA_TYPE if the dataType of 'value' is not String,Boolean,Integer,Float or Double
}