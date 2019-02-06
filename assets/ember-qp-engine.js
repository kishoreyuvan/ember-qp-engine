"use strict";



define('ember-qp-engine/app', ['exports', 'ember-qp-engine/resolver', 'ember-load-initializers', 'ember-qp-engine/config/environment'], function (exports, _resolver, _emberLoadInitializers, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var App = Ember.Application.extend({
    modulePrefix: _environment.default.modulePrefix,
    podModulePrefix: _environment.default.podModulePrefix,
    Resolver: _resolver.default
  });

  (0, _emberLoadInitializers.default)(App, _environment.default.modulePrefix);

  Ember.onerror = function (error) {
    alert(error);
  };

  exports.default = App;
});
define('ember-qp-engine/components/link-to-external', ['exports', 'ember-engines/components/link-to-external-component'], function (exports, _linkToExternalComponent) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _linkToExternalComponent.default;
    }
  });
});
define('ember-qp-engine/components/welcome-page', ['exports', 'ember-welcome-page/components/welcome-page'], function (exports, _welcomePage) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _welcomePage.default;
    }
  });
});
define('ember-qp-engine/config/asset-manifest', ['exports', 'require', 'ember-qp-engine/config/environment'], function (exports, _require2, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var modulePrefix = _environment.default.modulePrefix;
  var metaName = modulePrefix + '/config/asset-manifest';
  var nodeName = modulePrefix + '/config/node-asset-manifest';

  var config = {};

  try {
    // If we have a Node version of the asset manifest, use that for FastBoot and
    // similar environments.
    if (_require2.default.has(nodeName)) {
      config = (0, _require2.default)(nodeName).default; // eslint-disable-line
    } else {
      var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
      config = JSON.parse(unescape(rawConfig));
    }
  } catch (err) {
    throw new Error('Failed to load asset manifest. For browser environments, verify the meta tag with name "' + metaName + '" is present. For non-browser environments, verify that you included the node-asset-manifest module.');
  }

  exports.default = config;
});
define('ember-qp-engine/controllers/application', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Controller.extend({
    init: function init() {
      this._super.apply(this, arguments);
      this.set('object_type', {
        name: 'obj',
        id: 22
      });
    }
  });
});
define('ember-qp-engine/controllers/approute', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Controller.extend({
    queryParams: ['object_type']
  });
});
define('ember-qp-engine/controllers/new', ['exports', 'engineroute/controllers/new'], function (exports, _new) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _new.default;
    }
  });
});
define('ember-qp-engine/engineroute/tests/addon.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | addon');

  QUnit.test('addon/controllers/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/controllers/new.js should pass ESLint\n\n');
  });

  QUnit.test('addon/engine.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/engine.js should pass ESLint\n\n');
  });

  QUnit.test('addon/resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/resolver.js should pass ESLint\n\n');
  });

  QUnit.test('addon/routes.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/routes.js should pass ESLint\n\n');
  });

  QUnit.test('addon/routes/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/routes/new.js should pass ESLint\n\n');
  });
});
define('ember-qp-engine/engineroute/tests/app.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | app');

  QUnit.test('app/controllers/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/controllers/new.js should pass ESLint\n\n');
  });

  QUnit.test('app/routes/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/routes/new.js should pass ESLint\n\n');
  });

  QUnit.test('app/templates/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/templates/new.js should pass ESLint\n\n');
  });
});
define('ember-qp-engine/helpers/app-version', ['exports', 'ember-qp-engine/config/environment', 'ember-cli-app-version/utils/regexp'], function (exports, _environment, _regexp) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.appVersion = appVersion;
  function appVersion(_) {
    var hash = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    var version = _environment.default.APP.version;
    // e.g. 1.0.0-alpha.1+4jds75hf

    // Allow use of 'hideSha' and 'hideVersion' For backwards compatibility
    var versionOnly = hash.versionOnly || hash.hideSha;
    var shaOnly = hash.shaOnly || hash.hideVersion;

    var match = null;

    if (versionOnly) {
      if (hash.showExtended) {
        match = version.match(_regexp.versionExtendedRegExp); // 1.0.0-alpha.1
      }
      // Fallback to just version
      if (!match) {
        match = version.match(_regexp.versionRegExp); // 1.0.0
      }
    }

    if (shaOnly) {
      match = version.match(_regexp.shaRegExp); // 4jds75hf
    }

    return match ? match[0] : version;
  }

  exports.default = Ember.Helper.helper(appVersion);
});
define('ember-qp-engine/helpers/pluralize', ['exports', 'ember-inflector/lib/helpers/pluralize'], function (exports, _pluralize) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _pluralize.default;
});
define('ember-qp-engine/helpers/singularize', ['exports', 'ember-inflector/lib/helpers/singularize'], function (exports, _singularize) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _singularize.default;
});
define('ember-qp-engine/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'ember-qp-engine/config/environment'], function (exports, _initializerFactory, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var name = void 0,
      version = void 0;
  if (_environment.default.APP) {
    name = _environment.default.APP.name;
    version = _environment.default.APP.version;
  }

  exports.default = {
    name: 'App Version',
    initialize: (0, _initializerFactory.default)(name, version)
  };
});
define('ember-qp-engine/initializers/container-debug-adapter', ['exports', 'ember-resolver/resolvers/classic/container-debug-adapter'], function (exports, _containerDebugAdapter) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'container-debug-adapter',

    initialize: function initialize() {
      var app = arguments[1] || arguments[0];

      app.register('container-debug-adapter:main', _containerDebugAdapter.default);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }
  };
});
define('ember-qp-engine/initializers/ember-data', ['exports', 'ember-data/setup-container', 'ember-data'], function (exports, _setupContainer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'ember-data',
    initialize: _setupContainer.default
  };
});
define('ember-qp-engine/initializers/engines', ['exports', 'ember-engines/initializers/engines'], function (exports, _engines) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _engines.default;
    }
  });
  Object.defineProperty(exports, 'initialize', {
    enumerable: true,
    get: function () {
      return _engines.initialize;
    }
  });
});
define('ember-qp-engine/initializers/export-application-global', ['exports', 'ember-qp-engine/config/environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.initialize = initialize;
  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_environment.default.exportApplicationGlobal !== false) {
      var theGlobal;
      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _environment.default.exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = Ember.String.classify(_environment.default.modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;

        application.reopen({
          willDestroy: function willDestroy() {
            this._super.apply(this, arguments);
            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  exports.default = {
    name: 'export-application-global',

    initialize: initialize
  };
});
define("ember-qp-engine/instance-initializers/ember-data", ["exports", "ember-data/initialize-store-service"], function (exports, _initializeStoreService) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: "ember-data",
    initialize: _initializeStoreService.default
  };
});
define('ember-qp-engine/instance-initializers/load-asset-manifest', ['exports', 'ember-qp-engine/config/asset-manifest'], function (exports, _assetManifest) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.initialize = initialize;


  /**
   * Initializes the AssetLoader service with a generated asset-manifest.
   */
  function initialize(instance) {
    var service = instance.lookup('service:asset-loader');
    service.pushManifest(_assetManifest.default);
  }

  exports.default = {
    name: 'load-asset-manifest',
    initialize: initialize
  };
});
define('ember-qp-engine/resolver', ['exports', 'ember-resolver'], function (exports, _emberResolver) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberResolver.default;
});
define('ember-qp-engine/router', ['exports', 'ember-qp-engine/config/environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var Router = Ember.Router.extend({
    location: _environment.default.locationType,
    rootURL: _environment.default.rootURL
  });

  Router.map(function () {
    this.route('approute');
    this.mount('engineroute');
  });

  exports.default = Router;
});
define('ember-qp-engine/routes/approute', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  };

  exports.default = Ember.Route.extend({
    serializeQueryParam: function serializeQueryParam(value, urlKey, defaultValueType) {
      if (urlKey === 'object_type') {
        return (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object' ? JSON.stringify(value) : '' + value;
      }
      return this._super(value, urlKey, defaultValueType);
    },
    deserializeQueryParam: function deserializeQueryParam(value, urlKey, defaultValueType) {
      if (urlKey === 'object_type') {
        return JSON.parse(value);
      }
      return this._super(value, urlKey, defaultValueType);
    }
  });
});
define('ember-qp-engine/routes/new', ['exports', 'engineroute/routes/new'], function (exports, _new) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _new.default;
    }
  });
});
define('ember-qp-engine/services/ajax', ['exports', 'ember-ajax/services/ajax'], function (exports, _ajax) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _ajax.default;
    }
  });
});
define('ember-qp-engine/services/asset-loader', ['exports', 'ember-asset-loader/services/asset-loader'], function (exports, _assetLoader) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _assetLoader.default;
    }
  });
});
define("ember-qp-engine/templates/application", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "035YSJ8r", "block": "{\"symbols\":[],\"statements\":[[6,\"h2\"],[10,\"style\",\"text:center\"],[8],[0,\"Ember Qp Application\"],[9],[0,\"\\n\\nTransition to application's route with object type query param. object_type: { name: 'test', type: 'obj' }\\n\"],[6,\"br\"],[8],[9],[0,\"\\n\"],[4,\"link-to\",[\"approute\",[26,\"query-params\",null,[[\"object_type\"],[[22,[\"object_type\"]]]]]],null,{\"statements\":[[0,\"  Application test route\\n\"]],\"parameters\":[]},null],[6,\"br\"],[8],[9],[0,\"\\n\"],[6,\"br\"],[8],[9],[0,\"\\n\\nTransition to engine's route with object type query param. object_type: { name: 'test', type: 'obj' }\\n\"],[6,\"br\"],[8],[9],[0,\"\\n\"],[4,\"link-to\",[\"engineroute.new\",[26,\"query-params\",null,[[\"object_type\"],[[22,[\"object_type\"]]]]]],null,{\"statements\":[[0,\"  Engine test route\\n\"]],\"parameters\":[]},null],[6,\"br\"],[8],[9],[0,\"\\n\"],[6,\"br\"],[8],[9],[0,\"\\n\\n\\n\\n\"],[1,[20,\"outlet\"],false]],\"hasEval\":false}", "meta": { "moduleName": "ember-qp-engine/templates/application.hbs" } });
});
define("ember-qp-engine/templates/approute", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "/GypeWZR", "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[6,\"h4\"],[8],[0,\"I am approute\"],[9]],\"hasEval\":false}", "meta": { "moduleName": "ember-qp-engine/templates/approute.hbs" } });
});
define('ember-qp-engine/templates/new', ['exports', 'engineroute/templates/new'], function (exports, _new) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _new.default;
    }
  });
});


define('ember-qp-engine/config/environment', [], function() {
  var prefix = 'ember-qp-engine';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(unescape(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

if (!runningTests) {
  require("ember-qp-engine/app")["default"].create({"name":"ember-qp-engine","version":"0.0.0+e82f745a"});
}
//# sourceMappingURL=ember-qp-engine.map
