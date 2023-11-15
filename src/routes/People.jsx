import { useState, useEffect } from "react";
import Loading from "../components/Loading";

const People = () => {
  const [peopleData, setPeopleData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch("https://swapi.dev/api/people")
      .then((res) => res.json())
      .then((data) => {
        setPeopleData(data.results);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="bg-[#03123D] dark:bg-[#03123D] min-h-screen mx-20">
      <h2 className="text-4xl p-5 text-black dark:text-white mx-18">People</h2>
      {isLoading ? (
        <Loading />
      ) : peopleData.length ? (
        <div className="flex flex-wrap justify-center">
          {peopleData.map((person, id) => {
            return (
              <PeopleCard
                key={id}
                name={person.name}
                birth_year={person.birth_year}
              />
            );
          })}
        </div>
      ) : (
        <p className="text-center text-black dark:text-gray-500 font-semibold py-[40vh]">
          Please check your internet connection and try again.
        </p>
      )}
    </div>
  );
};

const PeopleCard = ({
  name,

  birth_year,
}) => {
  return (
    <div className="bg-white w-[20rem] rounded-lg overflow-hidden shadow-lg m-4">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-5">{name}</div>

        <p className="text-gray-700 text-base mb-2">
          <strong>Born: </strong>
          <br />
          {birth_year}
        </p>
      </div>
    </div>
  );
};

export default People;
