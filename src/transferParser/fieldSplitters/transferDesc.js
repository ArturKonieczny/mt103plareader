/**
 * Parses the PLA transfer description field.
 * @param  {String} field String containing all lines of the field separated by ":"
 * @return {Object}       Object containing transfer description.
 */
module.exports = function transferDesc(field) {
  const [transferDesc1, transferDesc2, transferDesc3, transferDesc4] = field.split(':');

  return {
    transferDesc1,
    transferDesc2,
    transferDesc3,
    transferDesc4
  };
};
