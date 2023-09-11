interface CarouselCardProps {
    motivationText: string;
    fio: string;
    major: string;
    year: string;
    publicImageUrl: string;
}

export default function CarouselCard(props: CarouselCardProps) {
    const { motivationText, fio, major, year, publicImageUrl } = props;
    return (
        <div className="index-carousel-card">
            <div className="index-carousel-card-text">
                <p>{motivationText}</p>
            </div>
            <div className="index-carousel-card-about">
                <h4> {fio}</h4>
                <p>{major}</p>
                <p>{year}</p>
            </div>
            <div className="index-carousel-card-image">
                <img src={publicImageUrl} />
            </div>
        </div>
    );
}
