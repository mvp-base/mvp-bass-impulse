import Stripe from '@/components/Stripe';

export default function Body(props) {
  return (
    <div className="flex flex-col flex-1">
      <Stripe
        type="top"
        color1Hex={props.color1Hex}
        color2Hex={props.color2Hex}
        headline={props.headline}
      />
      <div
        className={`${props.className} py-8 flex flex-grow w-full place-items-center self-center justify-center`}
      >
        {props.children}
      </div>
      <Stripe
        type="bottom"
        color1Hex={props.color1Hex}
        color2Hex={props.color2Hex}
        headline={props.headline}
      />
    </div>
  );
}
