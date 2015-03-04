// jshint esnext:true
// Load and export printy
import printy from './lib/printy';

import MessageRenderer from './components/MessageRenderer';
import React from 'react';

React.render(<MessageRenderer message={printy.print()}/>,
  document.getElementById('container'));
