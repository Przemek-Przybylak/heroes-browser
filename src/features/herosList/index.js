import { Wrapper } from "./styled";
import {useDispatch, useSelector} from "react-redux";
import {fetchList, selectHeroesList} from "./heroesListSlice";
import {useEffect} from "react";
import {Tile} from "../../common/Tile";
import {Search} from "../../common/search/Search";

export const HerosList = () => {
    const dispatch = useDispatch();
    const heroes = useSelector(selectHeroesList);
    const currentState = `people`;
    console.log(heroes)

    useEffect(() => {
        dispatch(fetchList(currentState));
    }, [dispatch]);
    console.log("lalala")

  return (
    <>
        <Search />
      <Wrapper >
          {heroes &&
              heroes.map(({name, birth_year, eye_color, films, gender, height, homeworld, skin_color, starchips, vechicles, url}) => (
                  <>
                      <Tile
                          name={name}
                          birth_year={birth_year}
                          eye_color={eye_color}
                          films={films}
                          gender={gender}
                          height={height}
                          homeworld={homeworld}
                          skin_color={skin_color}
                          starchips={starchips}
                          vechicles={vechicles}
                          url={url.substr(29)}
                      />
                  </>
              ))}
      </Wrapper>
    </>
  );
};
