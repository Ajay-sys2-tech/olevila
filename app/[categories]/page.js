'use client'
import { useParams } from "next/navigation";

const Categories = () => {

    const params = useParams().categories
    // const { param1, param2 } = router.query;
    console.log(params); // category id
    return (
        <>
            <h1>This is the {params} categories page</h1>
        </>
    )
};

export default  Categories;