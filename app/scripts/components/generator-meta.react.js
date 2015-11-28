import React from 'react';

// import * as language from '../constants/language';

// let localLanguage = language.getLanguage();

export class GeneratorMeta extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { metaTypes } = this.props,
      metaText = metaTypes.filter(item => item.selected === true)
        .map(item => item.metaTypes.map(metaType => {
          return <option>
              {metaType.metaType.toLocaleString()}
            </option>;
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

GeneratorMeta.propTypes = {
  metaTypes: React.PropTypes.array
};

export default GeneratorMeta;
