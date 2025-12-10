import Item from "./ItemList";


export default function MainPocket() {
    return (
        <div className="container">
            <div className="d-flex justify-content-center algin-item-center" style={{background: "rgb(151, 133, 19)"}}>
              <div className="text-white m-2 p-2">
                <><h2>Main Pocket</h2></>
                </div>
            </div>
            <>
               <Item/>
            </>
        </div>)
}