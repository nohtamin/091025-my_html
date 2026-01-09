document.addEventListener('DOMContentLoaded', () => {
    const hoverImages = document.querySelectorAll('.hover-gif');

    hoverImages.forEach(img => {
        // 기본 썸네일(정지 이미지) 주소 저장
        const staticSrc = img.src;
        // 호버 시 바뀔 GIF 주소 가져오기
        const hoverSrc = img.getAttribute('data-hover');

        // 이미지의 부모 요소(컨테이너)에 이벤트 연결
        const container = img.closest('.thumb-container');

        if (container && hoverSrc) {
            container.addEventListener('mouseenter', () => {
                img.src = hoverSrc;
            });

            container.addEventListener('mouseleave', () => {
                img.src = staticSrc;
            });
        }
    });

    console.log("NOH TAEMIN Portfolio: Interactive GIF loading ready.");
});