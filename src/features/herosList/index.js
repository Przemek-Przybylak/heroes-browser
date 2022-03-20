import { Wrapper } from "./styled";
import {useDispatch, useSelector} from "react-redux";
import {fetchList, selectHeroesList} from "./heroesListSlice";
import {useEffect} from "react";
import {Results} from "./Results";

export const HerosList = () => {
    const dispatch = useDispatch();
    const heroes = useSelector(selectHeroesList);
    const currentState = `people`;

    useEffect(() => {
        dispatch(fetchList(currentState));
    }, [dispatch]);
    console.log("lalala")

  return (
    <>
      <Wrapper>
          <Results heroes={heroes} />
      </Wrapper>
    </>
  );
};
