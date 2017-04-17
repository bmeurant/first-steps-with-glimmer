import Component, {tracked} from "@glimmer/component";

export default class ComicsLibrary extends Component {

  @tracked current;
  @tracked comics = [
    {id: 1, title: "Akira", scriptwriter: "Katsuhiro Otomo", illustrator: "Katsuhiro Otomo"},
    {id: 2, title: "BlackSad", scriptwriter: "Juan Diaz Canales", illustrator: "Juanjo Guarnido"}, 
    {id: 3, title: "Calvin and Hobbes", scriptwriter: "Bill Watterson", illustrator: "Bill Watterson"}
  ];
  
  selectComic(comic) {
    this.current = comic;
  }
  
  saveComic(comic) {
    let index = this.comics.findIndex(x => x.id === comic.id);
    if (index >= 0) {
      this.comics = [...this.comics.slice(0, index), comic, ...this.comics.slice(index + 1)];
    } else {
      comic.id = this.comics.length + 1;
      this.comics = [...this.comics, comic];
    }
    this.current = comic;
  }
  
  deleteComic(comic) {
    this.comics = this.comics.filter(x => x.id != comic.id);
    if (this.current && this.current.id === comic.id) {
      this.current = null;
    }
  }

  newComic() {
    this.current = {}
  }
}
