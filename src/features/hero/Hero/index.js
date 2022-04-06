import {useDispatch, useSelector} from "react-redux";
import {fetchHero, selectHero, selectStatus} from "../heroSlice";
import {useEffect} from "react";
import {Item, Wrapper} from "./styled";
import {StateChecker} from "../../../common/StateChecker";

export const Hero = () => {
    const query = window.location.hash.substr(8);
    const dispatch = useDispatch();
    const currentState = `people/${query}`;
    const hero = useSelector(selectHero);
    const status = useSelector(selectStatus);

    useEffect(() => {
        dispatch(fetchHero(currentState));
    }, [dispatch]);

    return (
        <StateChecker status={status}>
            {hero &&
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
                </Wrapper>}
        </StateChecker>
    )
};