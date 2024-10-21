import { useState } from 'react';
import type { Item } from '../App';

export function useItem() {
  const [items, setItems] = useState<Item[]>([]);

  const addItem = (text: string) => {
    const newItem: Item = {
      id: crypto.randomUUID(),
      text,
      timestamp: Date.now()
    };

    setItems((prevItems) => [...prevItems, newItem]);
  };

  const removeItem = (id: Item['id']) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  return { items, addItem, removeItem };
}
