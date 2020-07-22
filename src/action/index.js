import * as actionTypes from '../const/actionTypes'
// infoItem = {id , media_type}
export const actClickItem = (itemClick) => {
  console.log(itemClick)
  return {
    type: actionTypes.CLICK_ITEM,
    payload: itemClick
  }
}