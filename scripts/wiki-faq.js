// ========================================================================
// Globals
// ========================================================================

var faqInstances = document.getElementsByClassName("faq-instance");

// ========================================================================
// Event Listeners
// ========================================================================

for (var i = 0; i < faqInstances.length; ++i) {
    // Hide faq answers
    var faqAnswer = faqInstances[i].getElementsByClassName("faq-answer")[0];
    faqAnswer.style.display = "none";

    var faqQuestion = faqInstances[i].getElementsByClassName("faq-question")[0];   
    faqQuestion.addEventListener("click", function(event) {
        toggleVisibility(event.currentTarget.parentElement);
    }, false);
}

function toggleVisibility(instance) {
    var answer = instance.getElementsByClassName("faq-answer")[0];
    var answerStyle = answer.style.display == "none" ? "block" : "none";
    answer.style.display = answerStyle;

    var question = instance.getElementsByClassName("faq-question")[0];
    var questionColor = answer.style.display == "none" ? "white" : "#99ffff";
    Object.assign(question.style, { color: questionColor });
}