'use client';
import { useState } from 'react';

function unique() {
  let i = 1;
  return function () {
    return i++;
  };
}
export default function ListDynamic() {
  const nextId = unique();
  const [items, setItems] = useState(['One']);
  const addListHandler = () => {
    // items.push('Item' + nextId());
    setItems([...items, 'Item' + nextId()]);
  };
  return (
    <div>
      <button type="button" onClick={addListHandler}>
        Add
      </button>
      {items.map((item, index) => (
        <div key={index}>{item}</div>
      ))}
    </div>
  );
}
