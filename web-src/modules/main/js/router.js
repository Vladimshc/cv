app.config(($stateProvider) => {
        $stateProvider
            .state({
                name: 'main',
                url: '',
                templateUrl: 'views/modules/main/main.html',
                controller: 'MainCtrl as Main'
            })
            .state({
                name: 'main.about',
                url: '/about',
                templateUrl: 'views/modules/about/about.html',
                controller: 'AboutCtrl as About'
            })
            .state({
                name: 'main.skills',
                url: '/skills',
                templateUrl: 'views/modules/skills/skills.html',
                controller: 'SkillsCtrl as Skills'
            })
            .state({
                name: 'main.experience',
                url: '/experience',
                templateUrl: 'views/modules/experience/experience.html',
                controller: 'ExperienceCtrl as Experience'
            })
            .state({
                name: 'main.portfolіo',
                url: '/portfolіo',
                templateUrl: 'views/modules/portfolіo/portfolіo.html',
                controller: 'PortfolioCtrl as Portfolio'
            })
            .state({
                name: 'main.contact',
                url: '/contact',
                templateUrl: 'views/modules/contact/contact.html',
                controller: 'ContactCtrl as Contact'
            });

});