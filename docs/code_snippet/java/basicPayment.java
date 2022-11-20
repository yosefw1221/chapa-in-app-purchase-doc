try {
    // get chapa instance
   Chapa chapa = Chapa.getInstance();
   // setup basic payment type
   BasicPayment basicPayment = new BasicPayment(/*amount*/ 9.99);
   chapa.pay(/* activityContext */ this, basicPayment, new ChapaPaymentCallback<BasicPayment>() {

     /**
       * Called when payment is successful
       *
       * @param paymentType PaymentType object
       * @param tx_ref      Transaction reference of the payment
       */

       @Override
       public void onSuccess(@NonNull String tx_ref, @NonNull BasicPayment paymentType) {
          // TODO your code here          
       }

    /**
      * Called when error occurred in payment
      */
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
   // throws CHAPA_NOT_INITIALIZED if chapa is not initialized
}