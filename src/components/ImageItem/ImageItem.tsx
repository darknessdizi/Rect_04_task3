import img1 from '../../img/1.jpg';

export const ImageItem = () => {
  return (
    <div className="image__conteiner">
      <img src={img1} alt="" className="image" />
      <a href="#" className="image__delete"></a>
    </div>
  )
}
