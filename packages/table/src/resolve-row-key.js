function resolveRowKey({ rowData, rowIndex, rowKey }) {
  if (typeof rowKey === 'function') {
    return `${rowKey({ rowData, rowIndex })}`;
  } else if (process.env.NODE_ENV !== 'production') {
    // Arrays cannot have rowKeys by definition so we have to go by index there.
    if (!Array.isArray(rowData) && rowData[rowKey] === undefined) {
      console.warn( // eslint-disable-line no-console
        'Table.Body - Missing valid rowKey!',
        rowData,
        rowKey
      );
    }
  }

  if (rowData[rowKey] === 0) {
    return `${rowData[rowKey]}`;
  }

  return `${rowData[rowKey] || rowIndex}`;
}

export default resolveRowKey;
