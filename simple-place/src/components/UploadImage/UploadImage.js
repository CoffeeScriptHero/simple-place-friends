import {
  UploadImgWrapper,
  UploadButton,
  InnerUploadWrapper,
  ImageWrapper,
  Image,
  ErrorText,
} from "./UploadImage-styles";
import ImageUploading from "react-images-uploading";
import Icon from "../Icon/Icon";

const UploadImage = ({
  images,
  setImages,
  setStage,
  width = null,
  height = null,
  lastStage = false,
}) => {
  const onChange = (imageList, addUpdateIndex) => {
    setImages(imageList);
    setStage(2);
  };

  return (
    <UploadImgWrapper
      width={width + "px"}
      height={height - 42 + "px"}
      lastStage={lastStage}
    >
      {images.length > 0 && (
        <ImageWrapper>
          <Image src={images[0].data_url}></Image>
        </ImageWrapper>
      )}
      {images.length === 0 && (
        <ImageUploading
          value={images}
          onChange={onChange}
          maxNumber={1}
          dataURLKey="data_url"
          resolutionWidth={120}
          resolutionHeight={300}
          resolutionType="more"
        >
          {({ imageList, errors, onImageUpload, onImageRemove, dragProps }) => (
            <InnerUploadWrapper>
              {imageList.length === 0 && (
                <Icon type={"picture"} width="150" height="150" />
              )}
              {images.length === 0 && (
                <UploadButton onClick={onImageUpload} {...dragProps}>
                  Select from computer
                </UploadButton>
              )}
              {errors && (
                <ErrorText>{errors.resolution && `File too small.`}</ErrorText>
              )}
            </InnerUploadWrapper>
          )}
        </ImageUploading>
      )}
    </UploadImgWrapper>
  );
};

export default UploadImage;
