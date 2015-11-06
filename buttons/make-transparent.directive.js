angular.module('testApplication').directive('makeTransparent', function ($compile) {
    return {
        restrict: 'A',
        transclude: 'element',
        priority: 10,
        replace: true,
        compile: function (elm, attr, transclude) {
            return function (scope, element, attrs, ctrl, trans) {
                var template = '<div ng-class="{transparent: loading == \'true\' }"></div>';
                transclude(scope, function (clone) {
                        element.after($compile(template)(scope).append(clone));
                    }
                );
            };
        }
    }
});