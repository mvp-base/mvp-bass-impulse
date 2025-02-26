import React, { useCallback, useEffect, useState } from 'react';

export function usePrevNextButtons(emblaApi) {
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);

  const onPrevButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollPrev();
  }, [emblaApi]);

  const onNextButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback((emblaApi) => {
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onSelect(emblaApi);
    emblaApi.on('reInit', onSelect);
    emblaApi.on('select', onSelect);
  }, [emblaApi, onSelect]);

  return {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  };
}

export function PrevButton(props) {
  return (
    <button className="btn btn-circle" type="button" {...props}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="size-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path d="M15.293 3.293 6.586 12l8.707 8.707 1.414-1.414L9.414 12l7.293-7.293-1.414-1.414z" />
      </svg>
    </button>
  );
}

export function NextButton(props) {
  return (
    <button className="btn btn-circle" type="button" {...props}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="size-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path d="M7.293 4.707 14.586 12l-7.293 7.293 1.414 1.414L17.414 12 8.707 3.293 7.293 4.707z" />
      </svg>
    </button>
  );
}
