import { render, screen, fireEvent } from '@testing-library/react';
import Counter from './Counter';

describe('Counter Component', () => {
  
  test('renders counter with initial value 0', () => {
    render(<Counter />);
    
    expect(screen.getByText('Counter App')).toBeInTheDocument();
    
    expect(screen.getByTestId('count')).toHaveTextContent('0');
  });

  test('increments count when increment button is clicked', () => {
    render(<Counter />);
    
    const incrementBtn = screen.getByText('Increment');
    
    fireEvent.click(incrementBtn);
    
    expect(screen.getByTestId('count')).toHaveTextContent('1');
    
    fireEvent.click(incrementBtn);
    fireEvent.click(incrementBtn);
    
    expect(screen.getByTestId('count')).toHaveTextContent('3');
  });

  test('decrements count when decrement button is clicked', () => {
    render(<Counter />);
    
    const decrementBtn = screen.getByText('Decrement');
    
    fireEvent.click(decrementBtn);
    
    expect(screen.getByTestId('count')).toHaveTextContent('-1');
  });

  test('resets count to 0 when reset button is clicked', () => {
    render(<Counter />);
    
    const incrementBtn = screen.getByText('Increment');
    fireEvent.click(incrementBtn);
    fireEvent.click(incrementBtn);
    fireEvent.click(incrementBtn);
    fireEvent.click(incrementBtn);
    fireEvent.click(incrementBtn);
    
    expect(screen.getByTestId('count')).toHaveTextContent('5');
    
    const resetBtn = screen.getByText('Reset');
    fireEvent.click(resetBtn);
    
    expect(screen.getByTestId('count')).toHaveTextContent('0');
  });

});