
function Item(props){
  return <div>
    <img src={"https://i.imgur.com/7vQDOfPs.jpg"}/><br/>
    <h2>{props.item}</h2>
  </div>
}

export default function ItemList({ items }) {

    // second approach
    const listItems = items.map((item,index)=> <Item key={index} item={item}/>)
  return (
    <div>
        {/* first approach 
        {items.map((item, index) => (
        <div key={index}>{item}</div>
      ))} */}
      {listItems}
    </div>
  );
}
