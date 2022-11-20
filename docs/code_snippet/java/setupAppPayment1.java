// create your own app plan
AppPayment premiumPlan = new AppPayment(/* activity context */ this,/* amount */ 19.99, "Premium", MainActivity.class);

try {
    Chapa chapa = Chapa.getInstance();
    // simply call pay method without callback
     chapa.pay(this, premiumPlan);
    // or with callback
    // chapa.pay(this, premiumPlan, new ChapaPaymentCallback<AppPayment>() {
    //     @Override
    //     public void onSuccess(@NonNull String tx_ref, @NonNull AppPayment paymentType) {
    //         // TODO your code here
    //     }
    
    //     @Override
    //     public void onError(@NonNull ChapaError chapaError) {
    //         // TODO your code here
    //     }

    //     @Override
    //     public void onCancel() {
    //         // TODO your code here
    //     }
    // });
    
} catch (ChapaError e) {
    // CHAPA_NOT_INITIALIZED error
}