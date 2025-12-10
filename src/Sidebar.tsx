import SideButtons from "./SideButtons";

export default function Sidebar() {
    return (
      <div className="bg-info p-3 border-bottom flex-column">
        <form>
           <input name="text box" type="text"/>
           <div className="text-center pt-2"><SideButtons/></div>
        </form>
       </div>
    )
}