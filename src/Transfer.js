const fieldSplitters = require('./fieldSplitters');
const { specs } = require('./plaspecs.json');

module.exports = class Transfer {
  /**
   * Sets up fields
   * @param  {String} rawTransfer Text extracted from pla file.
   * @return {undefined}          Nothing.
   */
  constructor(rawTransfer) {
    this.transferLines = rawTransfer.split(/\r\n|\n/);
    this.props = {};
    this.transferLines.forEach(this.extractField, this);
  }

  /**
   * Builds a field of the Transfer from the raw transfer lines.
   * @param  {String} transferLine   Single line that might be a start of a field.
   * @param  {Number} fieldLineIndex Index of the first line of the field in transferLines.
   * @return {undefined}             nothing.
   */
  extractField(transferLine, fieldLineIndex) {
    const [, plaCode, fieldValue] = transferLine.split(/:/);
    const plaField = specs[plaCode];

    if (!plaField) {
      return;
    }

    const { fieldName, fieldLength } = plaField;
    const fieldString = this.getFieldString(fieldLineIndex, fieldValue, fieldLength);

    this.setField(fieldName, fieldString);
  }

  /**
   * Extracts full field information. If the field is multiline, all lines are extracted.
   * @param  {Number} fieldLineIndex Index of the first line of the field in transferLines.
   * @param  {String} fieldValue     Value extracted from the first line of the field.
   * @param  {Number} fieldLineCount Amount of lines that field occupies.
   * @return {String}                String containing all lines of the field separated by ":".
   */
  getFieldString(fieldLineIndex, fieldValue, fieldLineCount) {
    const fieldLines = [fieldValue];

    for (let index = 1; index < fieldLineCount; index++) {
      fieldLines.push(this.transferLines[fieldLineIndex + index]);
    }

    return fieldLines.join(':');
  }

  /**
   * Sets transfer property.
   * @param {String}      fieldName    Field name to be set.
   * @param {String}      fieldString  Raw field string extracted from rawTransfer.
   * @return {undefined}               Nothing.
   */
  setField(fieldName, fieldString) {
    const splitterFunction = fieldSplitters[fieldName];

    this.props[fieldName] = splitterFunction ? splitterFunction(fieldString) : fieldString;
  }

  /**
   * Creates a plain object representation of a field.
   * @return {Object} Transfer properties.
   */
  toJSON() {
    return Object.assign({}, this.props);
  }
};
