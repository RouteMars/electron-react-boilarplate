import Common from '@util/common';
import Store from 'electron-store';

const store = new Store();

store.set('unicorn', '🦄');
Common.debug(store.get('unicorn'));
//=> '🦄'

// Use dot-notation to access nested properties
store.set('foo.bar', true);
Common.debug(store.get('foo'));
//=> {bar: true}

store.delete('unicorn');
Common.debug(store.get('unicorn'));
//=> undefined
