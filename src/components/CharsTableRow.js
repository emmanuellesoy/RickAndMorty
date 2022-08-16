const CharsTableRow = ({name = "", image = "", locationName = ""}) => {
    return (
        <tr>
            <td>{name}</td>
            <td>
                <img src={image} alt={name} />
            </td>
            <td>{locationName}</td>
        </tr>
    );
};

export default CharsTableRow;