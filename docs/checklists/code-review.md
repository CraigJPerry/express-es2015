# Code Review Checklist

Maintain consistency & quality, even with multiple collaborators in future. 

### Commit Messages

* Follow the [AngularJS message style|https://github.com/angular/angular.js/blob/master/CONTRIBUTING.md#commit]
  to allow structured filtering of VCS history
* Be consistant with existing scope categories

### Documentation

* Prefer actionable checklists over long winded reference text

## JavaScript

### Imports

* Prefer require() over ES2015 import since it permits lazy and dynamic loading

### Variables

* Prefer let over var to avoid the confusion that block scoped var can introduce
