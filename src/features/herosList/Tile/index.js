import {Name, Wrapper} from "./styled";
import {StyledLink} from "../../../GlobalStyles";

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