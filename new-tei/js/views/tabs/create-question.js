define([
    "source/tei/authoring/engine-templates/base-classes/js/views/tabs/question-tab-base",
    'source/tei/authoring/engine-templates/common/options-panel/js/models/options-panel'
], function(QuestionTabBase, OptionsModel) {
    "use strict";
    var NewTeiQuestionTab = QuestionTabBase.extend({

        "initialize": function(options) {
            QuestionTabBase.prototype.initialize.apply(this, arguments);
        },
        "render": function() {
            QuestionTabBase.prototype.render.apply(this, arguments);
        }
    });
    return NewTeiQuestionTab;
});
