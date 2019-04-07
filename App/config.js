(function () {
    'use strict';

    var app = angule.module('app');

    var evants = {
        controllerActivateSuccess: 'controller.activateSuccess'
    };

    var config = {
        appErrorPrefix: '[SYSERR]',
        events: events,
        version: '1.0.0.0',
        showDebugNotiSetting: true
    };

    app.value('config', config);

    app.config(['$logProvider', function ($logProvider) {
        if ($logProvider.debugEnabled) {
            $logPrivder.debugEnabled(true);
        }
    }]);
    app.config(['commongConfigProvider', function (cfg) {
        cfg.config.controllerActivateSuccessEvent = config.events.controllerActivateSuccess;
    }]);

})();