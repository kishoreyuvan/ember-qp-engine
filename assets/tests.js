'use strict';

define('ember-qp-engine/tests/app.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | app');

  QUnit.test('app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/application.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/application.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/approute.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/approute.js should pass ESLint\n\n');
  });

  QUnit.test('resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass ESLint\n\n');
  });

  QUnit.test('router.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass ESLint\n\n');
  });

  QUnit.test('routes/approute.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/approute.js should pass ESLint\n\n');
  });
});
define('ember-qp-engine/tests/test-helper', ['ember-qp-engine/app', 'ember-qp-engine/config/environment', '@ember/test-helpers', 'ember-qunit'], function (_app, _environment, _testHelpers, _emberQunit) {
  'use strict';

  (0, _testHelpers.setApplication)(_app.default.create(_environment.default.APP));

  (0, _emberQunit.start)();
});
define('ember-qp-engine/tests/tests.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | tests');

  QUnit.test('test-helper.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/application-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/application-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/approute-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/approute-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/new-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/new-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/approute-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/approute-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/new-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/new-test.js should pass ESLint\n\n');
  });
});
define('ember-qp-engine/tests/unit/controllers/application-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Controller | application', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      var controller = this.owner.lookup('controller:application');
      assert.ok(controller);
    });
  });
});
define('ember-qp-engine/tests/unit/controllers/approute-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Controller | approute', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      var controller = this.owner.lookup('controller:approute');
      assert.ok(controller);
    });
  });
});
define('ember-qp-engine/tests/unit/controllers/new-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Controller | new', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      var controller = this.owner.lookup('controller:new');
      assert.ok(controller);
    });
  });
});
define('ember-qp-engine/tests/unit/routes/approute-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Route | approute', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    (0, _qunit.test)('it exists', function (assert) {
      var route = this.owner.lookup('route:approute');
      assert.ok(route);
    });
  });
});
define('ember-qp-engine/tests/unit/routes/new-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Route | new', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    (0, _qunit.test)('it exists', function (assert) {
      var route = this.owner.lookup('route:new');
      assert.ok(route);
    });
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

require('ember-qp-engine/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
