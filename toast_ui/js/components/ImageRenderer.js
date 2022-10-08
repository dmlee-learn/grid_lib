class ImageRenderer {
  constructor(props) {
    const el = document.createElement('img');
    el.src = 'some-image-link';

    this.el = el;
    this.render(props);
  }

  getElement() {
    return this.el;
  }

  render(props) {
    // you can change the image link as changes the `value`
    this.el.src = String(props.value);
  }
}
export default ImageRenderer;