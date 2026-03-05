import Image from "next/image";

type EditorialFigureProps = {
  src: string;
  alt: string;
  caption: string;
};

export function EditorialFigure({ src, alt, caption }: EditorialFigureProps) {
  return (
    <figure className="my-12 overflow-hidden rounded-[20px] border border-[var(--color-line)] bg-[#f9f3e7] p-3 shadow-[0_25px_60px_-55px_rgba(20,17,15,1)] print:my-6">
      <Image
        src={src}
        alt={alt}
        className="h-auto w-full rounded-[14px]"
        width={1536}
        height={1024}
      />
      <figcaption className="font-label mt-4 text-[0.68rem] uppercase tracking-[0.14em] text-[var(--color-ink-soft)] md:text-[0.72rem]">
        {caption}
      </figcaption>
    </figure>
  );
}
