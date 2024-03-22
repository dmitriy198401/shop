import React from "react";
import Header from "./component/Header";
import Items from "./component/Items";
import Footer from "./component/Footer";
import "./index.scss";
import Category from "./component/Category";
import ShowFullItem from "./component/ShowFullItem";
import { useAppContext } from "./useAppContext";

export default function App() {
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
 
