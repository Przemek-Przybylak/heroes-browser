import {Name, Wrapper} from "./styled";
import {StyledLink} from "../../../core/GlobalStyles";

export const Tile = ({name, url}) => {
    return (
        <Wrapper>
            <Name>
                <StyledLink to={`heroes/${url}`} url={url}>
                    {name}
                </StyledLink>
            </Name>
        </Wrapper>
    )
}