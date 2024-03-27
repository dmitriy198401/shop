import React from "react";
import Header from "./component/Header/index.tsx";
import Items from "./component/Items/index.tsx";
import Footer from "./component/Footer/index.tsx";
import "./index.scss";
import Category from "./component/Category/index.tsx";
import ShowFullItem from "./component/ShowFullItem/index.tsx";
import { useAppContext } from "./useAppContext.tsx";

export default function App():JSX.Element {
    const { showFullItem } = useAppContext();
    return (
        <div className="wrapper">
            <Header />
            <Category />
            <Items />
            {showFullItem && <ShowFullItem />}
            <Footer />
        </div>
    );
}
 
