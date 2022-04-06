import { StateContent, Wrapper } from "./styled";

export const StateChecker = ({ children, status }) => {
    return (
        <>
            {status === "loading" ? (
                <Wrapper>
                    <StateContent>Loading..</StateContent>
                </Wrapper>
            ) : status === "error" ? (
                <Wrapper>
                    <StateContent>Oooopss... something went wrong</StateContent>
                </Wrapper>
            ) : (
                children
            )}
        </>
    );
};