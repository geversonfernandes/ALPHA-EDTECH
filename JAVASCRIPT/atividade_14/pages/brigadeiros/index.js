export default () => {
    const container = document.createElement("div");

    const template = `<h2>Brigadeiros</h2><h3>Página 01</h3>`;

    container.innerHTML = template;

    return container;
};