module.exports = function transferDesc(field) {
  const [transferDesc1, transferDesc2, transferDesc3, transferDesc4] = field.split(':');

  return {
    transferDesc1,
    transferDesc2,
    transferDesc3,
    transferDesc4
  };
};
