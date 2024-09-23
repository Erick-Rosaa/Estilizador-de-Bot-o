const form = document.querySelector('#controles');
const btn = document.querySelector('#btn');
const css = document.querySelector('#css');

const handleStyle = {
    element: btn,
    backgroundColor(value) {
        this.element.style.backgroundColor = value;
    },
    color(value) {
        this.element.style.color = value;
    },
    height(value) {
        this.element.style.height = value + 'px';
    },
    width(value) {
        this.element.style.width = value + 'px';
    },
    borderRadius(value) {
        this.element.style.borderRadius = value + 'px';
    },
    border(value) {
        this.element.style.border = value;
    },
    text(value) {
        this.element.innerText = value;
    },
    fontSize(value) {
        this.element.style.fontSize = value + 'rem';
    }
}

function handleForm(event) {
    const name = event.target.name;
    const value = event.target.value;
    
    handleStyle[name](value);
    cssText();
};

function cssText() {
    css.innerHTML = btn.style.cssText.split('; ').join(';</div><div>');
}


form.addEventListener('change', handleForm);