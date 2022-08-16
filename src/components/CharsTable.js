import "../styles/charsTable.css";
import CharsTableRow from "./CharsTableRow";

const CharsTable = ({characters = []}) => {
    return (
        <div className="centerBox">
            <table className="table">
                <thead>
                <tr>
                    <th>Characters</th>
                    <th>Image</th>
                    <th>Location</th>
                </tr>
                </thead>
                <tbody>
                    {characters.map(character => {
                        const {
                            id,
                            name = "",
                            image = "",
                            location: {
                                name: locationName = ""
                            } = {}
                        } = character;
                        return <CharsTableRow key={`CharsTableRow-${id}`} name={name} image={image} locationName={locationName} />;
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default CharsTable;