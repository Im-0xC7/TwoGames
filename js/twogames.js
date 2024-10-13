class Tabs {
    constructor(container) {
        this.container = container;
        this.tabs = container.querySelectorAll('.trigger');
    }
    init() {
        this.tabs.forEach(tab => {
            tab.addEventListener('click', e => {
                this.toggleTabs(e);
                this.toggleContent(e);
            });
        });
    }
    toggleTabs(e) {
        this.tabs.forEach(t => t.classList.remove('active'));
        e.target.classList.add('active');
    }
    toggleContent(e) {
        this.container.querySelectorAll('.content').forEach(i => i.classList.remove('active'));
        const sel = e.target.getAttribute('data-target');
        const cont = this.container.querySelector(sel);
        cont.classList.add('active');
    }
}

const tabs = new Tabs(document.querySelector('.tabs'));
tabs.init();