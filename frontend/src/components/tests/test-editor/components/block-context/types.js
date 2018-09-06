//options  =  [{label:'', value: '']
const options = (key, label, options, defaultValue) => ({
  type: 'SELECT',
  label,
  key,
  options,
  defaultValue
});
const text = (key, label, defaultValue) => ({
  type: 'TEXT',
  key,
  label,
  defaultValue
});

export default {
  LAUNCH_BROWSER: {
    label: 'Open browser',
    properties: [
      options(
        'BROWSER',
        'Browser',
        [
          { label: 'Firefox', value: 'FIREFOX' },
          { label: 'Chrome', value: 'CHROME' }
        ],
        'CHROME'
      ),
      text('TIMEOUT', 'Browser timeout (ms)', '5000')
    ]
  },
  CLOSE_BROWSER: {
    label: 'Close browser',
    properties: []
  },
  NAVIGATE_TO_URL: {
    label: 'Navigate to URL',
    properties: [text('URL', 'URL', 'http://example.com')]
  },
  MAXIMIZE_WINDOW: {
    label: 'Maximize browser',
    properties: []
  },
  ENTER_TEXT: {
    label: 'Enter text',
    properties: [
      options(
        'LOCATOR_STRATEGY',
        'Locator strategy',
        [{ label: 'XPath', value: 'XPATH' }, { label: 'CSS', value: 'CSS' }],
        'CSS'
      ),
      text('LOCATOR', 'Locator', ''),
      text('KEYS', 'Text', '')
    ]
  },
  CLICK_ELEMENT: {
    label: 'Click element',
    properties: []
  }
};
