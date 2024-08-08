import { ImageItem } from "../ImageItem/ImageItem";
import { v4 as uuidv4 } from 'uuid';

export const FieldImages = (props: { array: string[]; }) => {
  const { array } = props;

  return (
    <div className="conteiner__images">
      {
        array.map((item: string) => {
          return <ImageItem srcUrl={item} key={uuidv4()} />
        })
      }
    </div>
  )
}
