function draggable(container, handle) {
    let movable = handle ? handle : container;
    ['mousedown', 'touchstart'].forEach(event => {
        movable.addEventListener(event, e => {
            const offsetX = e.clientX - parseInt(getComputedStyle(container).left);
            const offsetY = e.clientY - parseInt(getComputedStyle(container).top);

            function mouseMoveHandler(e) {
                container.style.top = (e.clientY - offsetY) + 'px';
                container.style.left = (e.clientX - offsetX) + 'px';
            }

            function reset() {
                removeEventListener('mousemove', mouseMoveHandler);
                removeEventListener('mouseup', reset);
            }

            addEventListener('mousemove', mouseMoveHandler);
            addEventListener('mouseup', reset);
        });
    })
}

let wrapper = document.querySelector('.wrapper');
draggable(wrapper);

let wrapperapp = document.querySelector('.wrapper-app');
draggable(wrapperapp);

let wrapperphoto = document.querySelector('.wrapper-photo');
draggable(wrapperphoto);