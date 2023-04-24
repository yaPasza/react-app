import { Link } from "react-router-dom";
import classes from "./Navbar.module.css";

const Navbar = () => {
    return (
        <div className={classes.navbar}>
            <div className={classes.links}>
                <Link className={classes.link} to="/">
                    Home
                </Link>
                <Link className={classes.link} to="/about">
                    About
                </Link>
                <Link className={classes.link} to="/posts">
                    Posts
                </Link>
            </div>
        </div>
    );
};

export default Navbar;
