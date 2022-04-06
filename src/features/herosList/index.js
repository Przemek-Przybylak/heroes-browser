import {Wrapper} from "./styled";
import {useDispatch, useSelector} from "react-redux";
import {fetchList, selectHeroesByQuery, selectHeroesList, selectStatus} from "./heroesListSlice";
import {useEffect} from "react";
import {Tile} from "./Tile";
import {Search} from "./Search";
import {useQueryParameter} from "../../common/queryParameters";
import {StateChecker} from "../../common/StateChecker";

export const HerosList = () => {
    const dispatch = useDispatch();
    const currentState = `people`;
    const status = useSelector(selectStatus);
    const query = useQueryParameter("search")
    const heroes = useSelector(state => selectHeroesByQuery(state, query));

    useEffect(() => {
        dispatch(fetchList(currentState));
    }, [dispatch]);

    return (
        <>
            <Search/>
            <Wrapper>
                <StateChecker status={status}>
                    {heroes &&
                        heroes.map(({
                                        name,
                                        birth_year,
                                        eye_color,
                                        films,
                                        gender,
                                        height,
                                        homeworld,
                                        skin_color,
                                        starchips,
                                        vechicles,
                                        url,
                                    }) => (
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
                </StateChecker>
            </Wrapper>
        </>
    );
};
