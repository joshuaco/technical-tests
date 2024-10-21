import Item from './components/Item';
import { useItem } from './hooks/useItem';
import { useSEO } from './hooks/useSEO';
import './App.css';

export interface Item {
  id: `${string}-${string}-${string}-${string}-${string}`;
  text: string;
  timestamp: number;
}

function App() {
  const { addItem, removeItem, items } = useItem();
  useSEO({
    title: `[${items.length}] React Technical Test`,
    description: 'Add and Remove Items from a List'
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const { elements } = event.currentTarget;
    const input = elements.namedItem('item');
    const isInput = input instanceof HTMLInputElement;

    if (!isInput || input == null) return;

    addItem(input.value);
    input.value = '';
  };

  const handleRemove = (id: Item['id']) => () => {
    removeItem(id);
  };

  return (
    <main>
      <aside>
        <h1>React Technical Test</h1>
        <h2>Add and Remove Items from a List</h2>

        <form onSubmit={handleSubmit} aria-label='Add Items'>
          <label>
            <input type='text' name='item' placeholder='Add Item' required />
          </label>
          <button type='submit'>Add</button>
        </form>
      </aside>

      <section>
        <h3>Items</h3>

        {items.length > 0 ? (
          <section>
            <ul>
              {items.map((item) => (
                <Item
                  key={item.id}
                  {...item}
                  handleClick={handleRemove(item.id)}
                />
              ))}
            </ul>
            <footer>
              <p>
                <i>Press an item to remove it</i>
              </p>
            </footer>
          </section>
        ) : (
          <p>
            <strong>No items yet.</strong>
          </p>
        )}
      </section>
    </main>
  );
}

export default App;
