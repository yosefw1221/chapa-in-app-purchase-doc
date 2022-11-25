import{_ as i,r as o,o as l,c as r,a,w as e,b as u,d as n,e as s}from"./app.65277899.js";const p={},d=u('<h1 id="verify-transaction" tabindex="-1"><a class="header-anchor" href="#verify-transaction" aria-hidden="true">#</a> Verify Transaction</h1><p>You can verify transaction by passing or <code>tx-ref</code>, <code>PaymentType</code> object to <code>ChapaUtil.verifyTransaction()</code> method</p><blockquote><p>If you don&#39;t initialize <code>ChapaConfiguration</code>, use can verify transaction using your <code>tx-ref</code> and <code>chapa-public-key</code></p></blockquote>',3),k=n("div",{class:"language-java line-numbers-mode","data-ext":"java"},[n("pre",{class:"language-java"},[n("code",null,[n("span",{class:"token class-name"},"ChapaUtil"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"verifyTransaction"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"tx-ref"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"ChapaVerifyTransactionCallback"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token annotation punctuation"},"@Override"),s(`
    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"void"),s(),n("span",{class:"token function"},"onResult"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"boolean"),s(" verified"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token annotation punctuation"},"@Nullable"),s(),n("span",{class:"token class-name"},"Transaction"),s(" transaction"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("verified"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token comment"},"// payment is verified"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token comment"},"// payment is not verified"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token annotation punctuation"},"@Override"),s(`
    `),n("span",{class:"token keyword"},"public"),s(),n("span",{class:"token keyword"},"void"),s(),n("span",{class:"token function"},"onError"),n("span",{class:"token punctuation"},"("),n("span",{class:"token class-name"},"ChapaError"),s(" error"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token comment"},"// Error occurred in verifying transaction"),s(`
        `),n("span",{class:"token comment"},"// TODO your code here"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),m=n("div",{class:"language-kotlin line-numbers-mode","data-ext":"kt"},[n("pre",{class:"language-kotlin"},[n("code",null,[s("ChapaUtil"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"verifyTransaction"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string-literal singleline"},[n("span",{class:"token string"},'"tx_ref"')]),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token keyword"},"object"),s(),n("span",{class:"token operator"},":"),s(" ChapaVerifyTransactionCallback "),n("span",{class:"token punctuation"},"{"),s(`
`),n("span",{class:"token comment"},`/**
 * verify transaction
 *
 * @param verified    true if transaction is verified otherwise false
 * @param transaction if verified [Transaction] otherwise null
 */`),s(`
 `),n("span",{class:"token keyword"},"override"),s(),n("span",{class:"token keyword"},"fun"),s(),n("span",{class:"token function"},"onResult"),n("span",{class:"token punctuation"},"("),s("verified"),n("span",{class:"token operator"},":"),s(" Boolean"),n("span",{class:"token punctuation"},","),s(" transaction"),n("span",{class:"token operator"},":"),s(" Transaction"),n("span",{class:"token operator"},"?"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("verified"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token comment"},"// payment is verified"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token comment"},"// payment is not verified"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
 `),n("span",{class:"token punctuation"},"}"),s(`

 `),n("span",{class:"token keyword"},"override"),s(),n("span",{class:"token keyword"},"fun"),s(),n("span",{class:"token function"},"onError"),n("span",{class:"token punctuation"},"("),s("error"),n("span",{class:"token operator"},":"),s(" ChapaError"),n("span",{class:"token operator"},"?"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token comment"},"// Error occurred in verifying transaction"),s(`
    `),n("span",{class:"token comment"},"// TODO your code here"),s(`
 `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1);function v(f,b){const t=o("CodeGroupItem"),c=o("CodeGroup");return l(),r("div",null,[d,a(c,null,{default:e(()=>[a(t,{title:"JAVA"},{default:e(()=>[k]),_:1}),a(t,{title:"KOTLIN",active:""},{default:e(()=>[m]),_:1})]),_:1})])}const h=i(p,[["render",v],["__file","verifyTransaction.html.vue"]]);export{h as default};
