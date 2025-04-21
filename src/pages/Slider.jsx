import React from 'react'
import '../assets/CategorySlider.css'

const categories = [
    { name: "Pizzas", img: "https://picsum.photos/seed/pizza/100/100" },
    { name: "Sushi", img: "https://picsum.photos/seed/sushi/100/100" },
    { name: "Hamburguesas", img: "https://picsum.photos/seed/burger/100/100" },
    { name: "Empanadas", img: "https://picsum.photos/seed/empanada/100/100" },
    { name: "Helados", img: "https://picsum.photos/seed/icecream/100/100" },
    { name: "Pastas", img: "https://picsum.photos/seed/pasta/100/100" },
]

const CategorySlider = () => {
    return (
        <div className="category-slider">
            <div className="category-slider__container">
                {categories.map((cat, i) => (
                    <div className="category-slider__item" key={i}>
                        <img src={cat.img} alt={cat.name} />
                        <span>{cat.name}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default CategorySlider
