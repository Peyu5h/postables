import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion";

export function FAQ() {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger className="text-xl">
          Is Postable free to use?
        </AccordionTrigger>
        <AccordionContent>
          <p className="text-[16px] text-mutedGray">
            Yes, it&apos;s completely free and unlimited! You can convert as
            many tweets into social media images as you&apos;d like without any
            restrictions.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger className="text-xl">
          What social media platforms does this tool support?
        </AccordionTrigger>
        <AccordionContent>
          <p className="text-[16px] text-mutedGray">
            Postable currently supports Twitter, Facebook, Instagram, LinkedIn,
            and TikTok. We&apos;re constantly working on adding more platforms
            to our list.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger className="text-xl">
          Can I customize the created images?
        </AccordionTrigger>
        <AccordionContent>
          <p className="text-[16px] text-mutedGray">
            Yes, you can customize the created images by adding your own text,
            images, and more. You can also choose from a variety of templates to
            make your images stand out.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4">
        <AccordionTrigger className="text-xl">
          Do I need design skills to use this platform?
        </AccordionTrigger>
        <AccordionContent>
          <p className="text-[16px] text-mutedGray">
            No, you don&apos;t need any design skills to use this platform.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-5">
        <AccordionTrigger className="text-xl">
          Do I need to know the format or size of each social media?
        </AccordionTrigger>
        <AccordionContent>
          <p className="text-[16px] text-mutedGray">
            No, you don&apos;t need to know the format or size of each social
            media.
          </p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
