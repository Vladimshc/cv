'use strict';

var app = angular.module('cv', ['ui.utils', 'ui.router']);
'use strict';

AboutCtrl.$inject = ["$scope", "$state"];
app.controller('AboutCtrl', AboutCtrl);

function AboutCtrl($scope, $state) {
    console.log('about ctrl');

    // $scope.user = {
    //     fullName: 'John Doe',
    //     skills: [
    //         'HTML', 'CSS', 'Javascript', 'SCSS', 'Angular'
    //     ]
    // };
}
'use strict';

ContactCtrl.$inject = ["$scope", "$http"];
app.controller('ContactCtrl', ContactCtrl);

function ContactCtrl($scope, $http) {
    $scope.guest.name = '';
    $scope.guest.email = '';
    $scope.guest.message = '';

    $scope.submit = function () {
        if ($scope.form.$valid && $scope.guest.name !== '' && $scope.guest.email !== '' && $scope.guest.message !== '') {
            $http.post('/sendmessage', $scope.guest).then(function (res) {
                if (res.status === 200) {
                    $scope.form.$setPristine();
                    $scope.guest = {};
                    $scope.successSend = true;
                    $scope.msg = 'Сообщение отправлено';
                    alert($scope.msg);
                    console.log($scope.msg);
                } else {
                    $scope.msg = 'Возникла ошибка';
                    alert($scope.msg);
                    console.log($scope.msg);
                    console.log(res);
                }
            });
        } else {
            alert('Заполните форму');
        }
    };
    console.log('Contact ctrl end');
}
'use strict';

ExperienceCtrl.$inject = ["$scope", "$state"];
app.controller('ExperienceCtrl', ExperienceCtrl);

function ExperienceCtrl($scope, $state) {
    console.log('Experiences ctrl');

    // $scope.user = {
    //     fullName: 'John Doe',
    //     skills: [
    //         'HTML', 'CSS', 'Javascript', 'SCSS', 'Angular'
    //     ]
    // };
}
'use strict';

app.constant('config', {
        apiServer: 'http://127.0.0.1/',
        someParam: 'value'
});
'use strict';

PortfolioCtrl.$inject = ["$scope", "$state"];
app.controller('PortfolioCtrl', PortfolioCtrl);

function PortfolioCtrl($scope, $state) {
    console.log('Portfolio ctrl');

    $scope.user = {
        portfolio: [{
            title: 'Test project for learn JS',
            description: 'This is my test project for learn JS on GeekHub',
            url: 'https://vladimshc.github.io/',
            img: '/images/geekhub-logo-2_zoeein.png'

        }, {
            title: 'RSS aggregator',
            description: 'News aggregator from rss channels',
            url: 'http://rss-aggregator.herokuapp.com/',
            img: '/images/rss-feed.png'

        }, {
            title: 'To-Do list',
            description: 'App built on \'Express\' and use MongoDB',
            url: 'https://vladimshc-todo-list.herokuapp.com',
            img: '/images/nodejs-express-mongo.jpg'

        }]
    };
}
'use strict';

SkillsCtrl.$inject = ["$scope", "$state"];
app.controller('SkillsCtrl', SkillsCtrl);

function SkillsCtrl($scope, $state) {
    console.log('SKills ctrl');

    $scope.user = {
        skills: [{
            title: 'HTML',
            value: 60
        }, {
            title: 'CSS',
            value: 50
        }, {
            title: 'SCSS',
            value: 40
        }, {
            title: 'Javascript',
            value: 40
        }, {
            title: 'Angular',
            value: 30
        }, {
            title: 'React',
            value: 30
        }, {
            title: 'Node',
            value: 40
        }, {
            title: 'MongoDb',
            value: 40
        }]
    };
}
'use strict';

MainCtrl.$inject = ["$scope", "$state"];
app.controller('MainCtrl', MainCtrl);

function MainCtrl($scope, $state) {
    console.log('Main ctrl', $state.current.name);

    $scope.var1 = 'var1112';

    $scope.user = {
        fullName: 'Volodymyr Shcherbyna'
    };

    $scope.guest = {};
}
'use strict';

app.config(["$stateProvider", function ($stateProvider) {
    $stateProvider.state({
        name: 'main',
        url: '',
        templateUrl: 'views/modules/main/main.html',
        controller: 'MainCtrl as Main'
    }).state({
        name: 'main.about',
        url: '/about',
        templateUrl: 'views/modules/about/about.html',
        controller: 'AboutCtrl as About'
    }).state({
        name: 'main.skills',
        url: '/skills',
        templateUrl: 'views/modules/skills/skills.html',
        controller: 'SkillsCtrl as Skills'
    }).state({
        name: 'main.experience',
        url: '/experience',
        templateUrl: 'views/modules/experience/experience.html',
        controller: 'ExperienceCtrl as Experience'
    }).state({
        name: 'main.portfolіo',
        url: '/portfolіo',
        templateUrl: 'views/modules/portfolіo/portfolіo.html',
        controller: 'PortfolioCtrl as Portfolio'
    }).state({
        name: 'main.contact',
        url: '/contact',
        templateUrl: 'views/modules/contact/contact.html',
        controller: 'ContactCtrl as Contact'
    });
}]);
//# sourceMappingURL=main.js.map
