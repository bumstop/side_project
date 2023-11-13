import { seasonSlideInfo } from "../data/season_slide_info";
import { ItemBox } from "./item_box.jsx"; // props 로 import받은 Object의 value를 넘겨준다

const seasonSlideInfoValues = Object.values(seasonSlideInfo);
// props 로 import받은 Object의 value를 넘겨준다

export function SeasonSlideContainer() {
  return (
    <div className="season-slide-container">
      <div className="season-slide-title">
        <p>
          <b>실시간 급상승</b>, 많은 분들이 보고있어요.
        </p>
      </div>
      <div className="season-slide-box-wrap">
        <div className="season-slide-box">
          <ItemBox info={seasonSlideInfoValues} />
        </div>
      </div>
      <div className="season-slide-scrollbar"></div>
    </div>
  );
}
