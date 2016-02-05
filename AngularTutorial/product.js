// Anything to do with products will go in here
// Whether it's about pokemon or facial care.
// If it's a product, it can go in here.
(function () {
    var app = angular.module('store-products', []);

    // <div product-title></div>
    app.directive('productTitle', function () {
        return {
            restrict: 'A',
            templateUrl: 'product-title.html'
        }
    });

    // <product-panels></product-panels>
    app.directive('productPanels', function () {
        return {
            restrict: 'E',
            templateUrl: 'product-panels.html',
            controller: function () {
                this.tab = 1;

                this.selectTab = function (setTab) {
                    this.tab = setTab;
                };

                this.isSelected = function (checkTab) {
                    return this.tab === checkTab;
                };
            },
            controllerAs: 'panel'
        }
    });
})();