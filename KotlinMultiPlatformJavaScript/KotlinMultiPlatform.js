(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'KotlinMultiPlatform'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'KotlinMultiPlatform'.");
    }
    root.KotlinMultiPlatform = factory(typeof KotlinMultiPlatform === 'undefined' ? {} : KotlinMultiPlatform, kotlin);
  }
}(this, function (_, Kotlin) {
  'use strict';
  var trimIndent = Kotlin.kotlin.text.trimIndent_pdl1vz$;
  function addition(left, right) {
    return left + right | 0;
  }
  function sayHelloKotlinConf() {
    return trimIndent('\n' + '    Hello KotlinConf, Kotlin/Multiplatform is awesome!' + '\n' + '    We are running on ' + platformName() + '\n' + '    ');
  }
  function platformName() {
    return 'JavaScript';
  }
  var package$com = _.com || (_.com = {});
  var package$ynab = package$com.ynab || (package$com.ynab = {});
  package$ynab.addition_vux9f0$ = addition;
  package$ynab.sayHelloKotlinConf = sayHelloKotlinConf;
  package$ynab.platformName = platformName;
  Kotlin.defineModule('KotlinMultiPlatform', _);
  return _;
}));

//# sourceMappingURL=KotlinMultiPlatform.js.map
