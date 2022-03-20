export const Results = ({heroes}) => {
    console.log("inside")
    console.log(({heroes}))
    return (
        <>
            <div>
                {heroes &&
                heroes.map(({name}) => (
                    <div>{name}</div>
                ))}
        </div>
        </>
    )
};