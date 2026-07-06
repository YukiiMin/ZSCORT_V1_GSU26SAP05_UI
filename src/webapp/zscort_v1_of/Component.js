/**
 * SCORT V1 - Object Finder Component
 * Fiori Elements List Report (OData V4)
 */
sap.ui.define(["sap/ui/core/Component"], function (Component) {
  "use strict";

  return Component.extend("zscort.v1.objectfinder.Component", {
    metadata: {
      manifest: "json",
      properties: {
        startupParameters: {
          type: "object",
          defaultValue: {}
        }
      }
    },

    init: function () {
      Component.prototype.init.apply(this, arguments);
    },

    exit: function () {
      Component.prototype.exit.apply(this, arguments);
    }
  });
});
