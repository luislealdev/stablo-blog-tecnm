import Container from "@/components/container";
import { urlForImage } from "@/lib/sanity/image";
import Image from "next/image";
import Link from "next/link";

export default function About({ authors, settings }) {
  return (
    <Container>
      <h1 className="text-brand-primary mb-3 mt-2 text-center text-3xl font-semibold tracking-tight dark:text-white lg:text-4xl lg:leading-snug">
        Sobre nosotros
      </h1>
      <div className="text-center">
        <p className="text-lg">
          Somos un equipo de personas apasionadas.
        </p>
      </div>

      <div className="mb-16 mt-6 grid grid-cols-3 gap-5 md:mb-32 md:mt-16 md:gap-16">
        {authors.slice(0, 3).map(author => {
          const imageProps = urlForImage(author?.image) || null;
          return (
            <div
              key={author._id}
              className="relative aspect-square overflow-hidden rounded-md odd:translate-y-10 odd:md:translate-y-16">
              <Link href={`/author/${author.slug}`}>
                <Image
                  src={imageProps.src}
                  alt={author.name || " "}
                  fill
                  sizes="(max-width: 320px) 100vw, 320px"
                  className="object-cover"
                />
              </Link>
            </div>
          );
        })}
      </div>

      <div className="prose mx-auto mt-14 text-center dark:prose-invert">
        <p>
          Somos un conjunto de departamentos que conformamos el
          <span> Centro de Desarrollo de Materiales Especiales</span>
          (CDME) con el objetivo de dar a conocer las nuevas noticias
          de nuestras investigaciones.
        </p>
        <p>
          Formamos parte de una de las mejores instituciones del país,
          el Intituto Nacional De México con sede en Celaya.
        </p>
        <p>
          <Link href="/contacto">Contacto</Link>
        </p>
        
      </div>
    </Container>
  );
}
