import { useState, useEffect } from "react";
import Loading from "../components/Loading";

const Species = () => {
  const [speciesData, setSpeciesData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://swapi.dev/api/species")
      .then((res) => res.json())
      .then((data) => {
        setSpeciesData(data.results);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="bg-[#03123D] dark:bg-[#03123D] min-h-screen">
      <h2 className="text-4xl p-5 text-black dark:text-white">Species</h2>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <div className="m-auto">
            {isLoading ? (
              <Loading />
            ) : speciesData.length ? (
              <div className="flex flex-wrap justify-center">
                {speciesData.map((specie, id) => {
                  return (
                    <SpeciesCard
                      key={id}
                      name={specie.name}
                      homeworld={specie.homeworld}
                      average_lifespan={specie.average_lifespan}
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

const SpeciesCard = ({ name, homeworld, average_lifespan }) => {
  return (
    <div className="bg-white w-screen sm:max-w-sm rounded-lg overflow-hidden shadow-lg m-4">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-5">{name}</div>

        {/* <p className="text-gray-700 text-base mb-3">
          <strong>Homeworld: </strong>
          <br />
          {homeworld}
        </p> */}
        <p className="text-gray-700 text-base mb-3">
          <strong>Average Lifespan: </strong>
          <br />
          {average_lifespan}
        </p>
      </div>
    </div>
  );
};

export default Species;
