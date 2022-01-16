
import {ReactComponent as Arrow} from "assets/img/arrow.svg";
import { MoviePage } from "types/movie";
import "./styles.css";

type Props = {
    page: MoviePage;
    onChenge: Function;
}

function Pagination({page, onChenge}: Props) {

    return (
        <div className="dsmovie-pagination-container">
            <div className="dsmovie-pagination-box">
                <button className="dsmovie-pagination-button" disabled={page.first} onClick={() => onChenge(page.number - 1)} >
                    <Arrow />
                </button>
                <p>{`${page.number + 1} de ${page.totalPages}`}</p>
                <button className="dsmovie-pagination-button" disabled={page.last} onClick={() => onChenge(page.number + 1)} >
                    <Arrow className="dsmovie-flip-horizontal" />
                </button>
            </div>
        </div>
    );
}

export default Pagination;