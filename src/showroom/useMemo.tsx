import React, { useState, useMemo, useCallback } from 'react';

const users = [
  { id: 'a', name: 'Robin' },
  { id: 'b', name: 'Dennis' },
];

const Example = () => {
  const [text, setText] = useState('');
  const [search, setSearch] = useState('');

  const handleText = (event: React.FormEvent<HTMLInputElement>) => {
    setText(event.currentTarget.value);
  };

  const handleSearch = useCallback(() => {
    setSearch(text);
  }, [text, setSearch]);

  const filteredUsers = useMemo(
    () =>
      users.filter((user) =>
        user.name.toLowerCase().includes(search.toLowerCase()),
      ),
    [search],
  );

  return (
    <div>
      <input type="text" value={text} onChange={handleText} />
      <button type="button" onClick={handleSearch}>
        Search
      </button>
      <List items={filteredUsers} onClick={handleSearch} />
    </div>
  );
};

type ListProps = { items: any; onClick: () => void };

const List = React.memo(({ items, onClick }: ListProps) => {
  return (
    <ul>
      {items.map((user: any) => (
        <li key={user.id} onClick={onClick}>
          {user.name}
        </li>
      ))}
    </ul>
  );
});

export default Example;
