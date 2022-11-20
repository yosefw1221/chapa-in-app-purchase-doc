# App Payment

It is a payment type that allow you to charge your customers to use your app.

**Features:**

- ```Secure``` : Payment information is encrypted with ```AES-256``` algorithm using device unique id.
- ```Payment per Device``` : although its encrypted with device id one Payment is only valid for one device.
- ```Multiple App Plan``` : you can setup multiple plan for your app. e.g. ```Premium```, ```Standard```, etc.
  
- ```Restore Purchase``` : The user doesn't repay for the same app and the same plan in case the user reinstalls the app.

## Setup App Payment

### Only premium feature

It's for App's that requires user to purchase to use it's content/feature.
  
**Step 1:** Create ```PaymentActivity``` class and change to launcher activity in ```AndroidManifest.xml```
  
- ```MainActivity``` is the activity that will be launched after payment is successful.
  
@[code xml {2,9}](../code_snippet/other/manifest.xml)

**Step 2:** In ```PaymentActivity``` class

<CodeGroup>
<CodeGroupItem title="JAVA">

@[code](../code_snippet/java/setupAppPayment1.java)

</CodeGroupItem>
<CodeGroupItem title="KOTLIN" active>

@[code](../code_snippet/kotlin/setupAppPayment1.kt)

</CodeGroupItem>
</CodeGroup>

### Both premium and freemium feature

It's for App's that has both free and paid feature.

  **Step 1:** Simply create ```AppPayment``` object as below without ```appMainActivity``` parameter
  
<CodeGroup>
<CodeGroupItem title="JAVA">

@[code](../code_snippet/java/setupAppPayment2.java)

</CodeGroupItem>
<CodeGroupItem title="KOTLIN" active>

@[code](../code_snippet/kotlin/setupAppPayment2.kt)

</CodeGroupItem>
</CodeGroup>

## Retrieve Payment Plan

To retrieve payment plan you need to call ```getPaymentPlan``` method

<CodeGroup>
<CodeGroupItem title="JAVA">

@[code](../code_snippet/java/retrivePaymentPlan.java)


</CodeGroupItem>
<CodeGroupItem title="KOTLIN" active>

@[code](../code_snippet/kotlin/retrivePaymentPlan.kt)

</CodeGroupItem>
</CodeGroup>
