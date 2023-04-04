export default function Article(info) {
  return (
    <article className="article">
      <time datetime="2020-11-12" className="time">
        {info.time}
      </time>
      <h2 class="artTitle">{info.title}</h2>

      <img src={info.image} alt={info.alt} />

      <p class="post">{info.post} </p>
      <br />

      <a class="cont" href="">
        Continues...
      </a>
      <br />
    </article>
  );
}
