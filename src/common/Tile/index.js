import {Name, Wrapper} from "./styled";
import {StyledLink} from "../../GlobalStyles";

export const Tile = ({ name, birth_year, eye_color, films, gender, height, homeworld, skin_color, starchips, vechicles, url }) => {
    return (
        <Wrapper key={name}>
                         <Name>
                             <StyledLink to={`heroes/${url}`}>
                                 {name}
                             </StyledLink>
                         </Name>
        </Wrapper>
    )
}