import React from 'react'

export default class GeneratorPriorityTable extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <table className="generator__priorities-table">
        <thead className="generator__priorities-header">
          <td>Categories</td>
          <td>A</td>
          <td>B</td>
          <td>C</td>
          <td>D</td>
          <td>E</td>
        </thead>
        <tr>
        </tr>
      </table>
    );
  }
}
