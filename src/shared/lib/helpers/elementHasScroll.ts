/**
 * Checks if an HTMLTextAreaElement has a scrollbar.
 *
 * @param {HTMLTextAreaElement} textArea - The textarea element to check.
 * @returns {boolean} - Returns true if the textarea has a scrollbar, otherwise false.
 */
function elementHasScrollbar(textArea: HTMLTextAreaElement) {
  return textArea.clientHeight < textArea.scrollHeight;
}

export default elementHasScrollbar;
