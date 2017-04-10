app
    .controller('PortfolioCtrl', PortfolioCtrl);

function PortfolioCtrl($scope, $state) {
    console.log('Portfolio ctrl');

    $scope.user = {
        portfolio: [
            {
                title: 'Test project for learn JS',
                description: 'This is my test project for learn JS on GeekHub',
                url: 'https://vladimshc.github.io/',
                img: '/images/geekhub-logo-2_zoeein.png'

            },
            {
                title: 'RSS aggregator',
                description: 'News aggregator from rss channels',
                url: 'http://rss-aggregator.herokuapp.com/',
                img: '/images/rss-feed.png'

            },
            {
                title: 'To-Do list',
                description: 'App built on \'Express\' and use MongoDB',
                url: 'https://vladimshc-todo-list.herokuapp.com',
                img: '/images/nodejs-express-mongo.jpg'

            }
        ]
    };
}