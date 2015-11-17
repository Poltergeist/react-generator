import React from 'react';

// import * as language from '../constants/language';

// let localLanguage = language.getLanguage();

export class GeneratorFunds extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { funds } = this.props,
      fundsText = funds.filter(item => item.selected === true)
        .map(item => item.value.toLocaleString() + ' ¥');
    return <div>
      {fundsText}
      </div>;
  }
}

GeneratorFunds.propTypes = {
  funds: React.PropTypes.array
};

export default GeneratorFunds;
