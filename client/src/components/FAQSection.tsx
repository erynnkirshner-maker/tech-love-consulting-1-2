import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  items: FAQItem[];
  headline?: string;
}

export default function FAQSection({ items, headline }: FAQSectionProps) {
  return (
    <section className="section-spacing">
      <div className="container content-narrow">
        {headline && <h2 className="mb-8">{headline}</h2>}
        <Accordion type="single" collapsible className="space-y-4">
          {items.map((item, index) => (
            <AccordionItem
              key={index}
              value={`faq-${index}`}
              className="border border-border rounded-lg px-6 bg-card"
            >
              <AccordionTrigger className="text-left font-serif text-lg font-semibold text-teal py-5 hover:no-underline">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-foreground/80 pb-5 text-base leading-relaxed">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
