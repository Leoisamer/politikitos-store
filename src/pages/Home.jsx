import Hero from "../componentes/hero/Hero";


function Home() {
  return (
    <>
      <section
        style={{
          padding: "3rem",
          textAlign: "center",
          maxWidth: "900px",
          margin: "0 auto"
        }}
      >
        <h2>
          Bienvenido a Politikitos Store
        </h2>

        <p
          style={{
            fontSize: "1.2rem",
            marginTop: "1rem",
            lineHeight: "1.8"
          }}
        >
          Descubrí una colección de mascotas virtuales inspiradas
          en la sátira política.
          Explorá el catálogo, elegí tus Politikitos favoritos
          y completá tu adopción.
          Porque la política también puede convertirse en humor.
        </p>

        <video
          src="/img/entrada.mp4"
          autoPlay
          muted
          loop
          playsInline
          style={{
            width: "100%",
            maxWidth: "700px",
            borderRadius: "20px",
            marginTop: "2rem"
          }}
        />
        
      <Hero />

        <p
          style={{
            marginTop: "2rem",
            fontStyle: "italic"
          }}
        >
          Adoptá responsablemente.
        </p>
      </section>
    </>
  );
}

export default Home;