
/**
 * Module dependencies.
 */

var zest = require('component-zest')
  , query = require('component-query');

// register engine

query.engine({
  all: zest,
  one: function(selector, el){
    return zest(selector, el)[0];
  }
});
