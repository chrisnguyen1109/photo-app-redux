export const photoListSelector = state => state.photos;

export const photoEditedSelector = photoId => {
    return state => state.photos.find(photo => photo.id === photoId);
};
