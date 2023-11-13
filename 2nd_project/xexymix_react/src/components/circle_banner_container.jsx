const circleBannerItems = [
    ["yoga", ["요가 컬렉션", ""]],
    ["cacaopay", ["4천원", "즉시할인"]],
    ["tosspay", ["10%할인", "즉시적용"]],
    ["present", ["선물하기", "서비스 오픈"]],
    ["notice", ["회원 등급별", "혜택안내"]],
];

function CircleBanner() {
    return circleBannerItems.map((v) => (
        <div class="circle-item">
            <img src={"./images/circle_banner/slide_" + v[0] + ".png"} alt="" />
            <span class="circle-item-txt">{v[1][0]}<br/>{v[1][1]}</span>
        </div>
    ));
}

export function CircleBannerContainer() {
    <div class="circle-banner-container">
        <CircleBanner />
    </div>
}