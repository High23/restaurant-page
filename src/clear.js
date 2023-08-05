export default function clearContent() {
    const container = document.querySelector('.container');
    while (container.firstChild){
        container.removeChild(container.firstChild);
    };
}