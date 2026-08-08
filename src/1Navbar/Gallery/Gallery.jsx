import './Gallery.css';
import img1 from '../../assets/gallery-1.png';
import img2 from '../../assets/gallery-2.png';
import img3 from '../../assets/gallery-3.png';
import img4 from '../../assets/gallery-4.png';
import img5 from '../../assets/gallery-5.png';
import img6 from '../../assets/gallery-6.png';

function GalleryMonth({ month, images }) {
    return (
        <div className="gallery-month">
            <h2 className="gallery-month__title">{month}</h2>
            <div className="gallery-month__grid">
                {images.map((img, index) => (
                    <img
                        key={index}
                        src={img}
                        alt={`${month} highlight ${index + 1}`}
                        className={`gallery-month__img gallery-month__img--${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
}

function Gallery() {
    const monthlyImages = [img1, img3, img5, img2, img6, img4];

    const months = [
        { name: 'July', images: monthlyImages },
        { name: 'August', images: monthlyImages },
    ];

    return (
        <section className="gallery-page">
            <h1 className="gallery-page__heading">Gallery</h1>
            <p className="gallery-page__subtitle">Catchup on the fun times</p>

            {months.map((month) => (
                <GalleryMonth key={month.name} month={month.name} images={month.images} />
            ))}
        </section>
    );
}

export default Gallery;