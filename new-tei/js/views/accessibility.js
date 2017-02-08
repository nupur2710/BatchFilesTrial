define([

    //update paths
    "source/tei/authoring/engine-templates/base-classes/js/views/accessibility-base",
    "source/tei/authoring/engine-templates/common/score-and-feedback/js/models/score-and-feedback",
    "source/tei/authoring/engine-templates/new-tei/js/models/new-tei"
], function(AccessibiltyBase, ScoreFeedbackModel, NewTeiModel) {
    var Accessibility = AccessibiltyBase.extend({

        "renderAccessibility": function(options) {
            options = options || {};
            AccessibiltyBase.prototype.renderAccessibility.apply(this, argumentsArray);
        }

    });
    return Accessibility;
});
