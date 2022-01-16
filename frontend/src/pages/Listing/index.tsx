
import axios from "axios";
import MovieCard from "components/MovieCard";
import Pagination from "components/Pagination";
import { useEffect, useState } from "react";
import { MoviePage } from "types/movie";
import { BASE_URL } from "utils/requests";

function Listing() {

    const  [pageNumber, setPageNumber] = useState(0);

    useEffect(() => {
        axios.get(`${BASE_URL}/movies?size=12&page=0`)
        .then(Response => {
            const data = Response.data as MoviePage;
            console.log(data);
            setPageNumber(data.number);
        });

    }, []);

   




    return (
        <>
            <p>{pageNumber}</p>
            <Pagination />

            <div className="container">
                <div className="row">
                    <div className="col-sm-6 col-lg-4 mg-3">
                        <MovieCard />
                    </div>
                    <div className="col-sm-6 col-lg-4 mg-3">
                        <MovieCard />
                    </div>
                    <div className="col-sm-6 col-lg-4 mg-3">
                        <MovieCard />
                    </div>
                    <div className="col-sm-6 col-lg-4 mg-3">
                        <MovieCard />
                    </div>
                    <div className="col-sm-6 col-lg-4 mg-3">
                        <MovieCard />
                    </div>
                    <div className="col-sm-6 col-lg-4 mg-3">
                        <MovieCard />
                    </div>

                </div>

            </div>
        </>
    );
}
export default Listing;