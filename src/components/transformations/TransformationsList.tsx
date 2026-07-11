import { TransformationCard } from "./TransformationCard";

interface Transformation {
  label: string;
  text: string;
  before: string;
  after: string;
}

interface Props {
  items: Transformation[];
}

export function TransformationsList({ items }: Props) {
  return (
    <div className="space-y-24">
      {items.map((item) => (
        <TransformationCard
          key={item.label}
          item={item}
        />
      ))}
    </div>
  );
}