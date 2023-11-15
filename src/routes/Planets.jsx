import { useState, useEffect } from "react";
import Loading from "../components/Loading";

const Planets = () => {
  const [planetsData, setPlanetsData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://swapi.dev/api/planets")
      .then((res) => res.json())
      .then((data) => {
        setPlanetsData(data.results);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="bg-[#03123D] dark:bg-[#03123D] min-h-screen">
      <h2 className="text-4xl p-5 text-black dark:text-white">Planets</h2>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <div className="m-auto">
            {isLoading ? (
              <Loading />
            ) : planetsData.length ? (
              <div className="flex flex-wrap justify-center">
                {planetsData.map((planet, id) => {
                  return (
                    <PlanetsCard
                      key={id}
                      name={planet.name}
                      climate={planet.climate}
                      gravity={planet.gravity}
                    />
                  );
                })}
              </div>
            ) : (
              <p className="text-center text-gray-500 font-semibold my-[20vh]">
                Please check your internet connection and try again.
              </p>
            )}
          </div>
        </>
      )}
    </div>
  );
};

const PlanetsCard = ({ name, climate, gravity }) => {
  return (
    <div className="bg-white w-screen sm:max-w-sm rounded-lg overflow-hidden shadow-lg m-4">
      <div className="px-3 py-4">
        <div className="font-bold text-xl mb-5">{name}</div>

        <p className="text-gray-700 text-base mb-3">
          <strong>Climate: </strong>
          <br />
          {climate}
        </p>

        {/* Full-width gravity information */}
        <div className="bg-gray-200 rounded px-1 py-1 text-sm font-semibold text-gray-700 mb-2">
          {gravity}
        </div>
      </div>
    </div>
  );
};

export default Planets;
