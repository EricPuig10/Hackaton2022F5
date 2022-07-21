import img1 from "https://sh-cdn.singulart.com/eyJidWNrZXQiOiJzaW5ndWxhcnQtd2Vic2l0ZS1wcm9kIiwia2V5IjoiaGVyby1iYW5uZXJcL3BpY3R1cmVzXC9jcm9wcGVkXC9kZXNrdG9wXC8xX2Rlc2t0b3BfaG9tZS1oZXJvLWRlc2t0b3AtZWxldmF0ZS15b3VyLXdvcmxkLTM0NDAuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoxOTIwfSwidG9Gb3JtYXQiOiJ3ZWJwIn19?signature=52e49c9bdc7b593e0681f68f66327570294d3d7d2748576ab371b86882313734";
import img2 from "https://d17h7hjnfv5s46.cloudfront.net/assets/build/images/banners/search/desktop/design_banner_desk_search1920.1a7baf6b.jpg";
import img3 from "https://d17h7hjnfv5s46.cloudfront.net/assets/build/images/banners/collections/desktop/themes-1600x423.51294e1d.jpg";
import "./carrousel.css"

export const Carrousel = () => {

    return(
    <div class="slide">
        <div class="slide-inner">
            <input class="slide-open" type="radio" id="slide-1" 
            name="slide" aria-hidden="true" hidden="" checked="checked"/>
            <div class="slide-item">
                <img src={img1} alt="img"/>
            </div>
            <input class="slide-open" type="radio" id="slide-2" 
            name="slide" aria-hidden="true" hidden=""/>
            <div class="slide-item">
                <img src={img2} alt="img"/>
            </div>
            <input class="slide-open" type="radio" id="slide-3" 
            name="slide" aria-hidden="true" hidden=""/>
            <div class="slide-item">
                <img src={img3} alt="img"/>
            </div>
        <label for="slide-3" class="slide-control prev control-1">‹</label>
        <label for="slide-2" class="slide-control next control-1">›</label>
        <label for="slide-1" class="slide-control prev control-2">‹</label>
        <label for="slide-3" class="slide-control next control-2">›</label>
        <label for="slide-2" class="slide-control prev control-3">‹</label>
        <label for="slide-1" class="slide-control next control-3">›</label>
        <ol class="slide-indicador">
            <li>
            <label for="slide-1" class="slide-circulo">•</label>
            </li>
            <li>
            <label for="slide-2" class="slide-circulo">•</label>
            </li>
            <li>
            <label for="slide-3" class="slide-circulo">•</label>
            </li>
        </ol>
    </div>
  </div>

        
    )
}