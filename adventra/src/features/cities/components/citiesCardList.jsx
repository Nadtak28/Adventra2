import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { CitiesService } from "../api/citiesService";

export default function CitiesCardList() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // ✅ Corrected destructuring to match your slice
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
    <div className="p-6 bg-white">
      <h2 className="text-2xl font-bold mb-4">Cities</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {(cities || []).map((city) => (
          <div
            key={city.id}
            onClick={() => navigate(`/cities/${city.id}`)}
            className="bg-white shadow-md hover:shadow-lg transition rounded-2xl overflow-hidden cursor-pointer"
          >
            <div className="h-48 w-full overflow-hidden">
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
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">{city.name}</h3>
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
