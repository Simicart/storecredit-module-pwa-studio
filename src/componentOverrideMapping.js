/**
 * Mappings for overwrites
 * example: [`@magento/venia-ui/lib/components/Main/main.js`]: './lib/components/Main/main.js'
 */
module.exports = componentOverride = {
    [`@magento/venia-ui/lib/RootComponents/Product/product.gql.js`]:'@simicart/addstorecredit/src/override/ProductFullDetail/product.gql.js',
    [`@magento/venia-ui/lib/components/ProductFullDetail/productFullDetail.gql.js`]:'@simicart/addstorecredit/src/override/ProductFullDetail/productFullDetail.gql.js',
    [`@magento/peregrine/lib/talons/ProductFullDetail/useProductFullDetail.js`]:'@simicart/addstorecredit/src/talons/ProductFullDetail/useProductFullDetail.js',
    [`@magento/venia-ui/lib/components/ProductFullDetail/productFullDetail.js`]:'@simicart/addstorecredit/src/override/ProductFullDetail/productFullDetail.js',
    [`@magento/venia-ui/lib/components/AccountMenu/accountMenuItems.js`]:'@simicart/addstorecredit/src/override/AccountMenu/accountMenuItems.js',
    [`@magento/venia-ui/lib/components/Header/header.js`]:'@simicart/addstorecredit/src/override/Header/header.js',
    [`@magento/venia-ui/lib/components/CheckoutPage/checkoutPage.js`]:'@simicart/addstorecredit/src/override/CheckoutPage/checkoutPage.js',
    [`@magento/venia-ui/lib/components/CheckoutPage/checkoutPage.gql.js`]:'@simicart/addstorecredit/src/override/CheckoutPage/checkoutPage.gql.js',
    [`@magento/venia-ui/lib/components/CartPage/PriceSummary/priceSummaryFragments.js`]:'@simicart/addstorecredit/src/override/CartPage/PriceSummary/priceSummaryFragments.js',
    [`@magento/venia-ui/lib/components/CartPage/PriceSummary/priceSummary.js`]:'@simicart/addstorecredit/src/override/CartPage/PriceSummary/priceSummary.js',
    [`@magento/peregrine/lib/talons/CartPage/PriceSummary/usePriceSummary.js`]:'@simicart/addstorecredit/src/talons/CartPage/PriceSummary/usePriceSummary.js',
    
};
