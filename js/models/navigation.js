var __hasProp = Object.prototype.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor; child.__super__ = parent.prototype; return child; };

define(['models/model'], function(Model) {
  'use strict';
  var Navigation;
  return Navigation = (function(_super) {

    __extends(Navigation, _super);

    function Navigation() {
      Navigation.__super__.constructor.apply(this, arguments);
    }

    Navigation.prototype.defaults = {
      items: [
        {
          href: '/',
          title: 'Likes Browser'
        }, {
          href: '/posts',
          title: 'Wall Posts'
        }
      ]
    };

    return Navigation;

  })(Model);
});
