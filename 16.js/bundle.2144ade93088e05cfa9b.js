webpackJsonp([16],{1169:function(e,t,o){var n=o(0),a=o(8),i=o(9).PageRenderer;i.__esModule&&(i=i.default);var r=a({displayName:"WrappedPageRenderer",getInitialState:function(){return{content:o(1202)}},componentWillMount:function(){},render:function(){return n.createElement(i,Object.assign({},this.props,{content:this.state.content}))}});r.__catalog_loader__=!0,e.exports=r},1202:function(e,t){e.exports="A Reactabular table relies on three concepts - rows, column definition (JavaScript structure), and React definition:\n\n* **Rows** are expected to be an array of objects.\n* **The column definition** maps the rows into something that can be shown through the user interface. It defines how to extract the rows from it and what sort of special formatting or functionality needs to be attached to it.\n* **React definition** uses both of these and maps the rows through the column definition to the user interface. You have additional control over here as you can attach for example classes or table row specific hooks if you have to.\n\nMost of the power of Reactabular is within the column definition. You can embed React code within it to customize the table further. And if that's not enough, you have decent control over the table layout when rendering.\n"}});