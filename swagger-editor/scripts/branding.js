/*
 * branding.js can be used for overloading Swagger Editor behaviors
 * You can add new controllers to Swagger Editor with following syntax:
 *
 * SwaggerEditor.controller('BrandingController', function($scope) { ... });
 *
 * You can use the controller you created in branding HTML pieces.
*/

'use strict';

SwaggerEditor.run(function VscodeYaml($rootScope, Storage, ExternalHooks) {
    let socket = io.connect();
    function onAceChange() {
        var value = $rootScope.editorValue;
        Storage.save('yaml', value);
        ExternalHooks.trigger('code-change', []);
    }

    socket.on('SWAGGER_UPDATE', function (data) {
        $rootScope.editorValue = data.yaml;
        onAceChange(true);
    });

    socket.on('SWAGGER_UPDATE_RESOURCES', function () {
        location.reload();
    });
});