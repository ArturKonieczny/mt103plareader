/**
 * Extracts full field information. If the field is multiline, all lines are extracted.
 * @param  {Number} fieldLineIndex Index of the first line of the field in transferLines.
 * @param  {String} fieldValue     Value extracted from the first line of the field.
 * @param  {Number} fieldLineCount Ammount of lines that field occupies.
 * @param  {Array} transferLines   Array containing all transfer lines.
 * @return {String}                String containing all lines of the field separated by ":".
 */
module.exports = function getFieldString(fieldLineIndex, fieldValue, fieldLineCount, transferLines) {
  const fieldLines = [fieldValue];

  for (let index = 1; index < fieldLineCount; index++) {
    fieldLines.push(transferLines[fieldLineIndex + index]);
  }

  return fieldLines.join(':');
};
