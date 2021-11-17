import React from 'react';
import { css } from 'styled-components';

const mediaQuery = (options) => {
  return css`
    @media all and (max-width: 768px) {
      ${options};
    }
  `;
};
export default mediaQuery;