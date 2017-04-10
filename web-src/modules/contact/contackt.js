app
    .controller('ContactCtrl', ContactCtrl);

function ContactCtrl($scope, $http) {
    $scope.guest.name = '';
    $scope.guest.email = '';
    $scope.guest.message = '';

    $scope.submit = () =>{
        if ( $scope.form.$valid &&
                ($scope.guest.name !== '' )&&
                ($scope.guest.email !== '') &&
                ($scope.guest.message !== ''))
        {
            $http.post( '/sendmessage', $scope.guest ).then(function( res ){
                if ( res.status === 200) {
                    $scope.form.$setPristine();
                    $scope.guest = {};
                    $scope.successSend = true;
                    $scope.msg = 'Сообщение отправлено';
                    alert($scope.msg);
                    console.log($scope.msg)
                } else {
                    $scope.msg = 'Возникла ошибка';
                    alert($scope.msg);
                    console.log($scope.msg);
                    console.log(res);
                }
            })
        } else {
            alert('Заполните форму');
        }
    };
    console.log('Contact ctrl end');
}