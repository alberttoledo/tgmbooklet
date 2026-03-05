import Image from "next/image";

type EditorialFigureProps = {
  src: string;
  alt: string;
  caption: string;
};

export function EditorialFigure({ src, alt, caption }: EditorialFigureProps) {
  return (
    <figure className="my-14 overflow-hidden rounded-[16px] border border-[var(--color-line)] bg-[#f4ede0] p-2 print:my-6">
      <Image
        src={src}
        alt={alt}
        className="h-auto w-full rounded-[10px]"
        width={1536}
        height={1024}
      />
      <figcaption className="font-label mt-4 px-1 text-[0.68rem] uppercase tracking-[0.12em] text-[var(--color-ink-soft)] md:text-[0.72rem]">
        {caption}
      </figcaption>
    </figure>
  );
}
