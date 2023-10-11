import BreakingNews from "./BreakingNews";
import Header from "./share/Header";
import LeftSideNav from "./share/LeftSideNav";
import Navbar from "./share/Navbar";
import RightSideNav from "./share/RightSideNav";

const Home = () => {
    return (
        <div className="  ">
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>
            <div className=" grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className=" border"><LeftSideNav></LeftSideNav></div>
            <div className=" md:col-span-2 border"> hellooooooooooooooooooooo</div>
             <div className=" border"> 
               <RightSideNav></RightSideNav>
              </div>
            </div>
        </div>
    );
};

export default Home;