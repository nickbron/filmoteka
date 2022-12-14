import { Grid } from "@mui/material";
import BtnScroll from "Components/BtnScroll/BtnScroll";
import CardFilm from "Components/CardFilm/CardFilm";
import useScrollPosition from "Hooks/useScrollPosition";
import { useEffect, useRef, useState } from "react";
import { GetFilmByID } from "Services/api";

export default function MyLibraryView() {
  const [movies, setMovies] = useState([]);
  const Ref = useRef(false);
  const scrollPosition = useScrollPosition();

  useEffect(() => {
    async function fetchData(idFilm) {
      try {
        const response = await GetFilmByID(idFilm);
        if (response.status === 200) {
          setMovies((prevState) => {
            let tmpState = [...prevState];
            tmpState = tmpState.concat(response.data);
            return tmpState;
          });
        } else {
          throw new Error("Error - " + response.status);
        }
      } catch (error) {
        console.log("rejected   " + error.message);
        return null;
      }
    }
    if (Ref.current === false) {
      const filmId = JSON.parse(localStorage.getItem("data"));
      if (filmId) {
        filmId.forEach((element) => {
          fetchData(element);
        });
      }
      Ref.current = true;
    }
  }, []);

  return (
    <>
      {movies && (
        <Grid container spacing={2} sx={{ mt: "5rem" }}>
          {movies.map((movie) => (
            <CardFilm
              key={movie.id}
              movieId={movie.id}
              image={movie.poster_path}
              title={movie.title}
              genre={movie.genre_ids}
              date={movie.release_date}
            ></CardFilm>
          ))}
          {scrollPosition > 500 && <BtnScroll />}
        </Grid>
      )}
    </>
  );
}
