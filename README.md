# a_design-components

[![Build Status](https://travis-ci.org/Alexgalinier/a_design-components.svg?branch=master)](https://travis-ci.org/Alexgalinier/a_design-components)
[![codecov](https://codecov.io/gh/Alexgalinier/a_design-components/branch/master/graph/badge.svg)](https://codecov.io/gh/Alexgalinier/a_design-components)
[![Greenkeeper badge](https://badges.greenkeeper.io/Alexgalinier/a_design.svg)](https://greenkeeper.io/)

React component for a UI design. Based on a_design.

## Installation

```
npm i a_design-components
```

## Usage

```jsx
// file: src/YourOwnComponent.js

import { Block } from 'a_design-components';

export default ({name}) => (
 <Block title={name}>...</Block>
)
```

### Import css in your App

You have to important the built css manually as the generated .js is es5 proofed.

```
// file: src/App.js

import 'a_design-components/build/css/index.css';
```