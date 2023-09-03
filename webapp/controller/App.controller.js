sap.ui.define([
    "sap/ui/core/mvc/Controller"
  ], function(Controller) {
    "use strict";
  
    return Controller.extend("ui5.calculator.controller.App", {
      onSumPress: function() {
        var input1 = parseInt(this.getView().byId("input1").getValue());
        var input2 = parseInt(this.getView().byId("input2").getValue());
        var result = input1 + input2;
        this.getView().byId("resultText").setText("Result: " + result);
      },
  
      onSubtractPress: function() {
        var input1 = parseInt(this.getView().byId("input1").getValue());
        var input2 = parseInt(this.getView().byId("input2").getValue());
        var result = input1 - input2;
        this.getView().byId("resultText").setText("Result: " + result);
      },
  
      onMultiplyPress: function() {
        var input1 = parseInt(this.getView().byId("input1").getValue());
        var input2 = parseInt(this.getView().byId("input2").getValue());
        var result = input1 * input2;
        this.getView().byId("resultText").setText("Result: " + result);
      },
  
      onDividePress: function() {
        var input1 = parseInt(this.getView().byId("input1").getValue());
        var input2 = parseInt(this.getView().byId("input2").getValue());
        var result = input1 / input2;
        this.getView().byId("resultText").setText("Result: " + result);
      }
    });
  });