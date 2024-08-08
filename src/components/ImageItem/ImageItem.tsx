export const ImageItem = (props: { srcUrl: string; }) => {
  const { srcUrl } = props;

  return (
    <div className="image__conteiner">
      <img src={srcUrl} alt="" className="image" />
      <a href="#" className="image__delete"></a>
    </div>
  )
}
