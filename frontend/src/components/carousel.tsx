import CarouselCard from "./carousel-card";

export default function Carousel() {
    const cardsData = [
        {
            motivationText:
                "Вот тут будет какой-нибудь капец какой мотивирующий текст... Правда, будет",
            fio: "Тарасова Елизавета",
            major: "Прикладная информатика,",
            year: "2 курс",
            publicImageUrl: "/images/lisa.png",
        },
    ];

    return (
        <div className="carousel">
            <div className="index-carousel-controls">
                <button className="carousel-button">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="48"
                        height="48"
                        viewBox="0 0 48 48"
                        fill="none"
                    >
                        <path
                            d="M26.2511 32.354L19.6219 24.399L26.2511 16.444"
                            stroke="white"
                            stroke-opacity="0.6"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                    </svg>
                </button>
                <button className="carousel-button">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="48"
                        height="48"
                        viewBox="0 0 48 48"
                        fill="none"
                    >
                        <path
                            d="M21.7489 15.646L28.3781 23.601L21.7489 31.556"
                            stroke="white"
                            stroke-opacity="0.6"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                    </svg>
                </button>
            </div>
            <div className="carousel-content">
                {/* map over cardsData and create  */}
            </div>
        </div>
    );
}
