// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services',
            'ionic-timepicker', 'ngMessages', 'ion-datetime-picker','ionic.rating','chart.js'])

    .run(function($ionicPlatform) {
        $ionicPlatform.ready(function() {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
                cordova.plugins.Keyboard.disableScroll(true);

            }
            if (window.StatusBar) {
                // org.apache.cordova.statusbar required
                StatusBar.styleLightContent();
            }
        });
    })

    .config(function($stateProvider, $urlRouterProvider) {

        // Ionic uses AngularUI Router which uses the concept of states
        // Learn more here: https://github.com/angular-ui/ui-router
        // Set up the various states which the app can be in.
        // Each state's controller can be found in controllers.js
        $stateProvider

        // setup an abstract state for the tabs directive
            .state('tab', {
                url: '/tab',
                abstract: true,
                templateUrl: 'templates/tabs.html',
                controller: 'TabCtrl'
            })

            // Each tab has its own nav history stack:

            .state('reg', {
                url: '/reg',
                templateUrl: 'register.html',
                controller: 'RegCtrl'
            })
            .state('map', {
                url: '/map',
                templateUrl: 'map.html',
                controller: 'MapCtrl'
            })

            .state('tab.contact-us', {
                url: '/contact-us',
                views: {
                    'service-list': {
                        templateUrl: 'templates/contact-us.html',
                        controller: 'ContactUsCtrl'
                    }
                }
            })
            .state('tab.service-list', {
                url: '/service-list',
                views: {
                    'service-list': {
                        templateUrl: 'templates/service-list.html',
                        controller: 'ServiceListCtrl'
                    }
                }
            })
            .state('tab.F&Q', {
                url: '/F&Q',
                views: {
                    'information': {
                        templateUrl: 'templates/f&qs.html',
                        controller: 'F&QCtrl'
                    }
                }
            })

            .state('tab.about', {
                url: '/about',
                views: {
                    'information': {
                        templateUrl: 'templates/about.html',
                        controller: 'AboutCtrl'
                    }
                }
            })
            .state('tab.feedback', {
                url: '/feedback',
                views: {
                    'information': {
                        templateUrl: 'templates/feedback.html',
                        controller: 'FeedbackCtrl'
                    }
                }
            })

            .state('tab.t&c', {
                url: '/t&c',
                views: {
                    'information': {
                        templateUrl: 'templates/t&c.html',
                        controller: 'T&CCtrl'
                    }
                }
            })

            .state('tab.blueteam_verified', {
                url: '/blueteam_verified',
                views: {
                    'information': {
                        templateUrl: 'templates/blueteam_verified.html',
                        controller: 'BlueteamVerifiedTypeCtrl'
                    }
                }
            })

            .state('tab.campaign', {
                url: '/campaign/:type/limit/:limit',
                views: {
                    'book': {
                        templateUrl: 'templates/campaign.html',
                        controller: 'CampaignCtrl'
                    }
                }
            })

            .state('tab.get_feedback', {
                url: '/get_feedback',
                views: {
                    'book': {
                        templateUrl: 'templates/get_feedback.html',
                        controller: 'GetFeedbackCtrl'
                    }
                }
            })

            .state('tab.invoice', {
                url: '/invoice',
                views: {
                    'book': {
                        templateUrl: 'templates/invoice.html',
                        controller: 'InvoiceCtrl'
                    }
                }
            })

            .state('tab.expanse', {
                url: '/expanse',
                views: {
                    'book': {
                        templateUrl: 'templates/expanse.html',
                        controller: 'ExpanseCtrl'
                    }
                }
            })

            .state('tab.monthly-income', {
                url: '/monthly_income',
                views: {
                    'information': {
                        templateUrl: 'templates/monthly-income.html',
                        controller: 'MonthlyIncomeCtrl'
                    }
                }
            })

        ;

        // if none of the above states are matched, use this as the fallback
        $urlRouterProvider.otherwise('/tab/service-list');
        //$urlRouterProvider.otherwise('/tab/worker-timer');
    });

