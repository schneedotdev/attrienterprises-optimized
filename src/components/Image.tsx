type ImageProps = {
  id?: string
  imgSrc: string
  altText: string
}

export default function Image({ id, imgSrc, altText }: ImageProps) {
  return (
    <img
      id={id || ''}
      src={imgSrc}
      loading="lazy"
      decoding="async"
      alt={altText}
    />
  )
}
