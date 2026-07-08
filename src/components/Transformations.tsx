import { transformations } from "../data/site";
import { SectionHeader } from "./SectionHeader";
import { TransformationCard } from "./transformations/TransformationCard";

export function Transformations() {
  return (
    <section className="bg-[#050505] px-4 py-14 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
      <div className="mx-auto max-w-7xl">

        <SectionHeader
          eyebrow="Transformações"
          title="Resultados que aparecem fora do treino."
          description="Cada transformação representa disciplina, constância e uma decisão diária de não desistir."
        />

        <div className="grid gap-4 md:grid-cols-3">
          {transformations.map((item, index) => (
            <TransformationCard
              key={item.label}
              {...item}
              index={index}
            />
          ))}
        </div>

      </div>
    </section>
  );
}