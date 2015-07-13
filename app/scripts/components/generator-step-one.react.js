import React from 'react'
import GeneratorPriorityTable from './generator-priority-table.react'

export default class StepOne extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className = 'generator__step-one'>
        <h2>Step One</h2>
        <GeneratorPriorityTable />
      </div>
    )
  }
}
