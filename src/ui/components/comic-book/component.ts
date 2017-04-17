import Component, { tracked } from '@glimmer/component';

export default class ComicBook extends Component {
  element: Element;

  @tracked editable = false;

  @tracked("args")
  get currentComic() {
    return this.args["comic"];
  }

  @tracked("args", "editable")
  get isEditable() {
    return this.editable || !this.args["comic"].id;
  }

  edit() {
    this.editable = true;
  }

  save() {
    this.editable = false;
    let comic = {
      id: this.args["comic"].id, 
      title: this.element.querySelector('#title').value,
      scriptwriter: this.element.querySelector('#scriptwriter').value,
      illustrator: this.element.querySelector('#illustrator').value
    };
    this.args["saveComic"](comic);
  }
};