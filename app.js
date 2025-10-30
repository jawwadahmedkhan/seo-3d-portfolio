const { useState, useEffect, useRef, useCallback } = React;
const { createRoot } = ReactDOM;

// Data and meta
const portfolioData = { /* shortened for commit placeholder to avoid truncation; full upgrade pending */ };

// Minimal safe content to restore file; full upgrade will be pushed in next commit.
const App = () => React.createElement('div', null, 'Temporary placeholder - upgrade in progress');
const root = createRoot(document.getElementById('root'));
root.render(React.createElement(App));
