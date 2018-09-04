webpackJsonp([21],{1184:function(e,n,t){var a=t(0),r=t(8),o=t(9).PageRenderer;o.__esModule&&(o=o.default);var i=r({displayName:"WrappedPageRenderer",getInitialState:function(){return{content:t(1217)}},componentWillMount:function(){},render:function(){return a.createElement(o,Object.assign({},this.props,{content:this.state.content}))}});i.__catalog_loader__=!0,e.exports=i},1217:function(e,n){e.exports="Reactabular doesn't come with inline editing. Instead you can use a package, such as [react-edit](https://www.npmjs.com/package/react-edit), to implement it.\n\n**Example:**\n\n```jsx\n/*\nimport React from 'react';\nimport { cloneDeep, findIndex } from 'lodash';\nimport * as Table from 'reactabular-table';\nimport * as edit from 'react-edit';\n*/\n\nclass EditableTable extends React.Component {\n  constructor(props) {\n    super(props);\n\n    const editable = edit.edit({\n      // Determine whether the current cell is being edited or not.\n      isEditing: ({ columnIndex, rowData }) => columnIndex === rowData.editing,\n\n      // The user requested activation, mark the current cell as edited.\n      // IMPORTANT! If you stash the rows at this.state.rows, DON'T\n      // mutate it as that will break Table.Body optimization check.\n      onActivate: ({ columnIndex, rowData }) => {\n        const index = findIndex(this.state.rows, { id: rowData.id });\n        const rows = cloneDeep(this.state.rows);\n\n        rows[index].editing = columnIndex;\n\n        this.setState({ rows });\n      },\n\n      // Capture the value when the user has finished and update\n      // application state.\n      onValue: ({ value, rowData, property }) => {\n        const index = findIndex(this.state.rows, { id: rowData.id });\n        const rows = cloneDeep(this.state.rows);\n\n        rows[index][property] = value;\n        rows[index].editing = false;\n\n        // Optional: capture the fact that a field was edited for visualization\n        rows[index].edited = true;\n\n        this.setState({ rows });\n      }\n    });\n\n    this.state = {\n      editedCell: null, // Track the edited cell somehow\n      columns: [\n        {\n          property: 'name',\n          header: {\n            label: 'Name'\n          },\n          cell: {\n            transforms: [\n              (value, extra) => editable(edit.input())(value, extra, {\n                className: extra.rowData.edited && 'edited'\n              })\n            ]\n          }\n        }\n      ],\n      rows: [\n        {\n          id: 100,\n          name: 'Adam'\n        },\n        {\n          id: 101,\n          name: 'Brian'\n        }\n      ]\n    };\n  }\n  render() {\n    const { columns, rows } = this.state;\n\n    return (\n      <Table.Provider columns={columns}>\n        <Table.Header />\n\n        <Table.Body rows={rows} rowKey=\"id\" />\n      </Table.Provider>\n    );\n  }\n}\n\n<EditableTable />\n```\n\n## See Also\n\n* [Excel](http://reactabular.js.org/#/examples/excel)\n"}});