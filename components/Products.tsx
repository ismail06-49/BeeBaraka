"use client";
import Image from "next/image";
import { useState } from "react";
import I1 from '@/public/item1.jpg';
import I2 from '@/public/item2.jpg';
import I3 from '@/public/item3.jpg';
import I4 from '@/public/item4.jpg';
import { X } from "lucide-react";

type ProductsProps = {
    lang: 'ar' | 'en';
};

// Example product data
const productsData = {
    ar: [
        {
            id: 1,
            name: "عسل طبيعي",
            price: "120 درهم",
            image: I1,
            benefits: "يعزز المناعة، مصدر طبيعي للطاقة، مفيد للجهاز الهضمي.",
        },
        {
            id: 2,
            name: "زيت أركان",
            price: "150 درهم",
            image: I2,
            benefits: "يرطب البشرة والشعر، غني بفيتامين E، مضاد للأكسدة.",
        },
        {
            id: 3,
            name: "زيت الزيتون",
            price: "110 درهم",
            image: I3,
            benefits: "يرطب البشرة والشعر، غني بفيتامين E، مضاد للأكسدة.",
        },
        {
            id: 4,
            name: "أملو مغربي",
            price: "90 درهم",
            image: I4,
            benefits: "مصدر للطاقة، غني بالفيتامينات والمعادن، طعم لذيذ وصحي.",
        },
    ],
    en: [
        {
            id: 1,
            name: "Pure Honey",
            price: "120 MAD",
            image: I1,
            benefits: "Boosts immunity, natural energy source, good for digestion.",
        },
        {
            id: 2,
            name: "Argan Oil",
            price: "150 MAD",
            image: I2,
            benefits: "Moisturizes skin and hair, rich in vitamin E, antioxidant.",
        },
        {
            id: 3,
            name: "Olive Oil",
            price: "110 MAD",
            image: I3,
            benefits: "Moisturizes skin and hair, rich in vitamin E, antioxidant.",
        },
        {
            id: 4,
            name: "Moroccan Amlou",
            price: "90 MAD",
            image: I4,
            benefits: "Energy source, rich in vitamins and minerals, delicious and healthy.",
        },
    ]
};

const Products = ({ lang }: ProductsProps) => {
    // State to track the selected product for the modal
    const [selected, setSelected] = useState<null | typeof productsData.ar[0]>(null);

    // Select products array based on language
    const products = productsData[lang];

    return (
        <section className="mt-20 bg-background" id="product">
            {/* Section title */}
            <h2 className="text-3xl font-bold text-primary mb-10 text-center">
                {lang === 'ar' ? 'منتجاتنا' : 'Our Products'}
            </h2>
            
            {/* Products grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-6xl mx-auto px-4">
                {products.map((product) => (
                    <button
                        key={product.id}
                        className="bg-card rounded-xl shadow-lg p-6 flex flex-col items-center hover:shadow-2xl hover:scale-105 transition-all cursor-pointer border border-transparent hover:border-accent"
                        onClick={() => setSelected(product)}
                        aria-label={lang === 'ar' ? `عرض ${product.name}` : `View ${product.name}`}
                    >
                        <Image
                            src={product.image}
                            alt={product.name}
                            width={120}
                            height={120}
                            className="mb-4 size-32 rounded-lg object-contain bg-white"
                        />
                        <h3 className="text-xl font-semibold text-foreground mb-2">{product.name}</h3>
                        <span className="text-lg text-accent font-bold">{product.price}</span>
                    </button>
                ))}
            </div>

            {/* Modal for product details */}
            {selected && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
                    <div className="bg-card rounded-2xl shadow-2xl p-8 max-w-md w-full relative text-center">
                        <button
                            className="absolute top-4 left-4 text-accent text-2xl font-bold hover:text-primary transition"
                            onClick={() => setSelected(null)}
                            aria-label={lang === 'ar' ? "إغلاق" : "Close"}
                        >
                            <X />
                        </button>
                        <Image
                            src={selected.image}
                            alt={selected.name}
                            width={160}
                            height={160}
                            className="mx-auto mb-4 rounded-lg object-contain bg-white"
                        />
                        <h3 className="text-2xl font-bold text-primary mb-2">{selected.name}</h3>
                        <span className="text-lg text-accent font-bold mb-4 block">{selected.price}</span>
                        <p className="text-foreground text-base">{selected.benefits}</p>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Products;