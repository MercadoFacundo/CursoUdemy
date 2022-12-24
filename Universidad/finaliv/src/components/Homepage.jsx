export const HomePages = ({info}) => {

    return(
    <div>
        <h1>Estoy en la vista HomePages</h1>

        <table>
            <thead>
                <tr>
                    <th>Animales</th>
                </tr>
            </thead>
            <hr/>
            <tbody>
                {info.map(animal => (
                    <tr>
                        <th>{animal.animales}</th>
                    </tr>
                ))}
                
            </tbody>
        </table>
    </div>

)}