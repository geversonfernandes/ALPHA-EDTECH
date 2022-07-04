export default () => {
    const container = document.createElement("div");

    const template = `<h2>Cupcakes</h2><h3>Página 02</h3>`;

    container.innerHTML = template;

    return container;
};