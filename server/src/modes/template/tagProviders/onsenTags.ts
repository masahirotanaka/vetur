import {
  HTMLTagSpecification, IHTMLTagProvider,
  collectTagsDefault, collectAttributesDefault, collectValuesDefault,
  genAttribute
} from './common';

const u = undefined;

const onsenTags = {
  'v-ons-button': new HTMLTagSpecification(
    'Onsen UI button component.',
    [ genAttribute('disabled', u, 'Specify if button should be disabled'),
      genAttribute('modifier', u, 'The appearance of the button.'),
      genAttribute('ripple', u, 'If this attribute is defined, the button will have a ripple effect.')
    ]
  ),
};

export function getOnsenTagProvider(): IHTMLTagProvider {
  return {
    getId: () => 'onsen',
    isApplicable: (languageId) => languageId === 'vue-html',
    collectTags: (collector) => collectTagsDefault(collector, onsenTags),
    collectAttributes: (tag: string, collector: (attribute: string, type: string, documentation?: string) => void) => {
      collectAttributesDefault(tag, collector, onsenTags, []);
    },
    collectValues: (tag: string, attribute: string, collector: (value: string) => void) => {
      collectValuesDefault(tag, attribute, collector, onsenTags, [], {});
    }
  };
}

