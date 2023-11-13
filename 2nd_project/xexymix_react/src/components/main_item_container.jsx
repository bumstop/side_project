import { itemInfo } from "../data/item_info";
import { ItemBox } from "./item_box.jsx"; // props 로 import받은 Object의 value를 넘겨준다

const itemInfoValues = Object.values(itemInfo);
// props 로 import받은 Object의 value를 넘겨준다
// <ItemBox info={manInfoValues}/>

export function MainItemContainer() {
  return (
    <div className="main-item-container">
      <div className="seeing-box"></div>
      <div className="main-item-box">
        <div className="item-box-wrap man-item-box-wrap">
          <ItemBox info={itemInfoValues} />
        </div>
        <div className="top-item"></div>
        <div className="bottom-item"></div>
      </div>
    </div>
  );
}
