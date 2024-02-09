import useItems from "../../hooks/useItems";
import EachItems from "./EachItems";
import '../item/Item.css';


const Items = () => {
    const [items]=useItems();

    return (
        <div className="border-opacity-90 p-4 border my-24 rounded-xl max-w-screen-xl mx-auto ">
          
          <div className=" grid  grid-cols-3 gap-6">
          {
            items.map(item=><EachItems key={item._id} item={item}></EachItems>)
          } 

          </div>
         
            
        </div>
    );
};

export default Items;