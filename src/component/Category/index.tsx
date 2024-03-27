import React,{useContext} from "react";
import styles from "./Category.module.scss";
import {useAppContext} from "./../../useAppContext.tsx";



interface Category{
    key:string;
    name:string;
}

const Category:React.FC=()=>{

    const {chooseCategory}=useAppContext();

    const category:Category[]=[
        {
            key:"all",
            name:"Все"
        },

        {
            key:"DODGEE",
            name:"DODGEE"
        },
        {
            key:"Infinix",
            name:"Infinix"
        },

        {
            key:"Honor",
            name:"Honor"
        },

        {
            key:"Apply",
            name:"Apply"
        },
        {
            key:"Realme",
            name:"Realme"
        }, 
        {
            key:"TECNO",
            name:"TECNO"
        },
        {
            key:"POCO",
            name:"POCO"
        },


        {
            key:"Samsung",
            name:"Samsung"
        },

        {
            key:"Xiaomi",
            name:"Xiaomi"
        },

        {
            key:"Sony",
            name:"Sony"
        },




    ];

    return(
    <div className={styles.category}>{category.map(el=>(
     <div key={el.key} onClick={()=>chooseCategory(el.key)}>{el.name}</div>))}

    </div>

    );
};

export default Category;