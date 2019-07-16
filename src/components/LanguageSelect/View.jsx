import React from 'react';
import T from 'prop-types';

import Select from './Select';

const translation = {
  en: 'English',
  vi: 'Tiếng Việt',
};

const LanguageSelectView = ({ value, onChange, supportedLanguages, allLanguages }) => (
  <Select
    value={value} onChange={onChange}
    supportedLanguages={supportedLanguages}
    options={allLanguages.map(item => ({
      label: translation[item],
      value: item,
    }))}
  />
);

LanguageSelectView.propTypes = {
  value: T.string.isRequired,
  onChange: T.func.isRequired,
  supportedLanguages: T.arrayOf(T.string).isRequired,
  allLanguages: T.arrayOf(T.string).isRequired,
};

export default LanguageSelectView;