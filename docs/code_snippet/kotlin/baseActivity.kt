class BaseActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        if (!ChapaUtil.isCurrentPlanIn("Premium")) {
            // to redirect user to payment activity
            val intent = Intent(this, PaymentActivity::class.java)
            intent.addFlags(Intent.FLAG_ACTIVITY_CLEAR_TASK or Intent.FLAG_ACTIVITY_NEW_TASK)
            startActivity(intent)
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