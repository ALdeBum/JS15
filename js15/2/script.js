const resizer = document.querySelector('.resizer');
const leftPanel = document.querySelector('.left-panel');
const rightPanel = document.querySelector('.right-panel');
let isPanelHidden = false;

// Управление выдвижной панелью
resizer.addEventListener('click', () => {
    isPanelHidden = !isPanelHidden;
    if (isPanelHidden) {
        leftPanel.classList.add('hidden');
        resizer.classList.add('hidden');
        rightPanel.style.width = "calc(100% - 20px)";
    } else {
        leftPanel.classList.remove('hidden');
        resizer.classList.remove('hidden');
        rightPanel.style.width = "";
    }
});

// Управление горизонтальными ползунками
document.querySelectorAll('.horizontal-resizer').forEach(resizer => {
    let prevBlock, nextBlock, startY, startHeight;

    resizer.addEventListener('mousedown', (e) => {
        prevBlock = resizer.previousElementSibling;
        nextBlock = resizer.nextElementSibling;
        startY = e.clientY;
        startHeight = prevBlock.getBoundingClientRect().height;

        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', onMouseUp);
    });

    function onMouseMove(e) {
        const delta = e.clientY - startY;
        const newHeight = startHeight + delta;
        prevBlock.style.flex = `0 0 ${newHeight}px`;
        nextBlock.style.flex = `1 1 auto`;
    }

    function onMouseUp() {
        document.removeEventListener('mousemove', onMouseMove);
        document.removeEventListener('mouseup', onMouseUp);
    }
});
