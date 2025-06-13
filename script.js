window.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('bubbleContainer');
    const bubbles = container.querySelectorAll('.bubble');
    bubbles.forEach(bubble => {
        bubble.style.position = 'absolute';
        bubble.style.top = Math.random() * 80 + '%';
        bubble.style.left = Math.random() * 80 + '%';

        // Drag functionality
        let isDragging = false, offsetX, offsetY;

        bubble.addEventListener('mousedown', (e) => {
            isDragging = true;
            // Calculate offset between mouse and bubble top/left
            offsetX = e.clientX - bubble.offsetLeft;
            offsetY = e.clientY - bubble.offsetTop;
            bubble.style.zIndex = 1000; // bring to front
        });

        document.addEventListener('mousemove', (e) => {
            if (isDragging) {
                // Keep bubble within container bounds
                const rect = container.getBoundingClientRect();
                let x = e.clientX - rect.left - offsetX;
                let y = e.clientY - rect.top - offsetY;
                // Ensure bubble stays within the container
                x = Math.max(0, Math.min(x, rect.width - bubble.offsetWidth));
                y = Math.max(0, Math.min(y, rect.height - bubble.offsetHeight));
                bubble.style.left = x + 'px';
                bubble.style.top = y + 'px';
            }
        });

        document.addEventListener('mouseup', () => {
            isDragging = false;
            bubble.style.zIndex = '';
        });
    });
});