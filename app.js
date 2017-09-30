var app = angular.module("FrancoApp", ["ui.router"])

app.config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise("/")

    $stateProvider
        .state("home", {
            url: "/",
            templateUrl: "./views/home.html",
            controller: "homeController"
        })
        .state("abstract", {
            url: "/abstract",
            templateUrl: "./views/abstract.html",
            controller: "homeController"
        })
        .state("people", {
            url: "/people",
            templateUrl: "./views/people.html",
            controller: "homeController"
        })
        .state("places", {
            url: "/places",
            templateUrl: "./views/places.html",
            controller: "homeController"
        })


})