define([
    //update base path
    "source/tei/authoring/engine-templates/base-classes/js/models/authoring-base"
], function(BaseModel) {
    "use strict";
    /**
     * Main model for  this TEI
     * @class  NewTeiModel
     * @extends BaseModel
     */
    var NewTeiModel = BaseModel.extend({
        /**
         * Set default values to properties
         * @method defaults
         * @return {Object}
         */
        "defaults": function() {
            var defaults = {
                "instructionText": ""
            };
            return $.extend(false, BaseModel.prototype.defaults, defaults); // extending events.

        },
        /**
         * @method initialize
         * @param {Object} [options]
         */
        "initialize": function(options) {
            BaseModel.prototype.initialize.apply(this, arguments);
        },

        /**
         * @method _parseTemplateData
         */
        "_parseTemplateData": function(authoringData) {

        },


        /**
         * @method getItemData
         */
        "getItemData": function() {
            var compiledJson = {};
            compiledJson.type = "new-tei";

            return compiledJson;
        },
    });
    return NewTeiModel;
});
