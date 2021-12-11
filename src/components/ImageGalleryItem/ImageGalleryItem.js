import s from './ImageGalleryItem.module.css';

function ImageGalleryItem({ imageObj }) {
  return <img src={imageObj.webformatURL} alt="" className={s.Image} />;
}

export default ImageGalleryItem;
