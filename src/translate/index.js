/* eslint-disable */
import React from 'react';

// default
export const languages = [
  'en',
  'vi'
];
// all the languages this app can support
export const supportedLanguages = languages;

export let language = 'en';
const defaultLanguage = 'en';

export const get = () => language;

export const set = (value) => {
  if (supportedLanguages.indexOf(value) !== -1) {
    language = value;
  } else {
    language = 'en';
  }
};

const tags = ['<br />', '<br/>', '<a', '<span', '<strong'];

const translate = (translation, filename) => (
  (key, template) => {
    // texts: multiple translations of a key
    const texts = translation[key];
    if (!texts) {
      // eslint-disable-next-line no-console
      return key;
    }

    // text: local translation of a key
    let text = texts[language] || texts[defaultLanguage];

    if (!text) {
      // eslint-disable-next-line no-console
      // we will use english translation instead of returning key
      return translation[key]['en'];
    }

    // if has template
    if (template) {
      text = Object
        .keys(template)
        .reduce((result, keyT) => (
          result.replace(new RegExp(`{{ ${keyT} }}`, 'g'), template[keyT])
        ), text);
    }

    // if include dangerous HTML
    if (tags.some(tag => text.indexOf(tag) !== -1)) {
      return (
        <span dangerouslySetInnerHTML={{ __html: text }} />
      );
    }

    // else
    return text;
  }
);

export default translate;