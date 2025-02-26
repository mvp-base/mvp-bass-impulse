import TextArray from './TextArray';

export default function SloganArea({ className }) {
  return (
    <div className={`${className} w-full overflow-hidden`}>
      <TextArray text="FORGET WHAT YOU KNOW" color="#2250f5" />
      <TextArray text="NEVER SEEN BEFORE" color="#CE7492" />
      <TextArray text="SOMETHING COMPLETELY NEW" color="#00ABB7" />
    </div>
  );
}
