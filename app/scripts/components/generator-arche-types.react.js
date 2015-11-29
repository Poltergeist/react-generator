import React from 'react';

// import * as language from '../constants/language';

// let localLanguage = language.getLanguage();

export class GeneratorArcheTypes extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { magicOrResonance } = this.props,
      metaText = magicOrResonance.filter(item => item.selected === true)
        .map(item => item.archeTypes.map(archeType => {
          return archeType.archeType.split(' or ').map(node =>
            <option value={archeType.type}>
              {node}
            </option>);
        }
      ));
    if (metaText.length === 0) {
      return false;
    }
    return <select>
      {metaText}
      </select>;
  }
}

GeneratorArcheTypes.propTypes = {
  magicOrResonance: React.PropTypes.array
};

export default GeneratorArcheTypes;
