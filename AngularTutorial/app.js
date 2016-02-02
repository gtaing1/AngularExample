(function () {
    var app = angular.module('store', []);

    app.controller('StoreController', function () {
        this.products = gems;
    });

    app.controller('PanelController', function () {

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
        ]
    },
    {
        name: 'Ruby',
        description: 'Not only is this a great Pokemon game, this is also an AWESOME programming language. 10/10',
        price: 0.0,
        canPurchase: true,
        soldOut: false,
        images: [
            {
                full: 'http://nicholasjohnson.com/images/sections/ruby.png',
                thumb: 'http://nicholasjohnson.com/images/sections/ruby.png'
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
        ]
    }];
})();