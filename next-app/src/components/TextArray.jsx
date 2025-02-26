import { getRandomStyle } from '@/helpers/style';

export default function TextArray(props) {
  return (
    <div className="flex flex-row font-header text-white text-xl md:text-xl overflow-visible whitespace-nowrap gap-4">
      {[...Array(50)].map((_, index) => (
        <span key={index} style={getRandomStyle(props.color)}>
          {props.text}
        </span>
      ))}
    </div>
  );
}
