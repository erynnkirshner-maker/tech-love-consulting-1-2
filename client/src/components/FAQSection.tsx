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
        <Accordion type="single" collapsible className="space-y-0">
          {items.map((item, index) => (
            <AccordionItem
              key={index}
              value={`faq-${index}`}
              className="border-b border-[#C8CCCA] px-0"
              style={{ borderBottomWidth: '0.5px' }}
            >
              <AccordionTrigger className="text-left font-serif text-[1.05rem] font-normal text-[#1A1A18] py-5 hover:no-underline">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-[#3C3C38] pb-5 text-[15px] leading-[1.8]">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
