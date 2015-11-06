angular.module('testApplication').directive('smartButton', function ($timeout) {
    return {
        restrict: 'E',
        template: '' +
        '<div class="button"> ' +
            '<div>{{text}} </div>' +
            '<div ng-if="loading==\'true\'" class="loader"></div>'+
        '</div>' +
        '',
        priority: 100,
        link: function (scope, element, attrs) {

            attrs.$observe('text', function (text) {
                scope.text = text;
            });

            attrs.$observe('loading', function (loading) {
                $timeout(function() {
                    scope.loading = loading;
                },100);
            });
        }
    }
});