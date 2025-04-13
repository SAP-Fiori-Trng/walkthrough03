sap.ui.define([
    "sap/ui/core/mvc/XMLView"
], function (XMLView) {
  "use strict";
  XMLView.create({
    viewName: "dw.ui5.walkthrough.view.App"
  }).then(function (oView) {
    oView.placeAt("container");
  });
});