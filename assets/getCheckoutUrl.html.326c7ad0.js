import{_ as l,r as c,o as u,c as r,a,w as e,d as n,e as s}from"./app.65277899.js";const i={},p=n("h1",{id:"get-checkout-url",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#get-checkout-url","aria-hidden":"true"},"#"),s(" Get Checkout Url")],-1),k=n("p",null,[s("You can get checkout url from "),n("code",null,"PaymentType"),s(" object")],-1),d=n("div",{class:"language-java line-numbers-mode","data-ext":"java"},[n("pre",{class:"language-java"},[n("code",null,[n("span",{class:"token class-name"},"BasicPayment"),s(" paymentType "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"BasicPayment"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"10f"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token class-name"},"ChapaUtil"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getCheckoutUrl"),n("span",{class:"token punctuation"},"("),s("paymentType"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"ChapaGetCheckOutUrlCallBack"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token doc-comment comment"},[s(`/**
     *
     * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token parameter"},"checkoutUrl"),s(` chapa checkoutUrl
     */`)]),s(`
    `),n("span",{class:"token annotation punctuation"},"@Override"),s(`
    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"void"),s(),n("span",{class:"token function"},"onSuccess"),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},"String"),s(" checkoutUrl"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token comment"},"// the checkout url is returned here"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token doc-comment comment"},[s(`/**
     * Called when error occurred in getting checkout url
     *
     * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token parameter"},"error"),s(` [ChapaError]
     */`)]),s(`
    `),n("span",{class:"token annotation punctuation"},"@Override"),s(`
    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"void"),s(),n("span",{class:"token function"},"onFail"),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},"ChapaError"),s(" error"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token comment"},"// TODO your code here"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),m=n("div",{class:"language-kotlin line-numbers-mode","data-ext":"kt"},[n("pre",{class:"language-kotlin"},[n("code",null,[n("span",{class:"token keyword"},"val"),s(" paymentType "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"BasicPayment"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"10"),n("span",{class:"token punctuation"},")"),s(`
ChapaUtil`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getCheckoutUrl"),n("span",{class:"token punctuation"},"("),s("paymentType"),n("span",{class:"token punctuation"},","),n("span",{class:"token keyword"},"object"),s(),n("span",{class:"token operator"},":"),s(" ChapaGetCheckOutUrlCallBack "),n("span",{class:"token punctuation"},"{"),s(`
`),n("span",{class:"token comment"},`/**
 *
 * @param checkoutUrl chapa checkoutUrl
 */`),s(`
 `),n("span",{class:"token keyword"},"override"),s(),n("span",{class:"token keyword"},"fun"),s(),n("span",{class:"token function"},"onSuccess"),n("span",{class:"token punctuation"},"("),s("checkoutUrl"),n("span",{class:"token operator"},":"),s(" String"),n("span",{class:"token operator"},"?"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token comment"},"// the checkout url is returned here"),s(`
 `),n("span",{class:"token punctuation"},"}"),s(`
 `),n("span",{class:"token comment"},`/**
  * Called when error occurred in getting checkou url
  *
  * @param error [ChapaError]
  */`),s(`
 `),n("span",{class:"token keyword"},"override"),s(),n("span",{class:"token keyword"},"fun"),s(),n("span",{class:"token function"},"onFail"),n("span",{class:"token punctuation"},"("),s("error"),n("span",{class:"token operator"},":"),s(" ChapaError"),n("span",{class:"token operator"},"?"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
       `),n("span",{class:"token comment"},"// TODO your code here"),s(`
 `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1);function v(h,b){const t=c("CodeGroupItem"),o=c("CodeGroup");return u(),r("div",null,[p,k,a(o,null,{default:e(()=>[a(t,{title:"JAVA"},{default:e(()=>[d]),_:1}),a(t,{title:"KOTLIN",active:""},{default:e(()=>[m]),_:1})]),_:1})])}const _=l(i,[["render",v],["__file","getCheckoutUrl.html.vue"]]);export{_ as default};
