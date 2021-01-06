/**
 * Mappings for overwrites
 * example: [`@magento/venia-ui/lib/components/Main/main.js`]: './lib/components/Main/main.js'
 */
module.exports = componentOverride = {
    [`@magento/venia-ui/lib/RootComponents/Product/product.gql.js`]:'@simicart/storecredit/src/override/ProductFullDetail/product.gql.js',
    [`@magento/venia-ui/lib/components/ProductFullDetail/productFullDetail.gql.js`]:'@simicart/storecredit/src/override/ProductFullDetail/productFullDetail.gql.js',
    [`@magento/peregrine/lib/talons/ProductFullDetail/useProductFullDetail.js`]:'@simicart/storecredit/src/talons/ProductFullDetail/useProductFullDetail.js',
    [`@magento/venia-ui/lib/components/ProductFullDetail/productFullDetail.js`]:'@simicart/storecredit/src/override/ProductFullDetail/productFullDetail.js',
    [`@magento/venia-ui/lib/components/AccountMenu/accountMenuItems.js`]:'@simicart/storecredit/src/override/AccountMenu/accountMenuItems.js',
    [`@magento/venia-ui/lib/components/Header/header.js`]:'@simicart/storecredit/src/override/Header/header.js',
    [`@magento/venia-ui/lib/components/CheckoutPage/checkoutPage.js`]:'@simicart/storecredit/src/override/CheckoutPage/checkoutPage.js',
    [`@magento/venia-ui/lib/components/CartPage/PriceSummary/priceSummaryFragments.js`]:'@simicart/storecredit/src/override/CartPage/PriceSummary/priceSummaryFragments.js',
    [`@magento/venia-ui/lib/components/CartPage/PriceSummary/priceSummary.js`]:'@simicart/storecredit/src/override/CartPage/PriceSummary/priceSummary.js',
    [`@magento/peregrine/lib/talons/CartPage/PriceSummary/usePriceSummary.js`]:'@simicart/storecredit/src/talons/CartPage/PriceSummary/usePriceSummary.js',
    [`@magento/venia-ui/lib/components/CheckoutPage/PaymentInformation/paymentInformation.js`]:'@simicart/storecredit/src/override/CheckoutPage/PaymentInformation/paymentInformation.js',
    [`@magento/venia-ui/lib/components/CheckoutPage/PaymentInformation/index.js`]:'@simicart/storecredit/src/override/CheckoutPage/PaymentInformation/index.js',
    [`@magento/venia-ui/lib/components/CheckoutPage/PaymentInformation/creditCard.js`]:'@simicart/storecredit/src/override/CheckoutPage/PaymentInformation/creditCard.js',
    [`@magento/peregrine/lib/talons/CheckoutPage/PaymentInformation/useCreditCard.js`]:'@simicart/storecredit/src/talons/CheckoutPage/PaymentInformation/useCreditCard.js',
    [`@magento/peregrine/lib/talons/CheckoutPage/OrderConfirmationPage/useOrderConfirmationPage`]:'@simicart/storecredit/src/talons/CheckoutPage/OrderConfirmationPage/useOrderConfirmationPage.js',
};
