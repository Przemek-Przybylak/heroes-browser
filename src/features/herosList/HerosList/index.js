import { Wrapper } from "./styled";
import {useDispatch, useSelector} from "react-redux";
import {fetchList, selectHeroes} from "../heroesListSlice";
import {useEffect} from "react";

export const HerosList = () => {
    const dispatch = useDispatch();
    const heroes = useSelector(selectHeroes);
    const currentState = `people`

    useEffect(() => {
        dispatch(fetchList(currentState));
    }, [dispatch]);

  return (
    <>
      <Wrapper>HerosList</Wrapper>
    </>
  );
};
