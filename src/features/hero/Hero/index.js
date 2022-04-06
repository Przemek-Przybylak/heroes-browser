import {useDispatch, useSelector} from "react-redux";
import {fetchHero, selectHero} from "../heroSlice";
import {useEffect} from "react";
import {Item, Wrapper} from "./styled";

export const Hero = () => {
    const dispatch = useDispatch();
    const currentState = `people/1`;
    const hero = useSelector(selectHero);
    console.log(hero)

    useEffect(() => {
        dispatch(fetchHero(currentState));
    }, [dispatch]);

    return (
        <Wrapper>
            <h1>{hero.name}</h1>
            <Item>
                birth in: {hero.birth_year}
            </Item>
            <Item>
                eyes: {hero.eye_color}
            </Item>
            <Item>
                gender: {hero.gender}
            </Item>
            <Item>
                height: {hero.height} cm
            </Item>
            <Item>
                skin color: {hero.skin_color}
            </Item>
            <Item>
                hair: {hero.hair_color}
            </Item>
            <Item>
                mass: {hero.mass} kg
            </Item>
        </Wrapper>
    )
};