(function () {
    var app = angular.module('store', []);

    app.controller('StoreController', function () {
        this.products = gems;
    });

    app.controller('ReviewController', function () {
        this.review = {};

        this.addReview = function (product) {
            product.reviews.push(this.review);
            this.review = {};
        };
    });

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

    var gems = [{
        name: 'Steelyx',
        description: 'This is the longest gem ever. No one ever talks about gems or Steelyx. Poor steelyx. :(',
        price: 54.99,
        canPurchase: false,
        soldOut: false,
        images: [
            {
                full: 'http://img.pokemondb.net/artwork/steelix.jpg',
                thumb: 'http://img.pokemondb.net/artwork/steelix.jpg'
            }
        ],
        reviews: [
            {
                stars: 5,
                body: "This is the best pokemon EVA!",
                author: "someguy@gmail.com"
            },
            {
                stars: 3,
                body: "This Pokemon wasn't very effective against fire",
                author: "youngster_joey@yahoo.com"
            }
        ]
    },
    {
        name: 'Ruby',
        description: 'Not only is this a great Pokemon game, this is also an AWESOME programming language. 10/10',
        price: 0.0,
        canPurchase: true,
        soldOut: true,
        images: [
            {
                full: 'http://nicholasjohnson.com/images/sections/ruby.png',
                thumb: 'http://nicholasjohnson.com/images/sections/ruby.png'
            }
        ],
        reviews: [
            {
                stars: 4,
                body: "This is THE programming language!",
                author: "someguy@gmail.com"
            },
            {
                stars: 1,
                body: "It's trying to be Python... No way!",
                author: "guido@gnu.org"
            }
        ]
    },
    {
        name: 'Sapphire',
        description: 'Remember Kyogre? That guy was a boss.',
        price: 26.99,
        canPurchase: true,
        soldOut: false,
        images: [
            {
                full: 'https://i.ytimg.com/vi/jL2vM32-b1A/hqdefault.jpg',
                thumb: 'https://i.ytimg.com/vi/jL2vM32-b1A/hqdefault.jpg'
            }
        ],
        reviews: [
            {
                stars: 5,
                body: "This is the best pokemon EVA!",
                author: "someguy@gmail.com"
            },
            {
                stars: 3,
                body: "Who is this guy? Why isn't this like LUGIA?!",
                author: "youngster_joey@yahoo.com"
            }
        ]
    }];
})();