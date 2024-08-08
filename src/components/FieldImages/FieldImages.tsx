import img1 from '../../img/1.jpg';

export const FieldImages = () => {
  return (
    <div className="conteiner__images">

      <div className="image__conteiner">
        <img src={img1} alt="" className="image" />
        <a href="" className="image__delete"></a>
      </div>

    </div>
  )
}
