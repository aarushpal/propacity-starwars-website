import { useState, useEffect } from "react";
import Loading from "../components/Loading";

const Starships = () => {
  const [starshipsData, setstarshipsData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://swapi.dev/api/starships")
      .then((res) => res.json())
      .then((data) => {
        setstarshipsData(data.results);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  }, []);

  console.log("starships data: ", starshipsData);

  return (
    <div className="bg-[#03123D] dark:bg-[#03123D] min-h-screen">
      <h2 className="text-4xl p-5 text-black dark:text-white">Starships</h2>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <div className="m-auto">
            {isLoading ? (
              <Loading />
            ) : starshipsData.length ? (
              <div className="flex flex-wrap justify-center">
                {starshipsData.map((starship, id) => {
                  return (
                    <StarshipsCard
                      key={id}
                      name={starship.name}
                      model={starship.model}
                      hyperdrive_rating={starship.hyperdrive_rating}
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

const StarshipsCard = ({ name, model, hyperdrive_rating }) => {
  return (
    <div className="bg-white w-screen sm:max-w-sm rounded-lg overflow-hidden shadow-lg m-4">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{name}</div>
        <p className="text-gray-700 text-base mb-3"></p>

        <p className="text-gray-700 text-base mb-3">
          <strong>Model: </strong>
          <br />
          {model}
        </p>

        <p className="text-gray-700 text-base mb-3">
          <strong>Hyperdrive rating: </strong>
          <br />
          {hyperdrive_rating}
        </p>
      </div>
    </div>
  );
};

export default Starships;
