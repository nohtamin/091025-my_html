// NOH TAEMIN Portfolio Management
document.addEventListener('DOMContentLoaded', () => {
    console.log("Portfolio optimized for visual delivery.");
    
    // 이미지가 비어있을 때 콘솔에 알림 (실제 이미지 교체 시 확인용)
    const mediaItems = document.querySelectorAll('.visual-placeholder');
    if (mediaItems.length > 0) {
        console.log(`${mediaItems.length}개의 미디어 공간이 준비되어 있습니다.`);
    }
});