import "./styles.css";
import Header from "./components/Header";
import Article from "./components/Article";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="body">
      <Header />
      <div className="main">
        <Article
          title="On the Street in Brooklyn"
          time="11/12/20"
          image="blog-image-1.jpg"
          alt="Woman on sidewalk"
          post="Cray lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe
        molestias rerum asperiores iste a tempora dolores alias, dolorem
        exercitationem eaque ab. Numquam doloremque reiciendis impedit ipsa
        deleniti officia expedita odio! Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Eos id sequi, ad sit numquam minus rem tenetur
        corrupti ut doloremque sunt, mollitia, optio nostrum? Asperiores, vel?
        Unde in quos porro? Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Ad officia cumque veniam, aliquam quis expedita dolores, numquam
        quidem quam dolorem explicabo non nobis molestias adipisci temporibus.
        Repudiandae sunt sequi modi! Lorem ipsum dolor sit, amet consectetur
        adipisicing elit. Consectetur perferendis incidunt et, ullam atque, vero
        ab odio saepe distinctio totam praesentium dignissimos aliquam, commodi
        iusto. Obcaecati praesentium saepe nesciunt sapiente? Lorem ipsum, dolor
        sit amet consectetur adipisicing elit. Ab corrupti aliquam quod voluptas
        laborum, nemo ut cum harum alias assumenda amet ea magnam repellat a
        quis. Dignissimos ipsum facere corporis? Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Provident placeat, eaque, porro voluptas
        saepe dicta soluta cumque maxime dignissimos similique sed temporibus
        autem consectetur odit voluptatibus, aperiam sit vel quasi. Lorem ipsum
        dolor, sit amet consectetur adipisicing elit. Praesentium, ipsa laborum.
        Temporibus recusandae optio voluptatibus ut neque iste commodi facilis,
        possimus facere, voluptates officia est saepe laudantium soluta quas
        quae?"
        />
        <Article
          title="Vintage in Vogue"
          time="11/11/20"
          image="blog-image-2.jpg"
          alt="Group strike a pose"
          post="Selfies lorem ipsum dolor sit amet consectetur adipisicing elit.
        Expedita, consectetur quo quaerat nesciunt placeat molestias rerum
        doloremque vitae at inventore. Fugit laudantium quae possimus eaque
        harum ex debitis assumenda est! Lorem, ipsum dolor sit amet consectetur
        adipisicing elit. Exercitationem perspiciatis magni suscipit, sequi
        voluptatem esse distinctio rem laboriosam aut asperiores veniam vero
        nisi ratione fuga officia! Officiis ducimus nihil provident?Lorem ipsum
        dolor sit, amet consectetur adipisicing elit. Praesentium, quis id.
        Nobis similique adipisci ipsam hic atque odio quisquam unde natus
        inventore. Ullam recusandae praesentium quibusdam provident libero
        dolorem dolore!Lorem Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Architecto, earum mollitia labore ab esse ut repudiandae enim
        ipsum eveniet ullam libero facilis recusandae dicta quos, cum
        voluptatibus error veritatis! Asperiores. Lorem ipsum dolor, sit amet
        consectetur adipisicing elit. Ipsum, omnis optio voluptates quo eum
        deserunt, magni placeat at voluptatibus quae, id architecto itaque
        adipisci. Est consequuntur quae doloribus temporibus nulla. Lorem ipsum,
        dolor sit amet consectetur adipisicing elit. Voluptatibus veniam quod
        eos magnam sint perspiciatis aliquam iure eum maiores? Dolores,
        explicabo voluptatum? Amet dolore dolorem laudantium quaerat quae quidem
        accusamus? Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Rerum incidunt itaque odio voluptatem debitis autem!"
        />
      </div>
      <Footer />
    </div>
  );
}
