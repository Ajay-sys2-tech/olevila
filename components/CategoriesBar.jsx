import Link from 'next/link';


const CategoriesBar = () => {
    const items = ["NEW IN",
        "DESIGNERS",
        "CLOTHING",
        "SHOES",
        "BAGS & ACCESSORIES",
        "BEAUTY",
        "HOME",
        "OUTERWEAR",
        "JEWELRY & WATCHES",
        "LUXURY",
        "GIFTS",
    ];
    return (
        <div className="p-10  flex justify-around">
            {
                items.map((item, idx) => {
                    return (
                        <div key={idx} className='mx-4'>
                        <Link href={`/${item}`}>
                            <span class="hover:text-red-600">{item}</span>
                        </Link>
                        </div>
                    );
                })
            }
        </div>
    );
};


export default CategoriesBar;