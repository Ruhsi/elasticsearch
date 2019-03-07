Works with versions:

Angular CLI: 6.0.8
Node: 8.11.4
OS: linux x64
Angular: 6.1.10
... animations, common, compiler, compiler-cli, core, forms
... http, language-service, platform-browser
... platform-browser-dynamic, router

Package                           Version
-----------------------------------------------------------
@angular-devkit/architect         0.6.8
@angular-devkit/build-angular     0.6.8
@angular-devkit/build-optimizer   0.6.8
@angular-devkit/core              0.6.8
@angular-devkit/schematics        0.6.8
@angular/cdk                      7.3.3
@angular/cli                      6.0.8
@angular/material                 7.3.3
@ngtools/webpack                  6.0.8
@schematics/angular               0.6.8
@schematics/update                0.6.8
rxjs                              6.0.0
typescript                        2.7.2
webpack                           4.8.3

Steps to start:
1. cd elastictest
2. npm install -> node_modules folder gets installed
3. start elasticsearch and kibana
4. input testdata with kibana console
    1. now the get searches only for "firstname" and "lastname" fields
5. ng serve -> app can be accessed at localhost:4200
