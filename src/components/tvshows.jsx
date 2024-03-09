import React, {useState, useEffect} from 'react'
import { fetchTvShowData } from '../services/fetchData.service';
import Navbar from "../components/common/navbar";

const TVShows = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const tvShowData = await fetchTvShowData();
            setData(tvShowData);
        }

        fetchData();
    }, []);

    return ( 
        <React.Fragment>
            <Navbar />
            <h1>Movies & TV Shows</h1>
            <table className="table m-5">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Types</th>
                        <th scope="col">TV Show Name</th>
                        <th scope="col">Ratings</th>
                        <th scope="col">Publish Date</th>
                        <th scope="col">Language</th>
                        <th scope="col">Genres</th>
                        <th scope="col">Official</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(show => (
                        <tr key={show.id}>
                            <td>{show.id}</td>
                            <td>{show.type}</td>
                            <td>{show.name}</td>
                            <td>{show.rating.average}</td>
                            <td>{show.premiered}</td>
                            <td>{show.language}</td>
                            <td>{show.genres}</td>
                            <td>{show.officialSite}</td>
                        </tr>
                    ))}
                    
                </tbody>
            </table>

        </React.Fragment>
    );
}
 
export default TVShows;