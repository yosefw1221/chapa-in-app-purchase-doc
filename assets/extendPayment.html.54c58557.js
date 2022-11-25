import{_ as l,r as o,o as i,c as u,a as e,w as a,d as n,e as s,b as r}from"./app.65277899.js";const p={},d=n("h1",{id:"extending-paymenttype",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#extending-paymenttype","aria-hidden":"true"},"#"),s(" Extending PaymentType")],-1),m=n("p",null,[s("Sometimes you may need to extend your own payment type to fit your need. You can do that by extending "),n("code",null,"PaymentType"),s(" class.")],-1),k=n("div",{class:"language-java line-numbers-mode","data-ext":"java"},[n("pre",{class:"language-java"},[n("code",null,[n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"CustomPaymentType"),s(),n("span",{class:"token keyword"},"extends"),s(),n("span",{class:"token class-name"},"PaymentType"),s(),n("span",{class:"token punctuation"},"{"),s(`
    
    `),n("span",{class:"token comment"},"// you can define your own variables"),s(`
    `),n("span",{class:"token keyword"},"private"),s(),n("span",{class:"token class-name"},"Object"),s(" yourVariable"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token class-name"},"CustomPaymentType"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"float"),s(" amount"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"super"),n("span",{class:"token punctuation"},"("),s("amount"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token comment"},"// don't forget to set the transaction reference (tx-ref)"),s(`
        `),n("span",{class:"token function"},"setTx_ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},"ChapaUtil"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"generateTransactionRef"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"30"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"Tx-"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token function"},"setCurrency"),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},"Currency"),n("span",{class:"token punctuation"},"."),n("span",{class:"token constant"},"USD"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token comment"},"// you can define your own methods"),s(`
    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token generics"},[n("span",{class:"token punctuation"},"<"),n("span",{class:"token class-name"},"T"),n("span",{class:"token punctuation"},">")]),s(),n("span",{class:"token keyword"},"void"),s(),n("span",{class:"token function"},"yourMethod"),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},"T"),s(" data"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token doc-comment comment"},`/**
     * this method is executed automatically when payment is successful
     */`),s(`
    `),n("span",{class:"token annotation punctuation"},"@Override"),s(`
    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"void"),s(),n("span",{class:"token function"},"onPaymentSuccess"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`

    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token doc-comment comment"},[s(`/**
     * this method is executed automatically when payment is failed
     *
     * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token parameter"},"error"),s(` chapaError
     */`)]),s(`
    `),n("span",{class:"token annotation punctuation"},"@Override"),s(`
    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"void"),s(),n("span",{class:"token function"},"onPaymentFail"),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},"ChapaError"),s(" error"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`

    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token doc-comment comment"},`/**
     * this method is executed automatically when payment is canceled
     */`),s(`
    `),n("span",{class:"token annotation punctuation"},"@Override"),s(`
    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"void"),s(),n("span",{class:"token function"},"onPaymentCancel"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`

    `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),y=n("div",{class:"language-kotlin line-numbers-mode","data-ext":"kt"},[n("pre",{class:"language-kotlin"},[n("code",null,[n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token function"},"CustomPaymentType"),n("span",{class:"token punctuation"},"("),s("amount"),n("span",{class:"token operator"},":"),s(" Float"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},":"),s(),n("span",{class:"token function"},"PaymentType"),n("span",{class:"token punctuation"},"("),s("amount"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`

    `),n("span",{class:"token comment"},"// you can define your own variables"),s(`
    `),n("span",{class:"token keyword"},"private"),s(),n("span",{class:"token keyword"},"lateinit"),s(),n("span",{class:"token keyword"},"var"),s(" yourVariable "),n("span",{class:"token operator"},":"),s(` Any

    `),n("span",{class:"token keyword"},"init"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token comment"},"// don't forget to set the transaction reference (tx-ref)"),s(`
        tx_ref `),n("span",{class:"token operator"},"="),s(" ChapaUtil"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"generateTransactionRef"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"30"),n("span",{class:"token punctuation"},","),n("span",{class:"token string-literal singleline"},[n("span",{class:"token string"},'"Tx-"')]),n("span",{class:"token punctuation"},")"),s(`
        currency `),n("span",{class:"token operator"},"="),s(" Currency"),n("span",{class:"token punctuation"},"."),s(`USD
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token comment"},"// you can define your own methods"),s(`
    `),n("span",{class:"token keyword"},"fun"),s(),n("span",{class:"token function"},"youMethod"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"data"),n("span",{class:"token operator"},":"),s(" Any"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"{"),s(`
        yourVariable `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"data"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token comment"},`/**
     * this method is executed automatically when payment is successful
     */`),s(`
    `),n("span",{class:"token keyword"},"override"),s(),n("span",{class:"token keyword"},"fun"),s(),n("span",{class:"token function"},"onPaymentSuccess"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token comment"},"// TODO your code here "),s(`
        `),n("span",{class:"token comment"},"// save data to remote server or other task based on your need"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token comment"},`/**
     * this method is executed automatically when payment is failed
     */`),s(`
    `),n("span",{class:"token keyword"},"override"),s(),n("span",{class:"token keyword"},"fun"),s(),n("span",{class:"token function"},"onPaymentFail"),n("span",{class:"token punctuation"},"("),s("error"),n("span",{class:"token operator"},":"),s(" ChapaError"),n("span",{class:"token operator"},"?"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token comment"},"// TODO your code here"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token comment"},`/**
     * this method is executed automatically when payment is canceled
     */`),s(`
    `),n("span",{class:"token keyword"},"override"),s(),n("span",{class:"token keyword"},"fun"),s(),n("span",{class:"token function"},"onPaymentCancel"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token comment"},"// TODO your code here"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),b=r("<ul><li><strong><code>PaymentType</code> methods</strong></li></ul><table><thead><tr><th>Method</th><th>Description</th><th>Required</th><th>Default</th></tr></thead><tbody><tr><td>setAmount(amount: Float)</td><td>payment amount</td><td>Yes</td><td></td></tr><tr><td>setCurrency(currency: Currency)</td><td>payment currency Currency.ETB or Currency.USD</td><td>Yes</td><td>ETB</td></tr><tr><td>setTxRef(tx_ref: String)</td><td>payment unique transaction reference</td><td>Yes</td><td></td></tr><tr><td>setCustomer(customer: Customer)</td><td>customer&#39;s information.</td><td>NO (customer can fill their information)</td><td></td></tr><tr><td>setCustomizations(customizations: Customizations)</td><td>payment modal customizations</td><td>No</td><td>null</td></tr><tr><td>setCallbackUrl(callback_url: String)</td><td>Api that trigger when payment is successful</td><td>No</td><td>null</td></tr></tbody></table>",2);function v(h,f){const t=o("CodeGroupItem"),c=o("CodeGroup");return i(),u("div",null,[d,m,e(c,null,{default:a(()=>[e(t,{title:"JAVA"},{default:a(()=>[k]),_:1}),e(t,{title:"KOTLIN",active:""},{default:a(()=>[y]),_:1})]),_:1}),b])}const _=l(p,[["render",v],["__file","extendPayment.html.vue"]]);export{_ as default};
