import React from 'react';
import Image from 'next/image';

export const Thumb = (props) => {
  const { photo, onClick } = props;

  return (
    <button className="mr-5 flex-none" onClick={onClick} type="button">
      <Image
        alt="photo"
        src={photo}
        placeholder={photo.placeholder ? 'blur' : undefined}
        blurDataURL={photo.placeholder}
        width={photo.width}
        height={photo.height}
        className="rounded-md max-h-20"
        style={{
          width: 'auto',
          height: '100%',
        }}
      />
    </button>
  );
};
