import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const BreakingNews = () => {
    return (
        <div className=" flex">
            <button className="btn btn-secondary">Breaking News</button>
            <Marquee speed={100} pauseOnHover={true} >
                <Link to="/" className=" mr-12" >Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as it happened         </Link>
                <Link to="/" className=" mr-12">Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as it happened         </Link>
                <Link to="/" className=" mr-12">Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as it happened         </Link>
                <Link to="/" className=" mr-12">Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as it happened         </Link>
            </Marquee>
        </div>
    );
};

export default BreakingNews;