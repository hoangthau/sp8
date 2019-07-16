import React from 'react';
import T from 'prop-types';

import { languages, language } from 'translate';
import { withRouteData } from 'react-static';

import View from './View';

class LanguageSelect extends React.Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }

  onChange(nextLang) {
    const { language: currentLang } = this.props;
    const lang = currentLang || language;
    const pathname = window.location.pathname;

    if (lang === nextLang) { return; }

    const currentPath = lang === 'en'
      ? `/en${pathname}`
      : pathname;
    let nextPath = currentPath.replace(`/${lang}`, `/${nextLang}`);
    if (nextLang === 'en') {
      nextPath = nextPath.replace('/en', '');
    }

    /* eslint-disable */
    // window.location
    location.href = nextPath;
    /* eslint-enable */
  }

  render() {
    const supportedLanguages = this.props.supportedLanguages || languages;

    return (
      <View
        value={this.props.language || language}
        onChange={this.onChange}
        supportedLanguages={supportedLanguages}
        allLanguages={languages}
      />
    );
  }
}

LanguageSelect.propTypes = {
  language: T.string,
  location: T.shape({}),
  supportedLanguages: T.arrayOf(T.string),
};

export default withRouteData(LanguageSelect);