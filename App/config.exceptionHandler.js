(function () {
    'use strict';

    var app = angular.module('app');

    app.config(function ($provde) {
        $provde.decorator('$exceptionHandler', ['$delegate', 'config', 'logger', extendExceptionHandler]);
    });

    function extendExceptionHandler($delegate, config, logger) {
        var appErrorPrefix = config.appErrorPrefix;

        return function (exception, cause) {
            $delegate(exception, cause);
            if (appErrorPrefix && exception.message.indexOf(appErrorPrefix) === 0) {
                return;
            }

            var errorDate =
            {
                exception: exception,
                cause: cause
            };

            var message = appErrorPrefix + exception.message;

            logger.logError(message, errorData, true);
        };
    }
})();