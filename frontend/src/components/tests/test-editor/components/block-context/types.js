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
const locator = (key, label, defaultValue) => ({
  type: 'LOCATOR',
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
      locator('SPECIAL_LOCATOR', 'Locator', { strategy: 'XPATH', locator: '' }),
      text('KEYS', 'Text', '')
    ]
  },
  CLICK_ELEMENT: {
    label: 'Click element',
    properties: []
  }
};
