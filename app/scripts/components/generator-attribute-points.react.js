import React from 'react';

// import * as language from '../constants/language';

// let localLanguage = language.getLanguage();

export class GeneratorAttributePoints extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { attributePoints } = this.props,
      attributePointsText = attributePoints.filter(
        item => item.selected === true)
        .map(item => item.value.toLocaleString());
    return <div>
      {attributePointsText}
      </div>;
  }
}

GeneratorAttributePoints.propTypes = {
  attributePoints: React.PropTypes.array
};

export default GeneratorAttributePoints;
