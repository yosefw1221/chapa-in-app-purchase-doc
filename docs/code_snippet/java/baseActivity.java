public class BasicActivity extends AppCompatActivity {
    @Override
    protected void onCreate(@Nullable Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        if(!ChapaUtil.isCurrentPlanIn("Premium")) {
            // to redirect user to payment activity
            Intent intent = new Intent(this, PaymentActivity.class);
            intent.addFlags(Intent.FLAG_ACTIVITY_CLEAR_TASK | Intent.FLAG_ACTIVITY_NEW_TASK);
            startActivity(intent);
            // to Exit the app
            // System.exit(0);
            // to close current activity
            // finish();
            // or you can do anything you want
        }
    }
}
// USAGE
// change every activity require app-purchase to extend BasicActivity