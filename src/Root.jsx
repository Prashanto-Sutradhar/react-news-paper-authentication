import { Outlet } from "react-router-dom";

const Root = () => {
    return (
        <div className=" w-[1200px] mx-auto font-poppins">
            <Outlet></Outlet>
        </div>
    );
};

export default Root;