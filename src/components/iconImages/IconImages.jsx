export default function IconImages({ imageName, type }) {
  return <img src={`images/${imageName}.${type}`} />
}
