import React from 'react';
import { render } from '@testing-library/react';
import About from '@/components/About';

describe('About component', () => {
  it('Render about component withou crashing', () => {
    render(<About />);
  });
});
