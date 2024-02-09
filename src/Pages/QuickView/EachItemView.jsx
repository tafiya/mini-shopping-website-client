import { Link } from "react-router-dom";


const EachItemView = ({NewItem}) => {
    const {_id,name,price,details,picture}=NewItem;
    return (
        <div>
            
            <div className="my-14 max-w-7xl mx-auto">
        <div className="flex  flex-col  bg-white  text-gray-700 ">
        <div className="  relative rounded-xl bg-clip-border text-gray-700 ">
        <div className=''>
        <img className='rounded-xl  w-full h-96  'src={picture} alt="ui/ux review check"/>
        </div>
      </div>
      <div className="p-6 rounded-b-md">
        <h4 className=" mt-6 block font-sans text-4xl font-bold leading-snug tracking-normal text-blue-gray-900 antialiased">
          {name}
        </h4>
        <p className="my-5 block font-sans text-lg font-normal leading-relaxed text-gray-700 antialiased">
         {details}
        </p>
        <p className="text-lg text-slate-500 mb-6">{price}</p>
        <div className=" flex items-center">
            <Link to='/' className=" w-full btn btn-active text-white bg-red-400">Back to Home</Link>
     

        </div>
      
       
      </div>

        </div>

        </div>
      
        </div>
    );
};

export default EachItemView;