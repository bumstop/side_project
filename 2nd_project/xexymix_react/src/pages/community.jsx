import { Link } from "react-router-dom";
import { gnbMenu } from "../data/gnb";

export function Community() {
  const CommuSub = gnbMenu.gnbCategory.filter((v) => v.txt === "커뮤니티")[0].sub;

  const makeCommuCate = CommuSub.map((v) => (
    <li key={v.txt}>
      <Link to={v.link}>{v.txt}</Link>
    </li>
  ));

  return (
    <>
      <h2 className="commu-title">커뮤니티</h2>
      <ul className="commu-category">{makeCommuCate}</ul>
      <div className="commu-top">
        <div className="faq-search-box">
          <fieldset>
            <label for="faq-search">
              FAQ
              <br />
              SEARCH
            </label>
            <select>
                <option>전체검색</option>
                <option>주문/결제</option>
                <option>배송</option>
                <option>교환/반품</option>
            </select>
            <input id="faq-search"></input>
          </fieldset>
        </div>
        <div className="cs-info">
          <p>고객센터 운영안내</p>
          <p>1661-2811</p>
          <p>
            평일 10:00 ~ 17:00 / 점심 12:30 ~ 14:00
            <br />
            토/일요일 및 공휴일 휴무
          </p>
        </div>
      </div>
      <div className="commu-bottom">
        <div className="faq-box"></div>
        <div className="right-box">
          <div className="notice-box"></div>
          <div className="event-box"></div>
        </div>
      </div>
    </>
  );
}
