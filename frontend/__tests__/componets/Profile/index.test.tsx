import '../../../__mocks__/matchMedia.mock.js';
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Profile from '@/components/Profile';

describe('Profile Component', () => {
  it('renders a heading and flags', () => {
    render(<Profile className="test" />);

    const heading = screen.getByText('Victor Lira');
    const flagUSA = screen.getByAltText('USA flag image');
    const flagBrazil = screen.getByAltText('BRAZIL flag image');

    expect(heading).toBeInTheDocument();
    expect(flagUSA).toBeInTheDocument();
    expect(flagBrazil).toBeInTheDocument();
  });
});