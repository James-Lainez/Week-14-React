const testItems = [
    {
        id: 0,
        text: "Firstaid Kit"
    },
    {
        id: 1,
        text: "Flashlight"
    },
    {
        id: 2,
        text: "Hatchet"
    },
    {
        id: 3,
        text: "Rope"
    }
]
import ItemCard from "./ItemCard";
export default function item() {
  return(
    <div className="cards">
        {testItems.map(i => <ItemCard key={i.id} item={i}/>)}
    </div>
    
  )
}