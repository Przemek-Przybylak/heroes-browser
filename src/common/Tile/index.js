import {Name, TileWrapper, Wrapper} from "./styled";

export const Tile = ({heroes}) => {
    console.log(heroes)
    return (
        <>
        <Wrapper>
            {heroes &&
                heroes.map(({name}) => (
                    <TileWrapper>
                        <Name>{name}</Name>
                    </TileWrapper>
                ))}
        </Wrapper>
    </>
    )
}