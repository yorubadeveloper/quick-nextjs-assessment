import {useEffect, useRef, useState} from 'react';
import Card, {CardType} from '../Card/Card';

export type SliderProps = {
    cards: CardType[];
};


const Slider = ({cards}: SliderProps) => {
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);

  const checkScroll = () => {
    if (containerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft + clientWidth < scrollWidth);
    }
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener('resize', checkScroll);
    return () => window.removeEventListener('resize', checkScroll);
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (containerRef.current) {
      const scrollAmount = 300;
      const newScrollLeft = containerRef.current.scrollLeft +
        (direction === 'left' ? -scrollAmount : scrollAmount);

      containerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      });

      setTimeout(checkScroll, 300);
    }
  };

  return (
    <div className="carousel-container">
      <div
        ref={containerRef}
        className="carousel-wrapper"
        onScroll={checkScroll}
      >
        {cards.map((card: CardType) => (
          <Card
            key={card.companyId}
            companyId={card.companyId}
            companyName={card.companyName}
            companyImage={card.companyImage}
          />
        ))}
      </div>

      <button
        onClick={() => scroll('left')}
        className={`scroll-button scroll-button-left ${!canScrollLeft ? 'hidden' : ''}`}
        disabled={!canScrollLeft}
        aria-label="Scroll left"
      >
      </button>

      <button
        onClick={() => scroll('right')}
        className={`scroll-button scroll-button-right ${!canScrollRight ? 'hidden' : ''}`}
        disabled={!canScrollRight}
        aria-label="Scroll right"
      >
      </button>
    </div>
  );
};

export default Slider;
