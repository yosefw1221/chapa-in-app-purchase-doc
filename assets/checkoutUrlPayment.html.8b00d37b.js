import{_ as l,r as c,o as u,c as i,a as e,w as a,d as n,e as s}from"./app.65277899.js";const p={},r=n("h1",{id:"payment-using-checkout-url",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#payment-using-checkout-url","aria-hidden":"true"},"#"),s(" Payment using Checkout Url")],-1),d=n("p",null,[s("When you have a backend server to generate checkout url you can use "),n("code",null,"ChapaCheckoutPage.processPayment()"),s(" method to process payment using checkout url.")],-1),k=n("blockquote",null,[n("p",null,[s("you don't need to initialize "),n("code",null,"ChapaConfiguration"),s(" to use this feature")])],-1),m=n("div",{class:"language-java line-numbers-mode","data-ext":"java"},[n("pre",{class:"language-java"},[n("code",null,[n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"ChapaCheckoutPage"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"processPayment"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"chapa-checkout-url"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"ChapaCheckoutUrlCallback"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`

    `),n("span",{class:"token doc-comment comment"},`/**
     * Called when payment is successful
     */`),s(`
    `),n("span",{class:"token annotation punctuation"},"@Override"),s(`
    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"void"),s(),n("span",{class:"token function"},"onSuccess"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token comment"},"// TODO your code here"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token doc-comment comment"},`/**
     * Called when error occurred in payment
     */`),s(`
    `),n("span",{class:"token annotation punctuation"},"@Override"),s(`
    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"void"),s(),n("span",{class:"token function"},"onError"),n("span",{class:"token punctuation"},"("),n("span",{class:"token annotation punctuation"},"@NonNull"),s(),n("span",{class:"token class-name"},"ChapaError"),s(" chapaError"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token comment"},"// TODO your code here"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token doc-comment comment"},`/**
     * Called when payment is canceled
     */`),s(`
    `),n("span",{class:"token annotation punctuation"},"@Override"),s(`
    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"void"),s(),n("span",{class:"token function"},"onCancel"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token comment"},"// TODO your code here"),s(`

    `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),v=n("div",{class:"language-kotlin line-numbers-mode","data-ext":"kt"},[n("pre",{class:"language-kotlin"},[n("code",null,[n("span",{class:"token function"},"ChapaCheckoutPage"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"processPayment"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string-literal singleline"},[n("span",{class:"token string"},'"chapa-checkout-url"')]),n("span",{class:"token punctuation"},","),n("span",{class:"token keyword"},"object"),s(),n("span",{class:"token operator"},":"),s(" ChapaCheckoutUrlCallback "),n("span",{class:"token punctuation"},"{"),s(`

 `),n("span",{class:"token comment"},`/**
  * Called when payment is successful
  */`),s(`
 `),n("span",{class:"token keyword"},"override"),s(),n("span",{class:"token keyword"},"fun"),s(),n("span",{class:"token function"},"onSuccess"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
     `),n("span",{class:"token comment"},"// TODO your code here"),s(`
 `),n("span",{class:"token punctuation"},"}"),s(`

 `),n("span",{class:"token comment"},`/**
  * Called when error occurred in payment
  */`),s(`
 `),n("span",{class:"token keyword"},"override"),s(),n("span",{class:"token keyword"},"fun"),s(),n("span",{class:"token function"},"onError"),n("span",{class:"token punctuation"},"("),s("chapaError"),n("span",{class:"token operator"},":"),s(" ChapaError"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
     `),n("span",{class:"token comment"},"// TODO your code here"),s(`
 `),n("span",{class:"token punctuation"},"}"),s(`

 `),n("span",{class:"token comment"},`/**
  * Called when payment is canceled
  */`),s(`
 `),n("span",{class:"token keyword"},"override"),s(),n("span",{class:"token keyword"},"fun"),s(),n("span",{class:"token function"},"onCancel"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
     `),n("span",{class:"token comment"},"// TODO your code here"),s(`
 `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1);function b(h,y){const t=c("CodeGroupItem"),o=c("CodeGroup");return u(),i("div",null,[r,d,k,e(o,null,{default:a(()=>[e(t,{title:"Java"},{default:a(()=>[m]),_:1}),e(t,{title:"Kotlin"},{default:a(()=>[v]),_:1})]),_:1})])}const _=l(p,[["render",b],["__file","checkoutUrlPayment.html.vue"]]);export{_ as default};
