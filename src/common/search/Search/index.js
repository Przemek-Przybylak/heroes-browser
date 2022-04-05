import {useQueryParameter, useReplaceQueryParameter} from "../queryParameters";
import {Input, Wrapper} from "./styled";

export const Search = () => {
    const query = useQueryParameter("search");
    const replaceQueryParameter = useReplaceQueryParameter();
    const placeholder = "Search for hero...";

    const onInputChange = ({ target }) => {
        replaceQueryParameter(
            {
                key: "search",
                value: target.value.trim() !== "" ? target.value : "",
            }
        )
    }

    return (
        <Wrapper>
            <Input placeholder={placeholder}
                   value={query || ""}
                   onChange={onInputChange} />
        </Wrapper>
    )
}