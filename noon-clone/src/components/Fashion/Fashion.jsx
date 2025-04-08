import { useNavigate } from "react-router-dom";

const Fashion = ({ heading, items, navigateTo, buttonText }) => {
  const navigate = useNavigate();

  const handleViewAll = () => {
    navigate(navigateTo); 
  };

  return (
    <div className="container mx-auto my-6 px-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">{heading}</h2>
        <button
          onClick={handleViewAll}
          className="text-sm font-semibold border px-3 py-1 rounded"
        >
          {buttonText}
        </button>
      </div>

      <div className="flex justify-between items-center gap-4">
        {items.map((item) => (
          
            <img
              key={item.id} 
              src={item.image}
              alt="Category Item"
              className=" h-[300px] w-full object-cover rounded-lg"
            />
         
        ))}
      </div>
    </div>
  );
};

export default Fashion;
