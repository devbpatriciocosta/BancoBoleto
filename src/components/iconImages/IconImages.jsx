/* eslint-disable @next/next/no-img-element */
export default function IconImages({ imageName, type }) {
  // eslint-disable-next-line jsx-a11y/alt-text
  return <img src={`images/${imageName}.${type}`} />
}
