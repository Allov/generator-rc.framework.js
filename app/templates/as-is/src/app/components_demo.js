define(['knockout-utilities', 'router', 'dialoger', 'modaler','nav-bar'],
    function(koUtilities, router, dialoger, modaler, navBar) {
        'use strict';

        var Components = function() {};

        Components.prototype.registerComponents = function() {
            //Register components, dialogs & pages here
            
            koUtilities.registerComponent('nav-bar');

            dialoger.registerDialog('images', {
                title: 'Select an image',
                basePath: 'bower_components/rc.component.image-picker/dist/components/'
            });

            koUtilities.registerComponent('image-picker', {
                isBower: true
            });

            dialoger.registerDialog('test', {
                title: 'Test dialog'
            });

            router.registerPage('home');
            router.addRoute('', {
                title: 'Home',
                pageName: 'home'
            });
            navBar.menus.push({title: 'Home', hash: ''});

            router.registerPage('about', {
                htmlOnly: true
            });
            router.addRoute('about', {
                title: 'About'
            });
            navBar.menus.push({title: 'About', hash: 'about'});

            dialoger.registerDialog('inception-one', {
                title: 'Inception one'
            });

            dialoger.registerDialog('inception-two', {
                title: 'Inception two'
            });

            dialoger.registerDialog('blocking', {
                title: 'Blocking dialog'
            });

            router.registerPage('not-found', {
                htmlOnly: true
            });
            router.addRoute('page-non-trouvee', {
                title: 'Page non trouvée',
                pageName: 'not-found'
            });

            router.registerPage('test', {
                isBower: true
            });
            router.addRoute('test', {
                title: 'Test',
                pageName: 'test'
            });
            navBar.menus.push({title: 'Test', hash: 'test'});

            koUtilities.registerComponent('test-component', {
                isBower: true
            });

            modaler.registerModal('test', {
                title: 'Test modal',
                //htmlOnly: true,
                backdrop: 'static',
                keyboard: false
            });









            // [Scaffolded component registrations will be inserted here. To retain this feature, don't remove this comment.]

        };

        return new Components();
    });