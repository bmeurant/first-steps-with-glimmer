import Component, {tracked} from "@glimmer/component";

export default class ComicsLibrary extends Component {

  @tracked comics = [
    {id: 1, title: "Akira", scriptwriter: "Katsuhiro Otomo", illustrator: "Katsuhiro Otomo"},
    {id: 2, title: "BlackSad", scriptwriter: "Juan Diaz Canales", illustrator: "Juanjo Guarnido"}, 
    {id: 3, title: "Calvin and Hobbes", scriptwriter: "Bill Watterson", illustrator: "Bill Watterson"}
  ];

  deleteComic(comic) {
    this.comics = this.comics.filter(x => x.id != comic.id);
  }

}
