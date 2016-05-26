jest.unmock('../../src/components/locale/localeText.jsx');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import {LocaleText} from '../../src/components/locale/localeText.jsx';

describe('Renders text based on current locale', ()=> {

  it('renders component', ()=> {

    const messages = {
      "default": {
        title: "test"
      },
      "US": {
        "title": "test - US"
      }
    };

    const localeText = TestUtils.renderIntoDocument(
      <LocaleText messages={messages} messageId="title" />
    );

    const localeTextNode = TestUtils.scryRenderedDOMComponentsWithClass(localeText, 'l-msg');

    expect(localeTextNode).not.toBeNull();

  });

});
