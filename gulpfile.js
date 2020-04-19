'use strict';

const build = require('@microsoft/sp-build-web');

build.addSuppression(`Warning - [sass] The local CSS class 'ms-Grid' is not camelCase and will not be type-safe.`);
build.addSuppression(/Warning \- \[sass\] The local CSS class 'grid-item\-.*' is not camelCase and will not be type-safe./i);
build.addSuppression(/Warning \- \[sass\] The local CSS class 'grid-item\_.*' is not camelCase and will not be type-safe./i);
build.addSuppression(/Warning \- \[sass\] The local CSS class 'grid-item\.*' is not camelCase and will not be type-safe./i);
build.initialize(require('gulp'));
