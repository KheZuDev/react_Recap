import CustomBtn from './components/CustomBtn';
import ItemList from './components/ItemList';

export default function Home() {
  const items = ['one', 'two', 'three'];
  return (
    <main>
      <ItemList items={items} />
      <CustomBtn />
    </main>
  );
}
