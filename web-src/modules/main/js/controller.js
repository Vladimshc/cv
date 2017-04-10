app.controller('MainCtrl', MainCtrl);

function MainCtrl($scope, $state) {
    console.log('Main ctrl', $state.current.name);

    $scope.var1 = 'var1112';

    $scope.user = {
        fullName: 'Volodymyr Shcherbyna',
    };

    $scope.guest = {};
}

