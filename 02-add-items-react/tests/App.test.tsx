import React from 'react';
import userEvent from '@testing-library/user-event';
import { test, describe, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from '../src/App';

describe('<App />', () => {
  test('can add items and remove them', async () => {
    render(<App />);
    const user = userEvent.setup();

    // Find the form element
    const form = screen.getByRole('form');
    expect(form).toBeDefined();

    // Find the input element
    const input = screen.getByRole('textbox');
    expect(input).toBeDefined();

    // Find the submit button
    const button = form.querySelector('button');
    expect(button).toBeDefined();

    // Add an item
    await user.type(input, 'New Item 📦');
    await user.click(button!);

    // Find the list element
    const list = screen.getByRole('list');
    expect(list).toBeDefined();

    // Expect the list to have one item
    expect(list.childNodes.length).toBe(1);

    // Find the item in the list
    const item = screen.getByText('New Item 📦');
    expect(item).toBeDefined();

    // Remove the item
    await user.click(item!);

    expect(screen.getByText('No items yet.')).toBeDefined();
  });
});
