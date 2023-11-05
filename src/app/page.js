import Counter from './components/Counter';
import CustomBtn from './components/CustomBtn';
import ItemList from './components/ItemList';
import ListDynamic from './components/Listdynamic';
import Tab from './components/Tab';
import ToDoListUI from './components/TodoList';

export default function Home() {
  const items = ['one', 'two', 'three'];
  return (
    <main>
      {/* <ItemList items={items} />
      <CustomBtn />
      <Counter />
      <ListDynamic /> */}
      {/* <ToDoListUI /> */}
      <Tab headers={['tab 1', 'tab 2', 'tab 3']}>
        <div>Page 1</div>
        <div>Page 2</div>
        <div>Page 3</div>
      </Tab>
    </main>
  );
}
