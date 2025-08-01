import Price from './price';
import ActionButtons from './actionButtons';

function PriceSection({ price }) {
  return (
    <section>
      <Price price={price} />
      <ActionButtons />
    </section>
  );
}

export default PriceSection;
