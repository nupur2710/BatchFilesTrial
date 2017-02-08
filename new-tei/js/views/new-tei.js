define([
    "source/tei/authoring/engine-templates/base-classes/js/views/authoring-base",
    "source/tei/authoring/engine-templates/new-tei/js/views/tabs/create-question",
    "source/tei/authoring/engine-templates/new-tei/js/views/tabs/score-feedback",
    "source/tei/authoring/engine-templates/new-tei/js/views/accessibility"
], function(BaseView, QuestionView, FeedbackView, AccessibilityView) {
    "use strict";
    var NewTeiView = BaseView.extend({
        "initialize": function(options) {
            var tabViews = [],
                tabType = GridPointsView.TAB_TYPE,
                tabView = {
                    "screen_type": tabType.QUESTION_TAB,
                    "screen_class": QuestionView
                };
            tabViews.push(tabView);
            tabView = {};
            tabView.screen_type = tabType.FEEDBACK_TAB;
            tabView.screen_class = FeedbackView;
            tabViews.push(tabView);
            options.tabViews = tabViews;
            options.accessibilityClass = AccessibilityView;
            BaseView.prototype.initialize.apply(this, arguments);
            this.render();
            this.$el.addClass("tei-new-tei");

        }
    }, {
        "TAB_TYPE": {
            "QUESTION_TAB": "question-tab",
            "FEEDBACK_TAB": "feedback-tab"
        }
    });
    return NewTeiView;
});
