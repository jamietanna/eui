/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */

import React from 'react';
import figma from '@figma/code-connect';

import { EuiButton } from './button';

figma.connect(
  EuiButton,
  'https://www.figma.com/design/RzfYLj2xmH9K7gQtbSKygn/Elastic-UI?node-id=31735-391399&m=dev',
  {
    props: {
      // rightSpinner: figma.boolean('Right spinner'),
      // icon: figma.instance('⮑  Icon'),
      // leftSpinner: figma.boolean('Left spinner'),
      // iconRight: figma.instance('⮑  Icon right'),
      // iconRight: figma.boolean('Icon right'),
      // loadingText: figma.string('Loading text'),
      // iconLeft: figma.instance('⮑  Icon left'),
      children: figma.textContent('Text'),
      // iconLeft: figma.boolean('Icon left'),
      style: figma.enum('Style', {
        'Default*': 'default-',
        Filled: 'filled',
        Empty: 'empty',
      }),
      color: figma.enum('Color', {
        'Primary*': 'primary',
        Neutral: 'text',
        Success: 'success',
        Warning: 'warning',
        Danger: 'danger',
        Accent: 'accent',
      }),
      size: figma.enum('Size', {
        'Medium*': 'm',
        Small: 's',
        // 'Extra Small': 'extra-small',
      }),
      isDisabled: figma.boolean('Disabled'),
      // loading: figma.boolean('Loading'),
      // iconOnly: figma.boolean('Icon only'),
    },
    example: ({ children, color, isDisabled, size }) => (
      <EuiButton color={color} isDisabled={isDisabled} size={size}>
        {children}
      </EuiButton>
    ),
  }
);
