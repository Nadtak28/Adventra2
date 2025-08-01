import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { CitiesService } from "../api/citiesService";

export default function CitiesCardList() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    list: cities,
    loadingList: loading,
    errorList: error,
  } = useSelector((state) => state.cities);

  useEffect(() => {
    dispatch(CitiesService());
  }, [dispatch]);

  if (loading) return <div className="text-center py-8">Loading cities...</div>;
  if (error)
    return <div className="text-center py-8 text-red-500">{error}</div>;

  return (
    <div className="px-4 sm:px-6 md:px-10 lg:px-20 py-6 bg-white">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4">Cities</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {(cities || []).map((city) => (
          <div
            key={city.id}
            onClick={() => navigate(`/cities/${city.id}`)}
            className="bg-white shadow-sm hover:shadow-lg transition hover:scale-[1.02] rounded-2xl overflow-hidden cursor-pointer"
          >
            <div className="h-40 sm:h-44 md:h-48 w-full overflow-hidden">
              {city.images.length > 0 ? (
                <img
                  src={city.images[0].url}
                  alt={city.name}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full bg-gray-200 flex items-center justify-center text-sm text-gray-500">
                  No Image
                </div>
              )}
            </div>
            <div className="p-3 sm:p-4">
              <h3 className="text-base sm:text-lg font-semibold mb-1 sm:mb-2">
                {city.name}
              </h3>
              <p className="text-sm text-gray-700 line-clamp-3">
                {city.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
