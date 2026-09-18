import './Gallery.css';
import img1 from '../../assets/jgallery/gallery-1.jpg';
import img2 from '../../assets/jgallery/gallery-2.jpg';
import img3 from '../../assets/jgallery/gallery-3.jpg';
import img4 from '../../assets/jgallery/gallery-4.jpg';
import img5 from '../../assets/jgallery/gallery-5.jpg';
import img6 from '../../assets/jgallery/gallery-6.jpg';
import img7 from '../../assets/jgallery/gallery-7.jpg';
import img8 from '../../assets/jgallery/gallery-8.jpg';
import img9 from '../../assets/jgallery/gallery-9.jpg';
import img10 from '../../assets/jgallery/gallery-10.jpg';

import img11 from '../../assets/agallery/gallery-11.jpg';
import img12 from '../../assets/agallery/gallery-12.jpg';
import img13 from '../../assets/agallery/gallery-13.jpg';
import img14 from '../../assets/agallery/gallery-14.jpg';
import img15 from '../../assets/agallery/gallery-15.jpg';
import img16 from '../../assets/agallery/gallery-16.jpg';
import img17 from '../../assets/agallery/gallery-17.jpg';
import img18 from '../../assets/agallery/gallery-18.jpg';
import img19 from '../../assets/agallery/gallery-19.jpg';
import img20 from '../../assets/agallery/gallery-20.jpg';

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
    const julyImages = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];
    const augustImages = [img11, img12, img13, img14, img15, img16, img17, img18, img19, img20];

    const months = [
        { name: 'July', images: julyImages },
        { name: 'August', images: augustImages },
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