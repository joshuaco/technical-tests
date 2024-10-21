import { renderHook, act } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { useItem } from '../src/hooks/useItem';

describe('test useItem hook', () => {
  it('should add an item to the list', () => {
    const { result } = renderHook(() => useItem());

    act(() => {
      result.current.addItem('Test Item 🐱‍👓');
      result.current.addItem('Test Item 2 ');
    });

    console.log(result.current.items);

    expect(result.current.items.length).toBe(2);
  });
});
