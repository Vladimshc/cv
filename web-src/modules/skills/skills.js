app.
    controller('SkillsCtrl', SkillsCtrl);

function SkillsCtrl($scope, $state) {
    console.log('SKills ctrl');

    $scope.user = {
        skills: [
            {
                title: 'HTML',
                value: 60,
            },
            {
                title: 'CSS',
                value: 50,
            },
            {
                title: 'SCSS',
                value: 40,
            },
            {
                title: 'Javascript',
                value: 40,
            },
            {
                title: 'Angular',
                value: 30,
            },
            {
                title: 'React',
                value: 30,
            },
            {
                title: 'Node',
                value: 40,
            },
            {
                title: 'MongoDb',
                value: 40,
            }
        ]
    };
}