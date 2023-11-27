import { useEffect } from "react";
import { manItemInfo } from "../data/man_item_info";
import { womanItemInfo } from "../data/woman_item_info";

import { makeItemBox } from "./item_box.jsx";

const manItemInfoValues = Object.values(manItemInfo);
const womanItemInfoValues = Object.values(womanItemInfo);

export function MainItemContainer() {
  /**
   * val값을 모두 가지고 있는 객체를 리턴
   * @param {object} obj 필터 대상 객체
   * @param {string} key 필터링 기준이 되는 key 문자열
   * @param {Array} val 필터링 기준이 되는 value를 담은 배열
   * @returns obj를 리턴, key값의 val로 필터링
   */
  // const filteredItemEvery = (obj, key, val) =>
  //   obj.filter((v) => val.every((i) => v[key].includes(i)));

  /**
   * val값을 하나라도 가지고 있는 객체를 리턴
   * @param {object} obj 필터 대상 객체
   * @param {string} key 필터링 기준이 되는 key 문자열
   * @param {Array} val 필터링 기준이 되는 value를 담은 배열
   * @returns obj를 리턴, key값의 val로 필터링
   */
  const filteredItemSome = (obj, key, val) =>
    obj.filter((v) => v[key].some((i) => val.includes(i)));
  /**
   * val값을 가지고 있는 객체를 리턴
   * @param {object} obj 필터 대상 객체
   * @param {string} key 필터링 기준이 되는 key 문자열
   * @param {string} val 필터링 기준이 되는 value를 담은 문자열
   * @returns obj를 리턴, key값의 val로 필터링
   */
  const filteredItem = (obj, key, val) => obj.filter((v) => v[key].includes(val));

  /**
   * val값 하나만 가지고 있는 객체를 리턴
   * @param {object} obj 필터 대상 객체
   * @param {string} key 필터링 기준이 되는 key 문자열
   * @param {string} val 필터링 기준이 되는 value를 담은 문자열
   * @returns obj를 리턴, key값의 val로 필터링
   */
  const filteredItemOne = (obj, key, val) =>
    obj.filter((v) => v[key].length === 1 && v[key].includes(val));

  // console.log(filteredItemOnce(manItemInfoValues, "type", "top"));

  useEffect(() => {
    const observeTargets = document.querySelectorAll(".item-box-wrap");
    const eventTargets = document.querySelectorAll(".main-item-title");

    /** 화면에 targets요소가 보이면 seeing 요소 class 'on' toggle */
    const observeIntersection = (targets) => {
      const targetsArr = Array.from(targets);

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((v) => {
          if (v.isIntersecting) {
            const seeing = targetsArr.indexOf(v.target);
            eventTargets.forEach((v) => v.classList.remove("on"));
            eventTargets[seeing].classList.add("on");

            console.log(v);
          }
          if (v.boundingClientRect.top > 0 && !v.isIntersecting) {
            console.log("안보인다", v);
            const beforeSeeing =
              targetsArr.indexOf(v.target) - 1 >= 0
                ? targetsArr.indexOf(v.target) - 1
                : 0;

            eventTargets.forEach((v) => v.classList.remove("on"));
            eventTargets[beforeSeeing].classList.add("on");
          }
        });
      });
      targets.forEach((v) => observer.observe(v));
    };

    observeIntersection(observeTargets);
  }, []);

  return (
    <div className="main-item-container">
      <div className="seeing-box">
        <div className="main-item-title outer-title">
          <a href="#!">
            <img src="./images/woman/mainitem_woman_outer_title.jpg" alt="아우터" />
            <div className="tit">아우터</div>
            <div className="more">더보기</div>
          </a>
        </div>
        <div className="main-item-title man-title">
          <a href="#!">
            <img src="./images/man/mainitem_man_title.jpg" alt="맨즈" />
            <div className="tit">맨즈</div>
            <div className="more">더보기</div>
          </a>
        </div>
        <div className="main-item-title top-title">
          <a href="#!">
            <img src="./images/woman/mainitem_woman_top_title.jpg" alt="상의" />
            <div className="tit">상의</div>
            <div className="more">더보기</div>
          </a>
        </div>
        <div className="main-item-title bottom-title">
          <a href="#!">
            <img src="./images/woman/mainitem_woman_bottom_title.jpg" alt="하의" />
            <div className="tit">하의</div>
            <div className="more">더보기</div>
          </a>
        </div>
      </div>
      <div className="main-item-box">
        {/* 여성 아우터 (12개 까지만 노출) */}
        <div className="item-box-wrap outer-item-box-wrap">
          <h2 className="main-item-title-mobile">아우터</h2>
          {filteredItem(womanItemInfoValues, "type", "outer")
            .filter((v, i) => i < 12)
            .map((v, i) => (
              <div className="item-box" data-index={i} key={v.name}>
                {makeItemBox(v)}
              </div>
            ))}
        </div>
        {/* 남성 (12개 까지만 노출)*/}
        <div className="item-box-wrap man-item-box-wrap">
          <h2 className="main-item-title-mobile">맨즈</h2>
          {manItemInfoValues
            .filter((v, i) => i < 12)
            .map((v, i) => (
              <div className="item-box" data-index={i} key={v.name}>
                {makeItemBox(v)}
              </div>
            ))}
        </div>
        {/* 여성 상의 (12개 까지만 노출)*/}
        <div className="item-box-wrap woman-top-item-box-wrap">
          <h2 className="main-item-title-mobile">상의</h2>
          {filteredItemOne(womanItemInfoValues, "type", "top")
            .filter((v, i) => i < 12)
            .map((v, i) => (
              <div className="item-box" data-index={i} key={v.name}>
                {makeItemBox(v)}
              </div>
            ))}
        </div>
        {/* 여성 하의 (12개 까지만 노출)*/}
        <div className="item-box-wrap woman-bottom-item-box-wrap">
          <h2 className="main-item-title-mobile">하의</h2>
          {filteredItemSome(womanItemInfoValues, "type", "bottom")
            .filter((v, i) => i < 12)
            .map((v, i) => (
              <div className="item-box" data-index={i} key={v.name}>
                {makeItemBox(v)}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
