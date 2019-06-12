let bounces, time;

/**
 * Inserts styles into style sheet.
 * @param ruleText: CSS rule to be inserted.
 * @param index: Index of the rule.
 */
function insertStyleSheetRule(ruleText, index) {
    const sheets = document.styleSheets;
    sheets[sheets.length - 1].insertRule(ruleText, index);
}

module.exports = {
    /**
     * Sets options, creates style sheet to be used for animations.
     * @param options Object containing configuration.
     */
    init: (options) => {
        bounces = options.noOfBounces || 2;
        time = options.time || 1;

        // Creating the style sheet.
        let styleTag = document.createElement('style');
        styleTag.type = 'text/css';
        document.getElementsByTagName("head")[0].appendChild(styleTag);
    },

    /**
     * Creates animations and add styles to jounce elements. Starts animaiotn.
     */
    animate: () => {
        // Initializing variables
        let container = document.getElementById('jounceContainer');
        let mainDiv = document.getElementById('jounceMainDiv');
        let right = container.offsetWidth - mainDiv.offsetWidth;
        let bottom = container.offsetHeight - mainDiv.offsetHeight;
        let top = container.offsetHeight;
        let verticalTransforms = [];
        let step = 0;

        // Inserting keyframe for horizontal transformation.
        insertStyleSheetRule(
            `@keyframes move-right { 0% { transform: translateX(0px); } 100% { transform: translateX(${right}px); } }`,
            0
        );

        verticalTransforms.push("0% { transform: translateY(0px); }");
        for (i = 1; i <= 2 * bounces; i++) {
            step += (100 / (2 * bounces + 1));
            i % 2 == 0 ?
                verticalTransforms.push(`${step}% { transform: translateY(${bottom - top}px); }`) :
                verticalTransforms.push(`${step}% { transform: translateY(${bottom}px); }`);

            top = (top / 2);
        }

        verticalTransforms.push(`100% { transform: translateY(${bottom}px); }`);
        insertStyleSheetRule(`@keyframes move-top {${verticalTransforms.join(" ")}}`, 1);

        // Applying animations to elements.
        insertStyleSheetRule(`#jounceMainDiv {position: absolute;animation-name: move-right; animation-duration: ${time}s;}`, 2);
        insertStyleSheetRule(`#jounceSubDiv {position: absolute;animation-name: move-top; animation-duration: ${time}s;`, 3);
    }
}