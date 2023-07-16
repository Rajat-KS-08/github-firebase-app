import { useEffect, useState } from "react";
import Axios  from "axios";
import { ListGroup, ListGroupItem } from "reactstrap";

const Repos = ({repos_url}) => {
    const [repos, setRepos] = useState([]);

    const fetchRepos = async () => {
        const {data} = await Axios.get(repos_url);
        setRepos(data);
        console.log({data});
    }

    useEffect( () => {
        fetchRepos();
    }, [repos_url] );

    return(
        <ListGroup>
            {
                repos.map( r => (
                    <ListGroupItem key={r.id} className="text-center">
                        <div className="text-success"> {r.name} </div>
                        <div className="text-warning"> {r.language} </div>
                        <div className="text-info"> {r.description} </div>
                    </ListGroupItem>
                ) )
            }
        </ListGroup>
    );
}

export default Repos;