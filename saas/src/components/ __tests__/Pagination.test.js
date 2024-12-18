import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Pagination from '../Pagination';

describe('Pagination Component', () => {
  const mockHandlePrevious = jest.fn();
  const mockHandleNext = jest.fn();

  test('renders pagination buttons correctly', () => {
    render(
      <Pagination
        currentPage={2}
        totalPages={5}
        handlePrevious={mockHandlePrevious}
        handleNext={mockHandleNext}
      />
    );

    expect(screen.getByText(/Previous/i)).toBeInTheDocument();
    expect(screen.getByText(/Next/i)).toBeInTheDocument();
    expect(screen.getByText(/Page 2 of 5/i)).toBeInTheDocument();
  });

  test('disables Previous button on first page', () => {
    render(
      <Pagination
        currentPage={1}
        totalPages={5}
        handlePrevious={mockHandlePrevious}
        handleNext={mockHandleNext}
      />
    );

    expect(screen.getByText(/Previous/i)).toBeDisabled();
    expect(screen.getByText(/Next/i)).not.toBeDisabled();
  });

  test('calls handlers on button clicks', () => {
    render(
      <Pagination
        currentPage={2}
        totalPages={5}
        handlePrevious={mockHandlePrevious}
        handleNext={mockHandleNext}
      />
    );

    fireEvent.click(screen.getByText(/Previous/i));
    fireEvent.click(screen.getByText(/Next/i));

    expect(mockHandlePrevious).toHaveBeenCalledTimes(1);
    expect(mockHandleNext).toHaveBeenCalledTimes(1);
  });
});
