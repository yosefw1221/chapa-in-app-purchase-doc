
# Security Best Practices

Due to the sensitive data we use on the client side, such as "private key" and "amount," we are open to attack via a reverse engineering. Therefore, we must secure our application.

## Secure App Payment Type

\# **Securing** [Only Premium Feature](appPayment.html#only-premium-feature)

- as much as possible, verify whether the user has made a app purchase in every activity. This is to prevent the user from using the app without paying.

> To check if user has made a app purchased, ```ChapaUtil.isCurrentPlanIn("your-app-plan-name","other-valid-plan","....")``` method. It returns ```true``` if user has made a app purchase on the listed app-plans and ```false``` if user hasn't made in listed app-plan a payment.

- Method 1

on Activity ```onCreate``` method, check if user has made a app purchase. If user hasn't made a app purchase, redirect user to ```PaymentActivity``` or ```Close the app```.

- Method 2

the above method is repetitive, so we can create a ```BaseActivity``` class and extend **ALL ACTIVITY that require purchase** from it. Then in ```BaseActivity``` class, check if user has made a app purchase. If user hasn't made a app purchase, redirect user to ```PaymentActivity``` or ```Close the app```.

<CodeGroup>
<CodeGroupItem title="JAVA">

@[code](../code_snippet/java/baseActivity.java)

</CodeGroupItem>
<CodeGroupItem title="KOTLIN" active>

@[code](../code_snippet/kotlin/baseActivity.kt)

</CodeGroupItem>
</CodeGroup>

## Encrypt Payment Data

- Encrypt ```Amount``` and ```chapa secret Key``` and ```item-key```.\
To encrypt data, use ```Cipher.encrypt``` method.

<CodeGroup>
<CodeGroupItem title="JAVA">

@[code](../code_snippet/java/encryptData.java)

</CodeGroupItem>
<CodeGroupItem title="KOTLIN" active>

@[code](../code_snippet/kotlin/encryptData.kt)

</CodeGroupItem>
</CodeGroup>

## Other Security Best Practice

- Always Use ```Proguard``` to obfuscate your code. This will make it harder for attackers to reverse engineer your code. [Learn more](https://developer.android.com/studio/build/shrink-code)

> Learn more about [App Security Best Practice](https://developer.android.com/topic/security/best-practices)