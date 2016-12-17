const getFields = info => {
  const fieldNodes = info.fieldNodes[0];

  return getSelections(fieldNodes.selectionSet.selections);
};

const getSelections = selection => {
  if (selection.length === 1 && selection[0].selectionSet) {
    return getSelections(selection[0].selectionSet.selections);
  }

  return selection.map(selection => selection.name.value);
};

module.exports = getFields;
