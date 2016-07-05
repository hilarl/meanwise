angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, Roles, $ionicModal) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  var swiper = new Swiper('.swiper-container-explore', {
        pagination: '.swiper-pagination',
        slidesPerView: 5,
        paginationClickable: true,
        spaceBetween: 5
  });

  $scope.chats = Roles.all();
  $scope.remove = function(chat) {
    Roles.remove(chat);
  };
})

.controller('RolesCtrl', function($scope, Roles) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.roles = Roles.all();
  $scope.remove = function(role) {
    Roles.remove(role);
  };
})

.controller('SwipeController', function($scope) {


  var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        slidesPerView: 3,
        paginationClickable: true,
        spaceBetween: 30
  });

  var swiper = new Swiper('.swiper-container-main', {
        pagination: '.swiper-pagination',
        slidesPerView: 1,
        paginationClickable: true,
        spaceBetween: 01,
        autoplay: 2000,
        effect: "fade"
  });

  var swiper = new Swiper('.swiper-container2', {
        pagination: '.swiper-pagination',
        slidesPerView: 2,
        paginationClickable: true,
        spaceBetween: 30
  });

  var swiper = new Swiper('.swiper-container3', {
        pagination: '.swiper-pagination',
        slidesPerView: 2,
        paginationClickable: true,
        spaceBetween: 30
  });

  $scope.$on('finishLoad',function(){
     $scope.swiper.update();
  })
})

.controller("ChannelCtrl", ['$rootScope', "$scope",
  "$stateParams", "$q", '$ionicModal', "$location", "$window", '$timeout',
  function($rootScope, $scope, $stateParams, $q, $location, $window,
  $timeout, $ionicModal){
  $scope.tabs = [
    {"text" : "Feed"},
    {"text" : "Stories"},
    {"text" : "Discussions"},
    {"text" : "Opportunities"},
    {"text" : "Works"},
    {"text" : "People"},
    {"text" : "Courses"},
    {"text" : "Favorites"}
  ];
  $scope.onSlideMove = function(data){
  //alert("You have selected " + data.index + " tab");
  };
  }
])

.controller('RoleDetailCtrl', function($scope, $stateParams, Roles) {
  $scope.role = Roles.get($stateParams.roleId);
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Roles) {
  $scope.chat = Roles.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
