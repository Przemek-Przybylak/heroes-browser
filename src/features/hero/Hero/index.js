import {useDispatch, useSelector} from "react-redux";
import {fetchHero, selectHero} from "../heroSlice";
import {useEffect} from "react";

export const Hero = () => {
    const dispatch = useDispatch();
    const currentState = `people/1`;
    const hero = useSelector(selectHero);
    console.log(hero)

    useEffect(() => {
        dispatch(fetchHero(currentState));
    }, [dispatch]);

    return (
        <>
        nanan
        </>
    )
}