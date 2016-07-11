angular.module('mytestnodule', ['templates-mytest', 'pascalprecht.translate' ])
.config(function($translateProvider) {
    'use strict';

    $translateProvider
        .preferredLanguage('en_US')
        .useSanitizeValueStrategy('escape')
        .translations('en_US', {
            'mytest': {
                'name': {
                    'first': 'Luke'
                }
            }
        })
        .useMissingTranslationHandlerLog();
    })
  .directive('mytest', function($translate ) {
    'use strict';

    var controller = function ($scope, $element) {
    };

    return {
      restrict: 'EAC',
      scope: {
        name: '<'
      },
      templateUrl: 'mytest.html',
      controller: controller,

      link: function(scope, element, attr, ctrl) {
      }
    };
  });
