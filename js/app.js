if (!String.prototype.trim) {
  (function() {
    // Make sure we trim BOM and NBSP
    var rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    String.prototype.trim = function() {
        return this.replace(rtrim, '');
    };
  })();
}

(function(window) {
  function basePath() {
    var regexp = new RegExp('js/app.js');
    var script = $('script').filter(function(i, el) {
      return el.src.match(regexp);
    })[0]

    var base = script.src.substr(window.location.protocol.length + window.location.host.length + 2, script.src.length);

    return base.replace('/js/app.js', '');
  }

  var app = window.angular.module('docs', ['cfp.hotkeys'])

  app.value('pages', {"/":{"title":"Home","summary":"Home <small class=\"text-muted\">page</small>","path":"/","version":"3.0.0"},"/manual/address_resolution/":{"title":"Address resolution","summary":"Address resolution <small class=\"text-muted\">page</small>","path":"/manual/address_resolution/","version":"3.0.0"},"/manual/async/":{"title":"Asynchronous programming","summary":"Asynchronous programming <small class=\"text-muted\">page</small>","path":"/manual/async/","version":"3.0.0"},"/manual/auth/":{"title":"Authentication","summary":"Authentication <small class=\"text-muted\">page</small>","path":"/manual/auth/","version":"3.0.0"},"/manual/compression/":{"title":"Compression","summary":"Compression <small class=\"text-muted\">page</small>","path":"/manual/compression/","version":"3.0.0"},"/manual/control_connection/":{"title":"Control connection","summary":"Control connection <small class=\"text-muted\">page</small>","path":"/manual/control_connection/","version":"3.0.0"},"/manual/custom_codecs/extras/":{"title":"Optional codecs","summary":"Optional codecs <small class=\"text-muted\">page</small>","path":"/manual/custom_codecs/extras/","version":"3.0.0"},"/manual/custom_codecs/":{"title":"Custom Codecs","summary":"Custom Codecs <small class=\"text-muted\">page</small>","path":"/manual/custom_codecs/","version":"3.0.0"},"/manual/custom_payloads/":{"title":"Custom Payloads","summary":"Custom Payloads <small class=\"text-muted\">page</small>","path":"/manual/custom_payloads/","version":"3.0.0"},"/manual/load_balancing/":{"title":"Load balancing","summary":"Load balancing <small class=\"text-muted\">page</small>","path":"/manual/load_balancing/","version":"3.0.0"},"/manual/logging/":{"title":"Logging","summary":"Logging <small class=\"text-muted\">page</small>","path":"/manual/logging/","version":"3.0.0"},"/manual/metadata/":{"title":"Metadata","summary":"Metadata <small class=\"text-muted\">page</small>","path":"/manual/metadata/","version":"3.0.0"},"/manual/metrics/":{"title":"Metrics","summary":"Metrics <small class=\"text-muted\">page</small>","path":"/manual/metrics/","version":"3.0.0"},"/manual/native_protocol/":{"title":"Native protocol","summary":"Native protocol <small class=\"text-muted\">page</small>","path":"/manual/native_protocol/","version":"3.0.0"},"/manual/object_mapper/creating/":{"title":"Definition of mapped classes","summary":"Definition of mapped classes <small class=\"text-muted\">page</small>","path":"/manual/object_mapper/creating/","version":"3.0.0"},"/manual/object_mapper/custom_codecs/":{"title":"Using custom codecs","summary":"Using custom codecs <small class=\"text-muted\">page</small>","path":"/manual/object_mapper/custom_codecs/","version":"3.0.0"},"/manual/object_mapper/":{"title":"Object Mapper","summary":"Object Mapper <small class=\"text-muted\">page</small>","path":"/manual/object_mapper/","version":"3.0.0"},"/manual/object_mapper/using/":{"title":"Using the mapper","summary":"Using the mapper <small class=\"text-muted\">page</small>","path":"/manual/object_mapper/using/","version":"3.0.0"},"/manual/paging/":{"title":"Paging","summary":"Paging <small class=\"text-muted\">page</small>","path":"/manual/paging/","version":"3.0.0"},"/manual/pooling/":{"title":"Connection pooling","summary":"Connection pooling <small class=\"text-muted\">page</small>","path":"/manual/pooling/","version":"3.0.0"},"/manual/query_timestamps/":{"title":"Query timestamps","summary":"Query timestamps <small class=\"text-muted\">page</small>","path":"/manual/query_timestamps/","version":"3.0.0"},"/manual/":{"title":"Manual","summary":"Manual <small class=\"text-muted\">page</small>","path":"/manual/","version":"3.0.0"},"/manual/reconnection/":{"title":"Reconnection","summary":"Reconnection <small class=\"text-muted\">page</small>","path":"/manual/reconnection/","version":"3.0.0"},"/manual/retries/":{"title":"Retries","summary":"Retries <small class=\"text-muted\">page</small>","path":"/manual/retries/","version":"3.0.0"},"/manual/shaded_jar/":{"title":"Using the shaded JAR","summary":"Using the shaded JAR <small class=\"text-muted\">page</small>","path":"/manual/shaded_jar/","version":"3.0.0"},"/manual/socket_options/":{"title":"Socket options","summary":"Socket options <small class=\"text-muted\">page</small>","path":"/manual/socket_options/","version":"3.0.0"},"/manual/speculative_execution/":{"title":"Speculative query execution","summary":"Speculative query execution <small class=\"text-muted\">page</small>","path":"/manual/speculative_execution/","version":"3.0.0"},"/manual/ssl/":{"title":"SSL","summary":"SSL <small class=\"text-muted\">page</small>","path":"/manual/ssl/","version":"3.0.0"},"/manual/statements/batch/":{"title":"Batch statements","summary":"Batch statements <small class=\"text-muted\">page</small>","path":"/manual/statements/batch/","version":"3.0.0"},"/manual/statements/built/":{"title":"Built statements","summary":"Built statements <small class=\"text-muted\">page</small>","path":"/manual/statements/built/","version":"3.0.0"},"/manual/statements/prepared/":{"title":"Prepared statements","summary":"Prepared statements <small class=\"text-muted\">page</small>","path":"/manual/statements/prepared/","version":"3.0.0"},"/manual/statements/":{"title":"Statements","summary":"Statements <small class=\"text-muted\">page</small>","path":"/manual/statements/","version":"3.0.0"},"/manual/statements/simple/":{"title":"Simple statements","summary":"Simple statements <small class=\"text-muted\">page</small>","path":"/manual/statements/simple/","version":"3.0.0"},"/manual/tuples/":{"title":"Tuples","summary":"Tuples <small class=\"text-muted\">page</small>","path":"/manual/tuples/","version":"3.0.0"},"/manual/udts/":{"title":"User-defined types","summary":"User-defined types <small class=\"text-muted\">page</small>","path":"/manual/udts/","version":"3.0.0"},"/changelog/":{"title":"Changelog","summary":"Changelog <small class=\"text-muted\">page</small>","path":"/changelog/","version":"3.0.0"},"/upgrade_guide/":{"title":"Upgrade guide","summary":"Upgrade guide <small class=\"text-muted\">page</small>","path":"/upgrade_guide/","version":"3.0.0"},"/faq/":{"title":"Frequently Asked Questions","summary":"Frequently Asked Questions <small class=\"text-muted\">page</small>","path":"/faq/","version":"3.0.0"},"/2.1.10/":{"title":"Home","summary":"Home <small class=\"text-muted\">page</small>","path":"/2.1.10/","version":"2.1.10"},"/2.1.10/manual/address_resolution/":{"title":"Address resolution","summary":"Address resolution <small class=\"text-muted\">page</small>","path":"/2.1.10/manual/address_resolution/","version":"2.1.10"},"/2.1.10/manual/async/":{"title":"Asynchronous programming","summary":"Asynchronous programming <small class=\"text-muted\">page</small>","path":"/2.1.10/manual/async/","version":"2.1.10"},"/2.1.10/manual/auth/":{"title":"Authentication","summary":"Authentication <small class=\"text-muted\">page</small>","path":"/2.1.10/manual/auth/","version":"2.1.10"},"/2.1.10/manual/compression/":{"title":"Compression","summary":"Compression <small class=\"text-muted\">page</small>","path":"/2.1.10/manual/compression/","version":"2.1.10"},"/2.1.10/manual/control_connection/":{"title":"Control connection","summary":"Control connection <small class=\"text-muted\">page</small>","path":"/2.1.10/manual/control_connection/","version":"2.1.10"},"/2.1.10/manual/idempotence/":{"title":"Query idempotence","summary":"Query idempotence <small class=\"text-muted\">page</small>","path":"/2.1.10/manual/idempotence/","version":"2.1.10"},"/2.1.10/manual/load_balancing/":{"title":"Load balancing","summary":"Load balancing <small class=\"text-muted\">page</small>","path":"/2.1.10/manual/load_balancing/","version":"2.1.10"},"/2.1.10/manual/logging/":{"title":"Logging","summary":"Logging <small class=\"text-muted\">page</small>","path":"/2.1.10/manual/logging/","version":"2.1.10"},"/2.1.10/manual/metadata/":{"title":"Metadata","summary":"Metadata <small class=\"text-muted\">page</small>","path":"/2.1.10/manual/metadata/","version":"2.1.10"},"/2.1.10/manual/metrics/":{"title":"Metrics","summary":"Metrics <small class=\"text-muted\">page</small>","path":"/2.1.10/manual/metrics/","version":"2.1.10"},"/2.1.10/manual/native_protocol/":{"title":"Native protocol","summary":"Native protocol <small class=\"text-muted\">page</small>","path":"/2.1.10/manual/native_protocol/","version":"2.1.10"},"/2.1.10/manual/object_mapper/creating/":{"title":"Definition of mapped classes","summary":"Definition of mapped classes <small class=\"text-muted\">page</small>","path":"/2.1.10/manual/object_mapper/creating/","version":"2.1.10"},"/2.1.10/manual/object_mapper/":{"title":"Object Mapper","summary":"Object Mapper <small class=\"text-muted\">page</small>","path":"/2.1.10/manual/object_mapper/","version":"2.1.10"},"/2.1.10/manual/object_mapper/using/":{"title":"Using the mapper","summary":"Using the mapper <small class=\"text-muted\">page</small>","path":"/2.1.10/manual/object_mapper/using/","version":"2.1.10"},"/2.1.10/manual/paging/":{"title":"Paging","summary":"Paging <small class=\"text-muted\">page</small>","path":"/2.1.10/manual/paging/","version":"2.1.10"},"/2.1.10/manual/pooling/":{"title":"Connection pooling","summary":"Connection pooling <small class=\"text-muted\">page</small>","path":"/2.1.10/manual/pooling/","version":"2.1.10"},"/2.1.10/manual/query_timestamps/":{"title":"Query timestamps","summary":"Query timestamps <small class=\"text-muted\">page</small>","path":"/2.1.10/manual/query_timestamps/","version":"2.1.10"},"/2.1.10/manual/":{"title":"Manual","summary":"Manual <small class=\"text-muted\">page</small>","path":"/2.1.10/manual/","version":"2.1.10"},"/2.1.10/manual/reconnection/":{"title":"Reconnection","summary":"Reconnection <small class=\"text-muted\">page</small>","path":"/2.1.10/manual/reconnection/","version":"2.1.10"},"/2.1.10/manual/retries/":{"title":"Retries","summary":"Retries <small class=\"text-muted\">page</small>","path":"/2.1.10/manual/retries/","version":"2.1.10"},"/2.1.10/manual/shaded_jar/":{"title":"Using the shaded JAR","summary":"Using the shaded JAR <small class=\"text-muted\">page</small>","path":"/2.1.10/manual/shaded_jar/","version":"2.1.10"},"/2.1.10/manual/socket_options/":{"title":"Socket options","summary":"Socket options <small class=\"text-muted\">page</small>","path":"/2.1.10/manual/socket_options/","version":"2.1.10"},"/2.1.10/manual/speculative_execution/":{"title":"Speculative query execution","summary":"Speculative query execution <small class=\"text-muted\">page</small>","path":"/2.1.10/manual/speculative_execution/","version":"2.1.10"},"/2.1.10/manual/ssl/":{"title":"SSL","summary":"SSL <small class=\"text-muted\">page</small>","path":"/2.1.10/manual/ssl/","version":"2.1.10"},"/2.1.10/manual/statements/batch/":{"title":"Batch statements","summary":"Batch statements <small class=\"text-muted\">page</small>","path":"/2.1.10/manual/statements/batch/","version":"2.1.10"},"/2.1.10/manual/statements/built/":{"title":"Built statements","summary":"Built statements <small class=\"text-muted\">page</small>","path":"/2.1.10/manual/statements/built/","version":"2.1.10"},"/2.1.10/manual/statements/prepared/":{"title":"Prepared statements","summary":"Prepared statements <small class=\"text-muted\">page</small>","path":"/2.1.10/manual/statements/prepared/","version":"2.1.10"},"/2.1.10/manual/statements/":{"title":"Statements","summary":"Statements <small class=\"text-muted\">page</small>","path":"/2.1.10/manual/statements/","version":"2.1.10"},"/2.1.10/manual/statements/simple/":{"title":"Simple statements","summary":"Simple statements <small class=\"text-muted\">page</small>","path":"/2.1.10/manual/statements/simple/","version":"2.1.10"},"/2.1.10/manual/tuples/":{"title":"Tuples","summary":"Tuples <small class=\"text-muted\">page</small>","path":"/2.1.10/manual/tuples/","version":"2.1.10"},"/2.1.10/manual/udts/":{"title":"User-defined types","summary":"User-defined types <small class=\"text-muted\">page</small>","path":"/2.1.10/manual/udts/","version":"2.1.10"},"/2.1.10/changelog/":{"title":"Changelog","summary":"Changelog <small class=\"text-muted\">page</small>","path":"/2.1.10/changelog/","version":"2.1.10"},"/2.1.10/upgrade_guide/":{"title":"Upgrade guide","summary":"Upgrade guide <small class=\"text-muted\">page</small>","path":"/2.1.10/upgrade_guide/","version":"2.1.10"},"/2.1.10/faq/":{"title":"Frequently Asked Questions","summary":"Frequently Asked Questions <small class=\"text-muted\">page</small>","path":"/2.1.10/faq/","version":"2.1.10"},"/2.1.9/":{"title":"Home","summary":"Home <small class=\"text-muted\">page</small>","path":"/2.1.9/","version":"2.1.9"},"/2.1.9/features/address_resolution/":{"title":"Address resolution","summary":"Address resolution <small class=\"text-muted\">page</small>","path":"/2.1.9/features/address_resolution/","version":"2.1.9"},"/2.1.9/features/async/":{"title":"Asynchronous programming","summary":"Asynchronous programming <small class=\"text-muted\">page</small>","path":"/2.1.9/features/async/","version":"2.1.9"},"/2.1.9/features/compression/":{"title":"Compression","summary":"Compression <small class=\"text-muted\">page</small>","path":"/2.1.9/features/compression/","version":"2.1.9"},"/2.1.9/features/logging/":{"title":"Logging","summary":"Logging <small class=\"text-muted\">page</small>","path":"/2.1.9/features/logging/","version":"2.1.9"},"/2.1.9/features/metadata/":{"title":"Metadata","summary":"Metadata <small class=\"text-muted\">page</small>","path":"/2.1.9/features/metadata/","version":"2.1.9"},"/2.1.9/features/native_protocol/":{"title":"Native protocol","summary":"Native protocol <small class=\"text-muted\">page</small>","path":"/2.1.9/features/native_protocol/","version":"2.1.9"},"/2.1.9/features/object_mapper/creating/":{"title":"Definition of mapped classes","summary":"Definition of mapped classes <small class=\"text-muted\">page</small>","path":"/2.1.9/features/object_mapper/creating/","version":"2.1.9"},"/2.1.9/features/object_mapper/":{"title":"Object Mapper","summary":"Object Mapper <small class=\"text-muted\">page</small>","path":"/2.1.9/features/object_mapper/","version":"2.1.9"},"/2.1.9/features/object_mapper/using/":{"title":"Using the mapper","summary":"Using the mapper <small class=\"text-muted\">page</small>","path":"/2.1.9/features/object_mapper/using/","version":"2.1.9"},"/2.1.9/features/paging/":{"title":"Paging","summary":"Paging <small class=\"text-muted\">page</small>","path":"/2.1.9/features/paging/","version":"2.1.9"},"/2.1.9/features/pooling/":{"title":"Connection pooling","summary":"Connection pooling <small class=\"text-muted\">page</small>","path":"/2.1.9/features/pooling/","version":"2.1.9"},"/2.1.9/features/query_timestamps/":{"title":"Query timestamps","summary":"Query timestamps <small class=\"text-muted\">page</small>","path":"/2.1.9/features/query_timestamps/","version":"2.1.9"},"/2.1.9/features/":{"title":"Features","summary":"Features <small class=\"text-muted\">page</small>","path":"/2.1.9/features/","version":"2.1.9"},"/2.1.9/features/shaded_jar/":{"title":"Using the shaded JAR","summary":"Using the shaded JAR <small class=\"text-muted\">page</small>","path":"/2.1.9/features/shaded_jar/","version":"2.1.9"},"/2.1.9/features/speculative_execution/":{"title":"Speculative query execution","summary":"Speculative query execution <small class=\"text-muted\">page</small>","path":"/2.1.9/features/speculative_execution/","version":"2.1.9"},"/2.1.9/features/ssl/":{"title":"SSL","summary":"SSL <small class=\"text-muted\">page</small>","path":"/2.1.9/features/ssl/","version":"2.1.9"},"/2.1.9/features/statements/prepared/":{"title":"Prepared statements","summary":"Prepared statements <small class=\"text-muted\">page</small>","path":"/2.1.9/features/statements/prepared/","version":"2.1.9"},"/2.1.9/features/statements/":{"title":"Statements","summary":"Statements <small class=\"text-muted\">page</small>","path":"/2.1.9/features/statements/","version":"2.1.9"},"/2.1.9/changelog/":{"title":"Changelog","summary":"Changelog <small class=\"text-muted\">page</small>","path":"/2.1.9/changelog/","version":"2.1.9"},"/2.1.9/upgrade_guide/":{"title":"Upgrade guide","summary":"Upgrade guide <small class=\"text-muted\">page</small>","path":"/2.1.9/upgrade_guide/","version":"2.1.9"},"/2.1.9/faq/":{"title":"Frequently Asked Questions","summary":"Frequently Asked Questions <small class=\"text-muted\">page</small>","path":"/2.1.9/faq/","version":"2.1.9"},"/2.1.8/":{"title":"Home","summary":"Home <small class=\"text-muted\">page</small>","path":"/2.1.8/","version":"2.1.8"},"/2.1.8/features/address_resolution/":{"title":"Address resolution","summary":"Address resolution <small class=\"text-muted\">page</small>","path":"/2.1.8/features/address_resolution/","version":"2.1.8"},"/2.1.8/features/async/":{"title":"Asynchronous programming","summary":"Asynchronous programming <small class=\"text-muted\">page</small>","path":"/2.1.8/features/async/","version":"2.1.8"},"/2.1.8/features/compression/":{"title":"Compression","summary":"Compression <small class=\"text-muted\">page</small>","path":"/2.1.8/features/compression/","version":"2.1.8"},"/2.1.8/features/logging/":{"title":"Logging","summary":"Logging <small class=\"text-muted\">page</small>","path":"/2.1.8/features/logging/","version":"2.1.8"},"/2.1.8/features/metadata/":{"title":"Metadata","summary":"Metadata <small class=\"text-muted\">page</small>","path":"/2.1.8/features/metadata/","version":"2.1.8"},"/2.1.8/features/native_protocol/":{"title":"Native protocol","summary":"Native protocol <small class=\"text-muted\">page</small>","path":"/2.1.8/features/native_protocol/","version":"2.1.8"},"/2.1.8/features/object_mapper/creating/":{"title":"Definition of mapped classes","summary":"Definition of mapped classes <small class=\"text-muted\">page</small>","path":"/2.1.8/features/object_mapper/creating/","version":"2.1.8"},"/2.1.8/features/object_mapper/":{"title":"Object Mapper","summary":"Object Mapper <small class=\"text-muted\">page</small>","path":"/2.1.8/features/object_mapper/","version":"2.1.8"},"/2.1.8/features/object_mapper/using/":{"title":"Using the mapper","summary":"Using the mapper <small class=\"text-muted\">page</small>","path":"/2.1.8/features/object_mapper/using/","version":"2.1.8"},"/2.1.8/features/paging/":{"title":"Paging","summary":"Paging <small class=\"text-muted\">page</small>","path":"/2.1.8/features/paging/","version":"2.1.8"},"/2.1.8/features/pooling/":{"title":"Connection pooling","summary":"Connection pooling <small class=\"text-muted\">page</small>","path":"/2.1.8/features/pooling/","version":"2.1.8"},"/2.1.8/features/query_timestamps/":{"title":"Query timestamps","summary":"Query timestamps <small class=\"text-muted\">page</small>","path":"/2.1.8/features/query_timestamps/","version":"2.1.8"},"/2.1.8/features/":{"title":"Features","summary":"Features <small class=\"text-muted\">page</small>","path":"/2.1.8/features/","version":"2.1.8"},"/2.1.8/features/shaded_jar/":{"title":"Using the shaded JAR","summary":"Using the shaded JAR <small class=\"text-muted\">page</small>","path":"/2.1.8/features/shaded_jar/","version":"2.1.8"},"/2.1.8/features/speculative_execution/":{"title":"Speculative query execution","summary":"Speculative query execution <small class=\"text-muted\">page</small>","path":"/2.1.8/features/speculative_execution/","version":"2.1.8"},"/2.1.8/features/statements/prepared/":{"title":"Prepared statements","summary":"Prepared statements <small class=\"text-muted\">page</small>","path":"/2.1.8/features/statements/prepared/","version":"2.1.8"},"/2.1.8/features/statements/":{"title":"Statements","summary":"Statements <small class=\"text-muted\">page</small>","path":"/2.1.8/features/statements/","version":"2.1.8"},"/2.1.8/changelog/":{"title":"Changelog","summary":"Changelog <small class=\"text-muted\">page</small>","path":"/2.1.8/changelog/","version":"2.1.8"},"/2.1.8/upgrade_guide/":{"title":"Upgrade guide","summary":"Upgrade guide <small class=\"text-muted\">page</small>","path":"/2.1.8/upgrade_guide/","version":"2.1.8"},"/2.1.8/faq/":{"title":"Frequently Asked Questions","summary":"Frequently Asked Questions <small class=\"text-muted\">page</small>","path":"/2.1.8/faq/","version":"2.1.8"},"/2.1.7/":{"title":"Home","summary":"Home <small class=\"text-muted\">page</small>","path":"/2.1.7/","version":"2.1.7"},"/2.1.7/features/address_resolution/":{"title":"Address resolution","summary":"Address resolution <small class=\"text-muted\">page</small>","path":"/2.1.7/features/address_resolution/","version":"2.1.7"},"/2.1.7/features/compression/":{"title":"Compression","summary":"Compression <small class=\"text-muted\">page</small>","path":"/2.1.7/features/compression/","version":"2.1.7"},"/2.1.7/features/logging/":{"title":"Logging","summary":"Logging <small class=\"text-muted\">page</small>","path":"/2.1.7/features/logging/","version":"2.1.7"},"/2.1.7/features/metadata/":{"title":"Metadata","summary":"Metadata <small class=\"text-muted\">page</small>","path":"/2.1.7/features/metadata/","version":"2.1.7"},"/2.1.7/features/native_protocol/":{"title":"Native protocol","summary":"Native protocol <small class=\"text-muted\">page</small>","path":"/2.1.7/features/native_protocol/","version":"2.1.7"},"/2.1.7/features/object_mapper/creating/":{"title":"Definition of mapped classes","summary":"Definition of mapped classes <small class=\"text-muted\">page</small>","path":"/2.1.7/features/object_mapper/creating/","version":"2.1.7"},"/2.1.7/features/object_mapper/":{"title":"Object Mapper","summary":"Object Mapper <small class=\"text-muted\">page</small>","path":"/2.1.7/features/object_mapper/","version":"2.1.7"},"/2.1.7/features/object_mapper/using/":{"title":"Using the mapper","summary":"Using the mapper <small class=\"text-muted\">page</small>","path":"/2.1.7/features/object_mapper/using/","version":"2.1.7"},"/2.1.7/features/paging/":{"title":"Paging","summary":"Paging <small class=\"text-muted\">page</small>","path":"/2.1.7/features/paging/","version":"2.1.7"},"/2.1.7/features/pooling/":{"title":"Connection pooling","summary":"Connection pooling <small class=\"text-muted\">page</small>","path":"/2.1.7/features/pooling/","version":"2.1.7"},"/2.1.7/features/query_timestamps/":{"title":"Query timestamps","summary":"Query timestamps <small class=\"text-muted\">page</small>","path":"/2.1.7/features/query_timestamps/","version":"2.1.7"},"/2.1.7/features/":{"title":"Features","summary":"Features <small class=\"text-muted\">page</small>","path":"/2.1.7/features/","version":"2.1.7"},"/2.1.7/features/shaded_jar/":{"title":"Using the shaded JAR","summary":"Using the shaded JAR <small class=\"text-muted\">page</small>","path":"/2.1.7/features/shaded_jar/","version":"2.1.7"},"/2.1.7/features/speculative_execution/":{"title":"Speculative query execution","summary":"Speculative query execution <small class=\"text-muted\">page</small>","path":"/2.1.7/features/speculative_execution/","version":"2.1.7"},"/2.1.7/changelog/":{"title":"Changelog","summary":"Changelog <small class=\"text-muted\">page</small>","path":"/2.1.7/changelog/","version":"2.1.7"},"/2.1.7/upgrade_guide/":{"title":"Upgrade guide","summary":"Upgrade guide <small class=\"text-muted\">page</small>","path":"/2.1.7/upgrade_guide/","version":"2.1.7"},"/2.1.7/faq/":{"title":"Frequently Asked Questions","summary":"Frequently Asked Questions <small class=\"text-muted\">page</small>","path":"/2.1.7/faq/","version":"2.1.7"},"/2.0.12/":{"title":"Home","summary":"Home <small class=\"text-muted\">page</small>","path":"/2.0.12/","version":"2.0.12"},"/2.0.12/features/address_resolution/":{"title":"Address resolution","summary":"Address resolution <small class=\"text-muted\">page</small>","path":"/2.0.12/features/address_resolution/","version":"2.0.12"},"/2.0.12/features/async/":{"title":"Asynchronous programming","summary":"Asynchronous programming <small class=\"text-muted\">page</small>","path":"/2.0.12/features/async/","version":"2.0.12"},"/2.0.12/features/compression/":{"title":"Compression","summary":"Compression <small class=\"text-muted\">page</small>","path":"/2.0.12/features/compression/","version":"2.0.12"},"/2.0.12/features/logging/":{"title":"Logging","summary":"Logging <small class=\"text-muted\">page</small>","path":"/2.0.12/features/logging/","version":"2.0.12"},"/2.0.12/features/metadata/":{"title":"Metadata","summary":"Metadata <small class=\"text-muted\">page</small>","path":"/2.0.12/features/metadata/","version":"2.0.12"},"/2.0.12/features/native_protocol/":{"title":"Native protocol","summary":"Native protocol <small class=\"text-muted\">page</small>","path":"/2.0.12/features/native_protocol/","version":"2.0.12"},"/2.0.12/features/paging/":{"title":"Paging","summary":"Paging <small class=\"text-muted\">page</small>","path":"/2.0.12/features/paging/","version":"2.0.12"},"/2.0.12/features/pooling/":{"title":"Connection pooling","summary":"Connection pooling <small class=\"text-muted\">page</small>","path":"/2.0.12/features/pooling/","version":"2.0.12"},"/2.0.12/features/":{"title":"Features","summary":"Features <small class=\"text-muted\">page</small>","path":"/2.0.12/features/","version":"2.0.12"},"/2.0.12/features/shaded_jar/":{"title":"Using the shaded JAR","summary":"Using the shaded JAR <small class=\"text-muted\">page</small>","path":"/2.0.12/features/shaded_jar/","version":"2.0.12"},"/2.0.12/features/speculative_execution/":{"title":"Speculative query execution","summary":"Speculative query execution <small class=\"text-muted\">page</small>","path":"/2.0.12/features/speculative_execution/","version":"2.0.12"},"/2.0.12/features/ssl/":{"title":"SSL","summary":"SSL <small class=\"text-muted\">page</small>","path":"/2.0.12/features/ssl/","version":"2.0.12"},"/2.0.12/features/statements/prepared/":{"title":"Prepared statements","summary":"Prepared statements <small class=\"text-muted\">page</small>","path":"/2.0.12/features/statements/prepared/","version":"2.0.12"},"/2.0.12/features/statements/":{"title":"Statements","summary":"Statements <small class=\"text-muted\">page</small>","path":"/2.0.12/features/statements/","version":"2.0.12"},"/2.0.12/changelog/":{"title":"Changelog","summary":"Changelog <small class=\"text-muted\">page</small>","path":"/2.0.12/changelog/","version":"2.0.12"},"/2.0.12/upgrade_guide/":{"title":"Upgrade guide","summary":"Upgrade guide <small class=\"text-muted\">page</small>","path":"/2.0.12/upgrade_guide/","version":"2.0.12"},"/2.0.12/faq/":{"title":"Frequently Asked Questions","summary":"Frequently Asked Questions <small class=\"text-muted\">page</small>","path":"/2.0.12/faq/","version":"2.0.12"},"/2.0.11/":{"title":"Home","summary":"Home <small class=\"text-muted\">page</small>","path":"/2.0.11/","version":"2.0.11"},"/2.0.11/features/address_resolution/":{"title":"Address resolution","summary":"Address resolution <small class=\"text-muted\">page</small>","path":"/2.0.11/features/address_resolution/","version":"2.0.11"},"/2.0.11/features/async/":{"title":"Asynchronous programming","summary":"Asynchronous programming <small class=\"text-muted\">page</small>","path":"/2.0.11/features/async/","version":"2.0.11"},"/2.0.11/features/compression/":{"title":"Compression","summary":"Compression <small class=\"text-muted\">page</small>","path":"/2.0.11/features/compression/","version":"2.0.11"},"/2.0.11/features/logging/":{"title":"Logging","summary":"Logging <small class=\"text-muted\">page</small>","path":"/2.0.11/features/logging/","version":"2.0.11"},"/2.0.11/features/metadata/":{"title":"Metadata","summary":"Metadata <small class=\"text-muted\">page</small>","path":"/2.0.11/features/metadata/","version":"2.0.11"},"/2.0.11/features/native_protocol/":{"title":"Native protocol","summary":"Native protocol <small class=\"text-muted\">page</small>","path":"/2.0.11/features/native_protocol/","version":"2.0.11"},"/2.0.11/features/paging/":{"title":"Paging","summary":"Paging <small class=\"text-muted\">page</small>","path":"/2.0.11/features/paging/","version":"2.0.11"},"/2.0.11/features/pooling/":{"title":"Connection pooling","summary":"Connection pooling <small class=\"text-muted\">page</small>","path":"/2.0.11/features/pooling/","version":"2.0.11"},"/2.0.11/features/":{"title":"Features","summary":"Features <small class=\"text-muted\">page</small>","path":"/2.0.11/features/","version":"2.0.11"},"/2.0.11/features/shaded_jar/":{"title":"Using the shaded JAR","summary":"Using the shaded JAR <small class=\"text-muted\">page</small>","path":"/2.0.11/features/shaded_jar/","version":"2.0.11"},"/2.0.11/features/speculative_execution/":{"title":"Speculative query execution","summary":"Speculative query execution <small class=\"text-muted\">page</small>","path":"/2.0.11/features/speculative_execution/","version":"2.0.11"},"/2.0.11/features/statements/prepared/":{"title":"Prepared statements","summary":"Prepared statements <small class=\"text-muted\">page</small>","path":"/2.0.11/features/statements/prepared/","version":"2.0.11"},"/2.0.11/features/statements/":{"title":"Statements","summary":"Statements <small class=\"text-muted\">page</small>","path":"/2.0.11/features/statements/","version":"2.0.11"},"/2.0.11/changelog/":{"title":"Changelog","summary":"Changelog <small class=\"text-muted\">page</small>","path":"/2.0.11/changelog/","version":"2.0.11"},"/2.0.11/upgrade_guide/":{"title":"Upgrade guide","summary":"Upgrade guide <small class=\"text-muted\">page</small>","path":"/2.0.11/upgrade_guide/","version":"2.0.11"},"/2.0.11/faq/":{"title":"Frequently Asked Questions","summary":"Frequently Asked Questions <small class=\"text-muted\">page</small>","path":"/2.0.11/faq/","version":"2.0.11"},"/2.0.10.1/":{"title":"Home","summary":"Home <small class=\"text-muted\">page</small>","path":"/2.0.10.1/","version":"2.0.10.1"},"/2.0.10.1/features/address_resolution/":{"title":"Address resolution","summary":"Address resolution <small class=\"text-muted\">page</small>","path":"/2.0.10.1/features/address_resolution/","version":"2.0.10.1"},"/2.0.10.1/features/logging/":{"title":"Logging","summary":"Logging <small class=\"text-muted\">page</small>","path":"/2.0.10.1/features/logging/","version":"2.0.10.1"},"/2.0.10.1/features/metadata/":{"title":"Metadata","summary":"Metadata <small class=\"text-muted\">page</small>","path":"/2.0.10.1/features/metadata/","version":"2.0.10.1"},"/2.0.10.1/features/native_protocol/":{"title":"Native protocol","summary":"Native protocol <small class=\"text-muted\">page</small>","path":"/2.0.10.1/features/native_protocol/","version":"2.0.10.1"},"/2.0.10.1/features/paging/":{"title":"Paging","summary":"Paging <small class=\"text-muted\">page</small>","path":"/2.0.10.1/features/paging/","version":"2.0.10.1"},"/2.0.10.1/features/pooling/":{"title":"Connection pooling","summary":"Connection pooling <small class=\"text-muted\">page</small>","path":"/2.0.10.1/features/pooling/","version":"2.0.10.1"},"/2.0.10.1/features/":{"title":"Features","summary":"Features <small class=\"text-muted\">page</small>","path":"/2.0.10.1/features/","version":"2.0.10.1"},"/2.0.10.1/features/shaded_jar/":{"title":"Using the shaded JAR","summary":"Using the shaded JAR <small class=\"text-muted\">page</small>","path":"/2.0.10.1/features/shaded_jar/","version":"2.0.10.1"},"/2.0.10.1/features/speculative_execution/":{"title":"Speculative query execution","summary":"Speculative query execution <small class=\"text-muted\">page</small>","path":"/2.0.10.1/features/speculative_execution/","version":"2.0.10.1"}})
  app.factory('basePath', basePath)
  app.provider('search', function() {
    function localSearchFactory($http, $timeout, $q, $rootScope, basePath) {
      $rootScope.searchReady = false;

      var fetch = $http.get(basePath + '/json/search-index.json')
                       .then(function(response) {
                         var index = lunr.Index.load(response.data)
                         $rootScope.searchReady = true;
                         return index;
                       });

      // The actual service is a function that takes a query string and
      // returns a promise to the search results
      // (In this case we just resolve the promise immediately as it is not
      // inherently an async process)
      return function(q) {
        return fetch.then(function(index) {
          var results = []
          index.search(q).forEach(function(hit) {
            results.push(hit.ref);
          });
          return results;
        })
      };
    };
    localSearchFactory.$inject = ['$http', '$timeout', '$q', '$rootScope', 'basePath'];

    function webWorkerSearchFactory($q, $rootScope, basePath) {
      $rootScope.searchReady = false;

      var searchIndex = $q.defer();
      var results;
      var worker = new Worker(basePath + '/js/search-worker.js');

      // The worker will send us a message in two situations:
      // - when the index has been built, ready to run a query
      // - when it has completed a search query and the results are available
      worker.onmessage = function(e) {
        switch(e.data.e) {
          case 'ready':
            worker.postMessage({ e: 'load', p: basePath });
            break
          case 'index-ready':
            $rootScope.$apply(function() {
              $rootScope.searchReady = true;
            })
            searchIndex.resolve();
            break;
          case 'query-ready':
            results.resolve(e.data.d);
            break;
        }
      };

      // The actual service is a function that takes a query string and
      // returns a promise to the search results
      return function(q) {

        // We only run the query once the index is ready
        return searchIndex.promise.then(function() {

          results = $q.defer();
          worker.postMessage({ e: 'search', q: q });
          return results.promise;
        });
      };
    };
    webWorkerSearchFactory.$inject = ['$q', '$rootScope', 'basePath'];

    return {
      $get: window.Worker ? webWorkerSearchFactory : localSearchFactory
    };
  })

  app.controller('search', [
    '$scope',
    '$sce',
    '$timeout',
    'search',
    'pages',
    'basePath',
    function($scope, $sce, $timeout, search, pages, basePath) {
      $scope.hasResults = false;
      $scope.results = null;
      $scope.current = null;

      function clear() {
        $scope.hasResults = false;
        $scope.results = null;
        $scope.current = null;
      }

      $scope.search = function(version) {
        if ($scope.q.length >= 2) {
          search($scope.q).then(function(ids) {
            var results = []

            ids.forEach(function(id) {
              var page = pages[id];

              if (page.version == version) {
                results.push(page)
              }
            })

            if (results.length > 0) {
              $scope.hasResults = true;
              $scope.results = results;
              $scope.current = 0;
            } else {
              clear()
            }
          })
        } else {
          clear()
        }
      };

      $scope.basePath = basePath;

      $scope.reset = function() {
        $scope.q = null;
        clear()
      }

      $scope.submit = function() {
        var result = $scope.results[$scope.current]

        if (result) {
          $timeout(function() {
            window.location.href = basePath + result.path;
          })
        }
      }

      $scope.summary = function(item) {
        return $sce.trustAsHtml(item.summary);
      }

      $scope.moveDown = function(e) {
        if ($scope.hasResults && $scope.current < ($scope.results.length - 1)) {
          $scope.current++
          e.stopPropagation()
        }
      }

      $scope.moveUp = function(e) {
        if ($scope.hasResults && $scope.current > 0) {
          $scope.current--
          e.stopPropagation()
        }
      }
    }
  ])

  app.directive('search', [
    '$document',
    'hotkeys',
    function($document, hotkeys) {
      return function(scope, element, attrs) {
        hotkeys.add({
          combo: '/',
          description: 'Search docs...',
          callback: function(event, hotkey) {
            event.preventDefault()
            event.stopPropagation()
            element[0].focus()
          }
        })
      }
    }
  ])

  $(function() {
    $('#content').height(
      Math.max(
        $(".side-nav").height(),
        $('#content').height()
      )
    );

    $('#table-of-contents').on('activate.bs.scrollspy', function() {
      var active = $('#table-of-contents li.active').last().children('a');
      var button = $('#current-section');
      var text   = active.text().trim();

      if (active.length == 0 || text == 'Page Top') {
        button.html('Jump to... <span class="caret"></span><span class="sr-only">Table of Contents</span>')
      } else {
        if (text.length > 30) {
          text = text.slice(0, 30) + '...'
        }
        button.html('Viewing: ' + text + ' <span class="caret"></span><span class="sr-only">Table of Contents</span>')
      }
    })

    // Config ZeroClipboard
    ZeroClipboard.config({
      swfPath: basePath() + '/flash/ZeroClipboard.swf',
      hoverClass: 'btn-clipboard-hover',
      activeClass: 'btn-clipboard-active'
    })

    // Insert copy to clipboard button before .highlight
    $('.highlight').each(function () {
      var btnHtml = '<div class="zero-clipboard"><span class="btn-clipboard">Copy</span></div>'
      $(this).before(btnHtml)
    })

    var zeroClipboard = new ZeroClipboard($('.btn-clipboard'))

    // Handlers for ZeroClipboard

    // Copy to clipboard
    zeroClipboard.on('copy', function (event) {
      var clipboard = event.clipboardData;
      var highlight = $(event.target).parent().nextAll('.highlight').first()
      clipboard.setData('text/plain', highlight.text())
    })

    // Notify copy success and reset tooltip title
    zeroClipboard.on('aftercopy', function (event) {
      $(event.target)
        .attr('title', 'Copied!')
        .tooltip('fixTitle')
        .tooltip('show')
    })

    // Notify copy failure
    zeroClipboard.on('error', function (event) {
      $(event.target)
        .attr('title', 'Flash required')
        .tooltip('fixTitle')
        .tooltip('show')
    })
  })
})(window)
