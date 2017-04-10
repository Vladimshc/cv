app.controller('MainCtrl', MainCtrl);

function MainCtrl($scope, $state) {
    // console.log($scope.user.fullName + "+++++++++++++test+++++++++++++++");

    console.log('Main ctrl', $state.current.name);

    $scope.var1 = 'var1112';

    $scope.user = {
        fullName: 'Volodymyr Shcherbyna',
        skills: [
            'HTML', 'CSS', 'Javascript', 'SCSS', 'Angular'
        ]
    };

    $scope.guest = {};
}

