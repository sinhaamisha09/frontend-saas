import React from 'react';
import { render, screen } from '@testing-library/react';
import Table from '../Table';

describe('Table Component', () => {
  const mockData = [
    { 's.no': 1, 'percentage.funded': 150, 'amt.pledged': 2000 },
    { 's.no': 2, 'percentage.funded': 175, 'amt.pledged': 3000 },
  ];

  test('renders table headers correctly', () => {
    render(<Table data={mockData} />);

    expect(screen.getByText(/S.No/i)).toBeInTheDocument();
    expect(screen.getByText(/Percentage Funded/i)).toBeInTheDocument();
    expect(screen.getByText(/Amount Pledged/i)).toBeInTheDocument();
  });

  test('renders table rows correctly', () => {
    render(<Table data={mockData} />);

    expect(screen.getByText('1')).toBeInTheDocument();
    expect(screen.getByText('150%')).toBeInTheDocument();
    expect(screen.getByText('$2,000')).toBeInTheDocument();

    expect(screen.getByText('2')).toBeInTheDocument();
    expect(screen.getByText('175%')).toBeInTheDocument();
    expect(screen.getByText('$3,000')).toBeInTheDocument();
  });
});
