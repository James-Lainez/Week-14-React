export default function ItemCard({item}: {item: {text: string}}){
  return (
          <div className="card">
            <div className="container">
              <h5 className="card-title">{item.text}</h5>
            </div>
          </div>)
}