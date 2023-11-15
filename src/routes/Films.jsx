import { useState, useEffect } from "react";
import Loading from "../components/Loading";

const Films = () => {
  const [filmsData, setFilmsData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://swapi.dev/api/films")
      .then((res) => res.json())
      .then((data) => {
        setFilmsData(data.results);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      <div className="flex flex-col w-[1143px] p-3 md:p-5 gap-2 md:gap-10 justify-center items-start">
        <p
          style={{
            color: "var(--White-1, var(--White, #FFF))",

            fontSize: "20px",
            fontStyle: "normal",
            fontWeight: "600",
            lineHeight: "28px,",
          }}
        >
          Films{" "}
        </p>
      </div>

      <div>
        {isLoading ? (
          <Loading />
        ) : (
          <>
            <div className="m-auto">
              {isLoading ? (
                <Loading />
              ) : filmsData.length ? (
                <div className="m-auto flex flex-wrap justify-center ">
                  {filmsData.map((film, id) => {
                    return (
                      <FilmsCard
                        key={id}
                        title={film.title}
                        image={film.image}
                        release_date={film.release_date}
                      />
                    );
                  })}
                </div>
              ) : (
                <p className="text-center dark:text-gray-500 font-semibold py-[40vh]">
                  Please check your internet connection and try again.
                </p>
              )}
            </div>
          </>
        )}
      </div>
    </>
  );
};

const FilmsCard = ({ title, release_date }) => {
  return (
    <div className=" bg-white w-screen sm:max-w-sm rounded-lg overflow-hidden shadow-lg m-4">
      <div className="px-6 py-4 flex flex-col">
        {/* First div taking 2/3 of the space */}
        <div className="w-3/4 px-3 py-2 font-bold text-xl mb-2">{title}</div>

        {/* Second div taking 1/3 of the space */}
        <div className="w-1/4 px-3 py-2">
          <p className="text-gray-700 text-base mb-3">
            <strong>Release Date: </strong>
            {release_date}
          </p>
        </div>
      </div>
    </div>
  );
};
export default Films;
