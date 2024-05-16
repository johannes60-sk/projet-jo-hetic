
const HomeCard = ({img}) => {
  return (
    <div className="max-w-xs w-full rounded overflow-hidden shadow-lg"> 
      <div className="w-full h-48 "> 
        <img
          className="w-full h-full object-cover" 
          src={img}
          alt="Sunset in the mountains"
        />
      </div>
      <div className="px-4 py-2"> 
        <div className="font-bold text-lg mb-2">The Coldest Sunset</div> 
        <p className="text-gray-700 text-sm">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
          quia, nulla! Maiores et perferendis eaque, exercitationem praesentium
          nihil.
        </p>
      </div>
      <div className="px-4 pt-2 pb-2"> 
        <span className="inline-block bg-gray-200 rounded-full px-2 py-1 text-xs font-semibold text-gray-700 mr-2 mb-2">
          #photography
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-2 py-1 text-xs font-semibold text-gray-700 mr-2 mb-2">
          #travel
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-2 py-1 text-xs font-semibold text-gray-700 mr-2 mb-2">
          #winter
        </span>
      </div>
    </div>
  );
};

export default HomeCard