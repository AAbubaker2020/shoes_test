import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "What makes Luxe Elegance products unique?",
    answer: "Each Luxe Elegance piece is handcrafted by master artisans using the finest materials. Our designs are limited editions, ensuring exclusivity. We combine traditional craftsmanship with innovative designs to create timeless, luxurious accessories."
  },
  {
    question: "How do I care for my Luxe Elegance product?",
    answer: "We recommend storing your Luxe Elegance products in the provided dust bags when not in use. For leather items, use a soft, dry cloth for regular cleaning. Avoid exposure to direct sunlight, heat, and moisture. For specific care instructions, please refer to the care card included with your purchase."
  },
  {
    question: "Do you offer international shipping?",
    answer: "Yes, we offer international shipping to most countries. Shipping costs and delivery times vary depending on the destination. All international orders are shipped via express courier services to ensure safe and timely delivery."
  },
  {
    question: "What is your return policy?",
    answer: "We offer a 30-day return policy for unworn, undamaged items in their original packaging. Custom orders are final sale. To initiate a return, please contact our customer service team for a return authorization and shipping instructions."
  },
  {
    question: "Can I customize my Luxe Elegance product?",
    answer: "Yes, we offer customization services for select products. This may include personalized initials, choice of materials, or bespoke designs. Please contact our customer service team for more information on customization options and pricing."
  }
]

export default function FAQPage() {
  return (
    <div className="container mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-8 text-center text-gold">Frequently Asked Questions</h1>
      <Accordion type="single" collapsible className="w-full">
        {faqs.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger className="text-left text-gold">{faq.question}</AccordionTrigger>
            <AccordionContent>{faq.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
}

