'use strict';

/**
 * @ngdoc directive
 * @name roposoApp.directive:myDirective
 * @description
 * # myDirective
 */
angular.module('roposoApp')
    .directive('main', function() {
        return {
            templateUrl: 'views/main.html',
            restrict: 'E'
        };
    })
    .directive('gridOne', function() {
        return {
            templateUrl: 'views/grid1.html',
            restrict: 'E'
        };
    })
    .directive('editList', function() {
        return {
            restrict: 'EA',
            link: function(scope, element, attr) {
                $('.fa-edit').click(function() {
                    $(this).closest('.products').find('.static').hide();
                    $(this).closest('.products').find('#editable').show();
                })
            }
        };
    })
    .directive('scrollBottom', function() {
        return {
            restrict: 'EA',
            link: function(scope, element, attr) {
                $('#scrlBotm').click(function() {
                    $('html, body').animate({
                            scrollTop: $(document).height()
                        },
                        700);
                    return false;
                });
            }
        };
    })
