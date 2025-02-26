function TextRow(props) {
  return (
    <div className=" flex flex-row w-screen items-start text-white font-display text-2xl">
      <div className={`flex flex-row font-display text-white text-xl md:text-2xl overflow-visible whitespace-nowrap gap-8`}>
        {[...Array(props.amount)].map((_, index) => (
          <span key={index}>{props.text}</span>
        ))}
      </div>
    </div >
  );
}

export default function HeroText(props) {
  return (
    <div>
      <TextRow text={props.text} amount={51} />
      <TextRow text={props.text} amount={40} />
      <TextRow text={props.text} amount={55} />
    </div>
  );
}
