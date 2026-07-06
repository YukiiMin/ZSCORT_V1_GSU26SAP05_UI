/**
 * SCORT V1 - Object Finder Controller Extensions
 * Fiori Elements List Report (OData V4)
 */
sap.ui.define([
  "sap/m/MessageToast",
  "sap/ui/comp/smartform/ValidationException"
], function (MessageToast, ValidationException) {
  "use strict";

  return {
    /**
     * Called when user triggers the Object F4 help dialog.
     */
    onOpenObjectF4: function (oEvent) {
      var oView = this.getView();
      if (!this._oObjectF4Dialog) {
        this._oObjectF4Dialog = sap.ui.xmlfragment(
          "zscort.v1.objectfinder.view.fragment.ObjectF4",
          this
        );
        oView.addDependent(this._oObjectF4Dialog);
      }
      this._oObjectF4Dialog.open();
    },

    /**
     * Closes the Object F4 dialog.
     */
    onCloseObjectF4: function () {
      if (this._oObjectF4Dialog) {
        this._oObjectF4Dialog.close();
      }
    },

    /**
     * Handler for successful change owner action.
     */
    onChangeOwnerSuccess: function (oData, oResponse) {
      MessageToast.show("Owner changed successfully.");
      this.getView().getModel().refresh();
    },

    /**
     * Handler for change owner action error.
     */
    onChangeOwnerError: function (oError) {
      MessageToast.show("Error changing owner: " + oError.message);
    }
  };
});
