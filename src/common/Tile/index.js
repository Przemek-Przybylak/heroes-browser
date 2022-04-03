import {Name, Wrapper} from "./styled";
import {StyledLink} from "../../GlobalStyles";

export const Tile = ({ name, birth_year, eye_color, films, gender, height, homeworld, skin_color, starchips, vechicles }) => {
    return (
        <Wrapper>
                         <Name>
                             <StyledLink to={`heroes/${name}`}>
                                 {name}
                             </StyledLink>
                         </Name>
        </Wrapper>
    )
}